import type { CursorTooltipState } from "../hooks/useCursorTooltip";

/**
 * 주의: transform(scale, rotate 등)이 걸린 요소 안에 두면
 * fixed 기준이 화면이 아니라 그 요소가 되어 위치가 어긋난다.
 * 페이지 최상단 가까이에 렌더링할 것.
 */
const CursorTooltip = ({ tooltip }: { tooltip: CursorTooltipState }) => {
  if (!tooltip) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 rounded-lg bg-black px-2 py-1 font-sans text-[12px] font-semibold text-white"
      style={{ left: tooltip.x + 14, top: tooltip.y + 14 }}
    >
      {tooltip.label}
    </div>
  );
};

export default CursorTooltip;
