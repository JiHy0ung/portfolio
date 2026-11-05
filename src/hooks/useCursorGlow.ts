import { useState, type PointerEvent } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "motion/react";

const SPRING = { stiffness: 200, damping: 12, mass: 0.6 };

/**
 * 커서를 살짝 늦게 따라오는 빛의 위치 상태.
 * bind를 감쌀 요소에 펼쳐 넣고, 반환된 x · y · visible을 <CursorGlow />에 넘긴다.
 * 좌표는 bind를 붙인 요소 기준이라, 그 요소는 relative여야 한다.
 */
export const useCursorGlow = () => {
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, SPRING);
  const y = useSpring(pointerY, SPRING);
  const [visible, setVisible] = useState(false);

  const bind = {
    onPointerMove: (e: PointerEvent<HTMLElement>) => {
      // 움직임 줄이기 설정이거나 터치 입력이면 켜지 않음
      if (reduceMotion || e.pointerType !== "mouse") return;
      const rect = e.currentTarget.getBoundingClientRect();
      const nextX = e.clientX - rect.left;
      const nextY = e.clientY - rect.top;
      pointerX.set(nextX);
      pointerY.set(nextY);
      // 처음 들어올 때는 (0, 0)에서 날아오지 않도록 바로 그 자리에 둠
      if (!visible) {
        x.jump(nextX);
        y.jump(nextY);
        setVisible(true);
      }
    },
    onPointerLeave: () => setVisible(false),
  };

  return { x, y, visible, bind };
};
