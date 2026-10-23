import { useState } from "react";

export type CursorTooltipState = { x: number; y: number; label: string } | null;

/**
 * 마우스를 따라다니는 툴팁 상태.
 * bind(label)을 요소에 펼쳐 넣으면 그 요소 위에서만 툴팁이 따라다닌다.
 */
export const useCursorTooltip = () => {
  const [tooltip, setTooltip] = useState<CursorTooltipState>(null);

  const bind = (label: string) => ({
    onPointerMove: (e: React.PointerEvent) => {
      // 터치에서는 손가락 아래에 가려지므로 마우스일 때만 표시
      if (e.pointerType !== "mouse") return;
      setTooltip({ x: e.clientX, y: e.clientY, label });
    },
    onPointerLeave: () => setTooltip(null),
  });

  const hide = () => setTooltip(null);

  return { tooltip, bind, hide };
};
