const Tooltip = ({
  className,
  style,
  children,
}: {
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => (
  <div
    className={`tooltip absolute z-20 whitespace-nowrap
                px-3 py-1.5 rounded-xl ${className}
              bg-rose-600/70 text-white text-sm font-sans font-semibold`}
    style={style}
  >
    {children}
  </div>
);

const Home = () => {
  return (
    <div
      className="hero relative h-screen w-full @container -mt-20
                flex justify-center items-center overflow-hidden select-none "
    >
      <span
        className="absolute z-0 left-[6%] top-[14%] text-[2cqw] twinkle"
        style={{ animationDelay: "0s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 left-[34%] top-[8%] text-[1.2cqw] twinkle"
        style={{ animationDelay: "1.1s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 right-[10%] top-[10%] text-[1.6cqw] twinkle"
        style={{ animationDelay: "0.6s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 right-[35%] top-[30%] text-[1cqw] twinkle"
        style={{ animationDelay: "2s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 left-[18%] top-[42%] text-[1.4cqw] twinkle"
        style={{ animationDelay: "1.6s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 right-[6%] top-[45%] text-[2.2cqw] twinkle"
        style={{ animationDelay: "0.3s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 left-[42%] bottom-[10%] text-[1cqw] twinkle"
        style={{ animationDelay: "1.3s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 left-[9%] bottom-[30%] text-[1.6cqw] twinkle"
        style={{ animationDelay: "0.9s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 right-[16%] bottom-[8%] text-[1.3cqw] twinkle"
        style={{ animationDelay: "2.4s" }}
      >
        ✦
      </span>
      <span
        className="absolute z-0 right-[40%] bottom-[36%] text-[0.9cqw] twinkle"
        style={{ animationDelay: "1.8s" }}
      >
        ✦
      </span>

      <div className="relative">
        <p
          className="absolute top-4 left-0
                      font-nostalgic text-[2.5cqw] tracking-tight"
        >
          Welcome to my
        </p>
        <h1
          className="relative z-10 pl-8 text-[12cqw]
                      font-sans font-light tracking-[-16px]"
        >
          PORTFOLIO
        </h1>
      </div>

      <img
        src="/icons/dotted-line-face.png"
        alt="점선 얼굴"
        className="icon-1 absolute z-10 left-[12%] top-[20%] w-[8cqw] h-[8cqw] float-a icon-outline cursor-pointer"
        draggable={false}
      />
      <Tooltip
        className="tooltip-1 float-b"
        style={{
          left: "20%",
          top: "16%",
          transform: "translateY(calc(-100% - 10px))",
        }}
      >
        화면에 뭘 남기고, 뭘 지울까?
      </Tooltip>

      <img
        src="/icons/compass.png"
        alt="나침반"
        className="icon-2 absolute z-10 right-[23%] top-[24%] w-[7cqw] h-[7cqw] float-b icon-outline cursor-pointer"
        draggable={false}
      />
      <Tooltip
        className="tooltip-2 float-b"
        style={{
          right: "12%",
          top: "20%",
          transform: "translateY(calc(-100% - 10px))",
        }}
      >
        이 클릭 다음엔 뭐가 있을까?
      </Tooltip>

      <img
        src="/icons/cyclone.png"
        alt="소용돌이"
        className="icon-3 absolute z-10 left-[25%] bottom-[22%] w-[7cqw] h-[7cqw] spin-swirl icon-outline cursor-pointer"
        draggable={false}
      />
      <Tooltip
        className="tooltip-3 float-b"
        style={{ left: "32%", bottom: "calc(22% + 6cqw + 10px)" }}
      >
        기다리는 시간도 디자인할 수 있을까?
      </Tooltip>

      <img
        src="/icons/eyes.png"
        alt="눈"
        className="icon-4 absolute z-10 right-[25%] bottom-[15%] w-[5cqw] h-[5cqw] float-a icon-outline cursor-pointer"
        draggable={false}
        style={{ animationDelay: "1.4s" }}
      />
      <Tooltip
        className="tooltip-4 float-a"
        style={{ right: "30%", bottom: "calc(15% + 4cqw + 7px)" }}
      >
        말없이도 전해질 수 있을까?
      </Tooltip>

      <img
        src="/icons/thinking-face.png"
        alt="생각하는 얼굴"
        className="icon-5 absolute z-10 left-[8%] top-[55%] w-[5cqw] h-[5cqw] float-b icon-outline cursor-pointer"
        draggable={false}
        style={{ animationDelay: "0.8s" }}
      />
      <Tooltip
        className="tooltip-5 float-b"
        style={{
          left: "12%",
          top: "50%",
          transform: "translateY(calc(-100% - 10px))",
        }}
      >
        정말 필요한 버튼일까?
      </Tooltip>

      <img
        src="/icons/mirror-ball.png"
        alt="미러볼"
        className="icon-6 absolute z-10 right-[9%] top-[55%] w-[10cqw] h-[10cqw] float-c icon-outline cursor-pointer"
        draggable={false}
        style={{ animationDelay: "0.5s" }}
      />
      <Tooltip
        className="tooltip-6 float-c"
        style={{
          right: "5%",
          top: "70%",
          transform: "translateY(calc(-100% - 10px))",
        }}
      >
        화려한 게 좋은 걸까?
      </Tooltip>

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
