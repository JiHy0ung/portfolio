import type { CSSProperties } from "react";

/** 배경에서 반짝이는 별 */
export type HomeStar = {
  /** 위치 클래스 (left/right/top/bottom) */
  position: string;
  /** 글자 크기(cqw) */
  size: number;
  delay: number;
};

export const homeStars: HomeStar[] = [
  { position: "left-[6%] top-[14%]", size: 2, delay: 0 },
  { position: "left-[34%] top-[8%]", size: 1.2, delay: 1.1 },
  { position: "right-[10%] top-[10%]", size: 1.6, delay: 0.6 },
  { position: "right-[35%] top-[30%]", size: 1, delay: 2 },
  { position: "left-[18%] top-[42%]", size: 1.4, delay: 1.6 },
  { position: "right-[6%] top-[45%]", size: 2.2, delay: 0.3 },
  { position: "left-[42%] bottom-[10%]", size: 1, delay: 1.3 },
  { position: "left-[9%] bottom-[30%]", size: 1.6, delay: 0.9 },
  { position: "right-[16%] bottom-[8%]", size: 1.3, delay: 2.4 },
  { position: "right-[40%] bottom-[36%]", size: 0.9, delay: 1.8 },
];

/** 떠다니는 아이콘과 호버 시 뜨는 질문 */
export type HomeIcon = {
  src: string;
  alt: string;
  /** 위치·크기 클래스 */
  className: string;
  /** 아이콘 애니메이션 클래스 */
  animation: "float-a" | "float-b" | "float-c" | "spin-swirl";
  delay?: string;
  question: string;
  tooltipAnimation: "float-a" | "float-b" | "float-c";
  tooltipStyle: CSSProperties;
};

const ABOVE: CSSProperties = { transform: "translateY(calc(-100% - 10px))" };

export const homeIcons: HomeIcon[] = [
  {
    src: "/icons/dotted-line-face.png",
    alt: "점선 얼굴",
    className: "left-[12%] top-[20%] w-[8cqw] h-[8cqw]",
    animation: "float-a",
    question: "화면에 뭘 남기고, 뭘 지울까?",
    tooltipAnimation: "float-b",
    tooltipStyle: { left: "20%", top: "16%", ...ABOVE },
  },
  {
    src: "/icons/compass.png",
    alt: "나침반",
    className: "right-[23%] top-[24%] w-[7cqw] h-[7cqw]",
    animation: "float-b",
    question: "다음은 어디로 향할까?",
    tooltipAnimation: "float-b",
    tooltipStyle: { right: "14%", top: "20%", ...ABOVE },
  },
  {
    src: "/icons/cyclone.png",
    alt: "소용돌이",
    className: "left-[25%] bottom-[22%] w-[7cqw] h-[7cqw]",
    animation: "spin-swirl",
    question: "기다리는 시간도 디자인할 수 있을까?",
    tooltipAnimation: "float-b",
    tooltipStyle: { left: "32%", bottom: "calc(22% + 6cqw + 10px)" },
  },
  {
    src: "/icons/eyes.png",
    alt: "눈",
    className: "right-[25%] bottom-[15%] w-[5cqw] h-[5cqw]",
    animation: "float-a",
    delay: "1.4s",
    question: "말없이도 전해질 수 있을까?",
    tooltipAnimation: "float-a",
    tooltipStyle: { right: "30%", bottom: "calc(15% + 4cqw + 7px)" },
  },
  {
    src: "/icons/thinking-face.png",
    alt: "생각하는 얼굴",
    className: "left-[8%] top-[55%] w-[5cqw] h-[5cqw]",
    animation: "float-b",
    delay: "0.8s",
    question: "정말 필요한 요소일까?",
    tooltipAnimation: "float-b",
    tooltipStyle: { left: "12%", top: "50%", ...ABOVE },
  },
  {
    src: "/icons/mirror-ball.png",
    alt: "미러볼",
    className: "right-[9%] top-[55%] w-[10cqw] h-[10cqw]",
    animation: "float-c",
    delay: "0.5s",
    question: "화려한 게 좋은 걸까?",
    tooltipAnimation: "float-c",
    tooltipStyle: { right: "5%", top: "70%", ...ABOVE },
  },
];
