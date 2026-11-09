import { TextAlignJustify, X } from "lucide-react";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useReducedMotion,
} from "motion/react";
import Menu from "./Menu";
import { useNavigate } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // 로고 호버: 한 바퀴 휘리릭 — 도는 중에는 다시 시작하지 않음
  const [logoRef, animateLogo] = useAnimate<HTMLImageElement>();
  const spinning = useRef(false);
  const reduceMotion = useReducedMotion();

  const spinLogo = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || reduceMotion || spinning.current) return;
    spinning.current = true;
    animateLogo(
      logoRef.current,
      { rotate: [0, 360] },
      { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
    ).then(() => {
      spinning.current = false;
    });
  };

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 backdrop-blur-3xl bg-stone-50/80"
          />
        )}
      </AnimatePresence>

      {/* 로고 — 모바일은 왼쪽 위, 넓은 화면은 오른쪽 아래에 사인처럼 */}
      <button
        type="button"
        aria-label="홈으로"
        aria-hidden={menuOpen}
        tabIndex={menuOpen ? -1 : 0}
        onClick={() => navigate("/")}
        onPointerEnter={spinLogo}
        className={`fixed top-2.5 left-6 z-49 cursor-pointer transition-opacity duration-200 lg:top-auto lg:right-7 lg:bottom-4 lg:left-auto lg:-rotate-[4deg] ${
          menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <img
          ref={logoRef}
          className="h-15"
          src="/logo_light.webp"
          width={60}
          height={60}
          alt=""
        />
      </button>

      {/* 메뉴 버튼 — 화면 오른쪽 위에 떠 있음, 자리를 차지하지 않음 */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-end px-6 py-2">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="pointer-events-auto cursor-pointer"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.25 }}
              >
                <X strokeWidth={1} size={48} />
              </motion.div>
            ) : (
              <motion.p
                key="menu"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.25 }}
                className="font-sans font-extralight mr-2"
              >
                <TextAlignJustify strokeWidth={1.3} size={36} />
              </motion.p>
            )}
          </AnimatePresence>
        </button>
      </div>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
