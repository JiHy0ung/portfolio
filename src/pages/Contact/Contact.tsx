import React from "react";

const Contact = () => {
  const [rotation, setRotation] = React.useState(0);
  const [hoverPos, setHoverPos] = React.useState<{
    x: number;
    y: number;
    label: string;
  } | null>(null);

  const steps = Math.round(rotation / 180);
  const isBack = ((steps % 2) + 2) % 2 === 1;

  const handleClick = () => {
    setRotation((prev) => prev + 180);
  };

  const handleMouseMove = (label: string) => (e: React.MouseEvent) => {
    setHoverPos({ x: e.clientX, y: e.clientY, label });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center -mt-20">
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
            className="card-front metal-shine absolute inset-0 flex flex-col justify-between"
            style={{
              backfaceVisibility: "hidden",
              backgroundImage: "url(/images/card-front.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* 뒷면 */}
          <div
            className="card-back absolute inset-0 flex flex-col justify-center gap-2"
            style={{
              backfaceVisibility: "hidden",
              backgroundImage: "url(/images/card-back.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {isBack && (
            <>
              <a
                href="https://github.com/JiHy0ung"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove("GitHub")}
                onMouseLeave={() => setHoverPos(null)}
                className="absolute top-4 right-4 h-32 w-5.5 cursor-pointer"
              />
              <a
                href="mailto:dbdnwm113@naver.com"
                onMouseMove={handleMouseMove("E-mail")}
                onMouseLeave={() => setHoverPos(null)}
                className="absolute top-4 right-10 h-35 w-5.5 cursor-pointer"
              />
              <a
                href="tel:010-6354-9405"
                onMouseMove={handleMouseMove("Call")}
                onMouseLeave={() => setHoverPos(null)}
                className="absolute top-4 right-16 h-26 w-5.5 cursor-pointer"
              />
            </>
          )}
        </div>

        <button
          onClick={handleClick}
          onMouseMove={handleMouseMove("click!")}
          onMouseLeave={() => setHoverPos(null)}
          aria-label="카드 뒤집기"
          className={`flip-btn absolute w-1/4 h-1/4 cursor-pointer bg-transparent border-none ${
            isBack ? "left-0 bottom-0" : "right-0 bottom-0"
          }`}
        />
      </div>

      {hoverPos && (
        <div
          className="fixed z-20 pointer-events-none px-2 py-1 rounded-lg
              bg-black text-white text-[12px] font-sans font-semibold"
          style={{ left: hoverPos.x + 14, top: hoverPos.y + 14 }}
        >
          {hoverPos.label}
        </div>
      )}

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
