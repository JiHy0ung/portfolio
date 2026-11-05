import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type HandUnderlineProps = {
  children: ReactNode;
  /** 그려지기 시작하는 시점(초) */
  delay?: number;
  className?: string;
};

/** 글자 아래 손그림 밑줄 — 펜으로 긋듯 왼쪽에서 오른쪽으로 그려짐 */
const HandUnderline = ({
  children,
  delay = 0.8,
  className = "text-rose-700",
}: HandUnderlineProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <span className="relative isolate inline-block">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        className={`pointer-events-none absolute -z-10 -bottom-[0.12em] -left-[0.02em] h-[0.16em] w-[104%] overflow-visible ${className}`}
      >
        <motion.path
          d="M4 13 C 70 5, 150 4, 210 9 S 285 16, 296 7"
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
          strokeOpacity={0.8}
          initial={{ pathLength: reduceMotion ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay, duration: 0.8, ease: "easeInOut" },
            opacity: { delay, duration: 0.01 },
          }}
        />
      </svg>
    </span>
  );
};

export default HandUnderline;
