import { Fragment } from "react";
import { homeIcons, homeStars } from "../../data/home";
import QuestionTooltip from "./components/QuestionTooltip";

const Home = () => {
  return (
    <div
      className="hero relative h-screen w-full @container -mt-20
                flex justify-center items-center overflow-hidden select-none"
    >
      {homeStars.map((star, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`absolute z-0 twinkle ${star.position}`}
          style={{ fontSize: `${star.size}cqw`, animationDelay: `${star.delay}s` }}
        >
          ✦
        </span>
      ))}

      <div className="relative">
        <p className="absolute top-4 left-0 font-nostalgic text-[2.5cqw] tracking-tight">
          Welcome to my
        </p>
        <h1 className="relative z-10 pl-8 text-[12cqw] font-sans font-light tracking-[-16px]">
          PORTFOLIO
        </h1>
      </div>

      {/* 아이콘과 말풍선은 형제 선택자(~)로 연결되므로 같은 부모 아래 순서대로 렌더링 */}
      {homeIcons.map((icon, i) => (
        <Fragment key={icon.src}>
          <img
            src={icon.src}
            alt={icon.alt}
            className={`icon-${i + 1} absolute z-10 ${icon.className} ${icon.animation} icon-outline cursor-pointer`}
            style={icon.delay ? { animationDelay: icon.delay } : undefined}
            draggable={false}
          />
          <QuestionTooltip
            className={`tooltip-${i + 1} ${icon.tooltipAnimation}`}
            style={icon.tooltipStyle}
          >
            {icon.question}
          </QuestionTooltip>
        </Fragment>
      ))}

      <style>
        {`
        @keyframes floatA { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
        @keyframes floatB { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(14px); } }
        @keyframes floatC { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(6deg); } }
        @keyframes spinSwirl { to { transform: rotate(360deg); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.15; transform: scale(0.85); } 50% { opacity: 0.8; transform: scale(1.1); } }
        .float-a { animation: floatA 4.2s ease-in-out infinite; }
        .float-b { animation: floatB 3.6s ease-in-out infinite; }
        .float-c { animation: floatC 5s ease-in-out infinite; }
        .spin-swirl { animation: spinSwirl 1.2s linear infinite; }
        .twinkle { color: #e2c7cc; animation: twinkle 2.8s ease-in-out infinite; }
        .icon-outline { transition: filter 0.3s ease; }
        .icon-outline:hover {
          filter:
            drop-shadow(4px 0 0 white)
            drop-shadow(-4px 0 0 white)
            drop-shadow(0 4px 0 white)
            drop-shadow(0 -4px 0 white)
            drop-shadow(2px 2px 0px rgba(0,0,0,0.3));
        }
        .hero:has(.icon-outline:hover) .icon-outline:not(:hover) {
          filter: grayscale(0.85) opacity(0.55);
        }
        .tooltip { opacity: 0; pointer-events: none; transition: opacity 0.25s ease; }
        .icon-1:hover ~ .tooltip-1,
        .icon-2:hover ~ .tooltip-2,
        .icon-3:hover ~ .tooltip-3,
        .icon-4:hover ~ .tooltip-4,
        .icon-5:hover ~ .tooltip-5,
        .icon-6:hover ~ .tooltip-6 {
          opacity: 1;
        }
        `}
      </style>
    </div>
  );
};

export default Home;
