import { useEffect, useRef } from "react";

/** enabled일 때 Esc를 누르면 onEscape 실행 (모달·패널 닫기용) */
export const useEscapeKey = (enabled: boolean, onEscape: () => void) => {
  // 매 렌더마다 새로 만들어지는 함수 때문에 리스너가 다시 붙지 않도록 ref에 보관
  const handlerRef = useRef(onEscape);
  useEffect(() => {
    handlerRef.current = onEscape;
  });

  useEffect(() => {
    if (!enabled) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handlerRef.current();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled]);
};
