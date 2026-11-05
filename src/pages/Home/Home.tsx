import { motion } from "motion/react";
import CursorGlow from "../../components/CursorGlow";
import { useCursorGlow } from "../../hooks/useCursorGlow";
import HomeHero from "./components/HomeHero";
import ProjectsTile from "./components/ProjectsTile";
import AboutTile from "./components/AboutTile";
import ContactTile from "./components/ContactTile";

const Home = () => {
  const glow = useCursorGlow();

  return (
    <div
      {...glow.bind}
      className="relative grid min-h-screen w-full grid-cols-1 gap-12 overflow-hidden px-6 pt-32 pb-12 select-none lg:h-screen lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-22 lg:pt-30 lg:pb-20"
    >
      {/* 장식: 커서를 따라오는 은은한 빛 — 맨 뒤에 깔림 (안내판 칸은 배경이 꽉 차서 위로 비치지 않음) */}
      <CursorGlow x={glow.x} y={glow.y} visible={glow.visible} />

      {/* 왼쪽: 이름과 소개 */}
      <HomeHero />

      {/* 오른쪽: 안내판 — 위 큰 칸 Projects, 아래 About · Contact */}
      <motion.nav
        aria-label="페이지 바로가기"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative grid min-h-[34rem] grid-cols-2 grid-rows-[1.25fr_1fr] gap-4"
      >
        <ProjectsTile />
        <AboutTile />
        <ContactTile />
      </motion.nav>
    </div>
  );
};

export default Home;
