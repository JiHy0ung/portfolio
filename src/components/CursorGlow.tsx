import { motion, useReducedMotion, type MotionValue } from "motion/react";

type CursorGlowProps = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  visible: boolean;
  /** 가운데 색과 진하기 — Tailwind 그라데이션 시작색 클래스 (예: from-amber-400/10) */
  colorClassName?: string;
};

/**
 * useCursorGlow와 함께 쓰는 은은한 빛.
 * 부모의 맨 앞에 두면 다른 요소들 뒤에 깔린다. 넓은 화면(lg 이상)에서만 보임.
 */
const CursorGlow = ({
  x,
  y,
  visible,
  colorClassName = "from-rose-500/50",
}: CursorGlowProps) => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 left-0 -mt-[18rem] -ml-[18rem] hidden size-[36rem] rounded-full bg-radial to-transparent to-70% lg:block ${colorClassName}`}
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    />
  );
};

export default CursorGlow;
