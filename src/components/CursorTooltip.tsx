import { AnimatePresence, motion } from "motion/react";
import type { CursorTooltipState } from "../hooks/useCursorTooltip";

/** 커서에서 툴팁까지의 거리 */
const OFFSET = 14;

/**
 * 커서를 따라다니는 말풍선 툴팁.
 * 커서를 향한 왼쪽 위 모서리만 뾰족하게 두어 "여기서 나온 말"처럼 보이게 함
 *
 * 주의: transform(scale, rotate 등)이 걸린 요소 안에 두면
 * fixed 기준이 화면이 아니라 그 요소가 되어 위치가 어긋난다.
 * 페이지 최상단 가까이에 렌더링할 것.
 */
const CursorTooltip = ({ tooltip }: { tooltip: CursorTooltipState }) => (
  // 사라질 때는 마지막 위치에 그대로 남은 채로 작아지며 사라짐
  <AnimatePresence>
    {tooltip && (
      <motion.div
        key="cursor-tooltip"
        role="tooltip"
        // pt/pb를 1px 다르게: 소문자 몸통이 말풍선 가운데에 오도록 살짝 위로
        className="pointer-events-none fixed z-30 flex origin-top-left items-baseline gap-1.5 whitespace-nowrap rounded-2xl rounded-tl-[4px] bg-stone-900 pt-[5px] pb-[7px] pl-3 pr-3.5 text-stone-50 shadow-[0_8px_20px_rgba(28,25,23,0.18)]"
        // 위치는 style로만 — 애니메이션은 크기·투명도에만 걸어서 따라올 때 버벅이지 않게
        style={{ left: tooltip.x + OFFSET, top: tooltip.y + OFFSET }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {/* 별은 글자가 아니라 기호라서 바닥선 대신 가운데 정렬 + 2px 내려서 글자 몸통에 맞춤
            (transform은 motion이 쓰고 있어서 위치 보정은 top으로) */}
        <motion.span
          aria-hidden="true"
          className="relative top-[2px] shrink-0 self-center text-[11px] leading-none text-rose-500"
          initial={{ rotate: -90, scale: 0.4 }}
          animate={{ rotate: 0, scale: 1.3 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
            delay: 0.05,
          }}
        >
          ✦
        </motion.span>
        <span className="font-fraunces text-[15px] italic leading-none">
          {tooltip.label}
        </span>
      </motion.div>
    )}
  </AnimatePresence>
);

export default CursorTooltip;
