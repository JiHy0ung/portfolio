import { useState } from "react";
import CursorTooltip from "../../components/CursorTooltip";
import { useCursorTooltip } from "../../hooks/useCursorTooltip";
import { useImagesLoaded } from "../../hooks/useImagesLoaded";

const CARD_FRONT = "/images/card_front.webp";
const CARD_BACK = "/images/card_back.webp";

/** 명함 이미지가 뜨기 전까지 면 위를 덮는 스켈레톤 — 다 뜨면 서서히 사라짐 */
const CardSkeleton = ({ loaded }: { loaded: boolean }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 bg-stone-200 transition-opacity duration-500 ${
      loaded ? "opacity-0" : "animate-pulse opacity-100"
    }`}
  />
);

/** 명함 뒷면 위에 겹쳐 둘 투명 링크 영역 */
const CONTACT_LINKS = [
  {
    label: "GitHub",
    ariaLabel: "GitHub 열기",
    href: "https://github.com/JiHy0ung",
    external: true,
    className: "right-4 h-32",
  },
  {
    label: "E-mail",
    ariaLabel: "이메일 보내기",
    href: "mailto:dbdnwm113@naver.com",
    className: "right-10 h-35",
  },
  {
    label: "Call",
    ariaLabel: "전화 걸기",
    href: "tel:010-6354-9405",
    className: "right-16 h-26",
  },
];

const Contact = () => {
  const [rotation, setRotation] = useState(0);
  const { tooltip, bind } = useCursorTooltip();
  const cardLoaded = useImagesLoaded([CARD_FRONT, CARD_BACK]);

  const steps = Math.round(rotation / 180);
  const isBack = ((steps % 2) + 2) % 2 === 1;

  const handleFlip = () => {
    setRotation((prev) => prev + 180);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div
        className="card-outer relative w-72 h-96 transition-transform duration-700"
        style={{
          transform: isBack ? "rotate(-90deg)" : "rotate(0deg)",
        }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {/* 카드 앞면 */}
          <div
            className="card-front metal-shine absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              backgroundImage: `url(${CARD_FRONT})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardSkeleton loaded={cardLoaded} />
          </div>

          {/* 뒷면 */}
          <div
            className="card-back absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              backgroundImage: `url(${CARD_BACK})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardSkeleton loaded={cardLoaded} />
          </div>

          {isBack &&
            CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                {...bind(link.label)}
                className={`absolute top-4 w-5.5 cursor-pointer ${link.className}`}
              />
            ))}
        </div>

        <button
          type="button"
          onClick={handleFlip}
          {...bind("click!")}
          aria-label="카드 뒤집기"
          className={`flip-btn absolute w-1/4 h-1/4 cursor-pointer bg-transparent border-none ${
            isBack ? "left-0 bottom-0" : "right-0 bottom-0"
          }`}
        />
      </div>

      {/* 회전하는 카드 바깥에 두어야 마우스 위치에 정확히 붙음 */}
      <CursorTooltip tooltip={tooltip} />

      <style>
        {`
          .card-outer { perspective: 1200px; }
          .card-front {
            box-shadow: 10px 10px 25px rgba(0,0,0,0.4);
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            transform-origin: center bottom;
          }
          .card-back {
            box-shadow: -10px 10px 25px rgba(0,0,0,0.4);
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            transform-origin: center bottom;
            transform: rotateY(180deg);
          }
          .card-outer:has(.flip-btn:hover) .card-front {
            transform: rotateX(8deg) rotateY(-8deg);
            box-shadow: 12px 28px 34px -14px rgba(0,0,0,0.7);
          }
          .card-outer:has(.flip-btn:hover) .card-back {
            transform: rotateY(180deg) rotateX(8deg) rotateY(8deg);
            box-shadow: -12px 28px 34px -14px rgba(0,0,0,0.7);
          }
          .metal-shine {
            overflow: hidden;
          }
          .metal-shine::after {
            content: "";
            position: absolute;
            top: -60%;
            left: -60%;
            width: 220%;
            height: 220%;
            background: linear-gradient(
              100deg,
              transparent 32%,
              rgba(255, 255, 255, 0.04) 42%,
              rgba(255, 255, 255, 0.55) 47%,
              rgba(210, 225, 255, 0.45) 49%,
              rgba(255, 235, 245, 0.45) 51%,
              rgba(255, 255, 255, 0.55) 53%,
              rgba(255, 255, 255, 0.04) 58%,
              transparent 68%
            );
            transform: translateX(-140%) rotate(8deg);
            mix-blend-mode: overlay;
            filter: blur(1.5px);
            pointer-events: none;
            animation: shine 9s cubic-bezier(0.45, 0, 0.15, 1) infinite;
          }
          @keyframes shine {
            0% { transform: translateX(-140%) rotate(10deg); }
            45% { transform: translateX(140%) rotate(10deg); }
            100% { transform: translateX(140%) rotate(10deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
