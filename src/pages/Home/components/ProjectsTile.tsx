import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/projects";
import Tile from "./Tile";
import { useImagesLoaded } from "../../../hooks/useImagesLoaded";

const showcase = projects.slice(0, 3);
/** 썸네일 세 장을 처음에 모두 받아 둠 — 목록에 마우스를 올려 바꿀 때 기다리지 않도록 */
const SHOWCASE_THUMBS = showcase.map((p) => p.thumbnail);

/** Projects 칸: 목록에서 마우스를 올린 프로젝트의 썸네일을 오른쪽에 크게 보여 줌 */
const ProjectsTile = () => {
  const [activeId, setActiveId] = useState(showcase[0]?.id);
  const active = showcase.find((p) => p.id === activeId) ?? showcase[0];
  const thumbsLoaded = useImagesLoaded(SHOWCASE_THUMBS);

  return (
    <Tile
      to="/projects"
      className="col-span-2 rounded-tr-[56px] bg-stone-900 text-stone-100 lg:rounded-tr-[120px]"
    >
      <span>
        {/* 오른쪽 위 모서리가 크게 깎여 있어서 화살표는 제목 바로 옆에 붙임 */}
        <span className="font-fraunces flex items-start gap-3 text-[1.75rem] sm:text-4xl">
          Projects
          <ArrowUpRight
            size={26}
            strokeWidth={1.5}
            aria-hidden="true"
            className="mt-1 size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-6"
          />
        </span>
        <span className="mt-1 block text-[13px] opacity-75">
          필요해서 만든 것들 · {projects.length}
        </span>
      </span>

      {/* 왼쪽 아래: 프로젝트 목록 — 마우스를 올린 항목이 강조되고 오른쪽 썸네일이 바뀜 */}
      <ol className="relative w-full text-[15px] sm:max-w-[13rem]">
        {showcase.map((p, i) => {
          const isActive = p.id === active?.id;
          return (
            <li
              key={p.id}
              onMouseEnter={() => setActiveId(p.id)}
              className={`flex items-baseline gap-3 border-t border-white/10 py-2 transition-colors duration-200 ${
                isActive ? "text-stone-50" : "text-stone-400/80"
              }`}
            >
              <span
                className={`font-fraunces text-sm italic tabular-nums transition-colors ${
                  isActive ? "text-rose-500" : "text-stone-400/60"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={isActive ? "font-semibold" : ""}>{p.title}</span>
              {isActive && (
                <motion.span
                  layoutId="home-project-arrow"
                  aria-hidden="true"
                  className="ml-auto text-rose-500"
                >
                  →
                </motion.span>
              )}
            </li>
          );
        })}
      </ol>

      {/* 오른쪽: 고른 프로젝트 썸네일 — 바뀔 때 부드럽게 겹쳐 바뀜 (좁은 화면에서는 숨김) */}
      {active && (
        <span
          aria-hidden="true"
          className="absolute top-24 right-6 bottom-6 left-[16.5rem] hidden overflow-hidden rounded-[10px] shadow-[0_16px_34px_rgba(0,0,0,0.45)] sm:block lg:top-28"
        >
          <AnimatePresence initial={false}>
            <motion.span
              key={active.id}
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url(${active.thumbnail})` }}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </AnimatePresence>

          {/* 썸네일이 뜨기 전까지 덮는 스켈레톤 — 어두운 칸에 맞춰 짙은 색 */}
          <span
            className={`pointer-events-none absolute inset-0 bg-stone-700 transition-opacity duration-500 ${
              thumbsLoaded ? "opacity-0" : "animate-pulse opacity-100"
            }`}
          />
        </span>
      )}
    </Tile>
  );
};

export default ProjectsTile;
