import type { CSSProperties } from "react";
import { motion } from "motion/react";
import type { Project } from "../../../data/projects";
import FolderContent from "./FolderContent";
import FolderFlags from "./FolderFlags";

/** 뒤 폴더가 앞 폴더 위로 삐져나오는 높이(px) */
const STEP = 36;
/** 이름표 탭 높이(px) — 가장 뒤 폴더의 탭이 잘리지 않게 이만큼 위를 비워 둠 */
const TAB_HEIGHT = 36;
/** 뒤 폴더 색 — 가장 뒤부터 앞쪽 순서, 앞으로 올수록 밝아짐 */
const BACK_COLORS = ["#cfcac4", "#d9d5d0", "#e4e1dc"];
const FRONT_COLOR = "#fbfaf7";
/** 프로젝트 id별 이름표 탭 위치 */
const TAB_POSITIONS: Record<number, CSSProperties> = {
  1: { left: "1%" }, // 속솜
  2: { left: "18%" }, // Tidy Mind
  3: { left: "37%" }, // 포트폴리오
  4: { right: "3%" }, // 시먀
};

type ProjectFoldersProps = {
  projects: Project[];
  activeId: number;
  onChange: (id: number) => void;
  onOpen: (id: number) => void;
  className?: string;
};

/** 이름표 탭이 달린 서류 폴더 더미 — 탭을 누르면 그 폴더가 맨 앞으로 나옴 */
const ProjectFolders = ({
  projects,
  activeId,
  onChange,
  onOpen,
  className = "",
}: ProjectFoldersProps) => {
  const count = projects.length;

  // 뒤 폴더는 원래 순서 그대로, 고른 폴더만 맨 앞(마지막)으로
  const order = [
    ...projects.filter((p) => p.id !== activeId),
    ...projects.filter((p) => p.id === activeId),
  ];
  const backColors = BACK_COLORS.slice(-(count - 1));

  return (
    <div className={`relative ${className}`}>
      {projects.map((project, i) => {
        const depth = order.indexOf(project); // 0 = 가장 뒤
        const isFront = project.id === activeId;
        const color = isFront
          ? FRONT_COLOR
          : (backColors[depth] ?? BACK_COLORS[0]);

        return (
          <motion.div
            key={project.id}
            initial={false}
            animate={{ top: TAB_HEIGHT + depth * STEP, backgroundColor: color }}
            transition={{
              top: { type: "spring", stiffness: 320, damping: 32 },
              backgroundColor: { duration: 0.05, ease: "easeOut" },
            }}
            style={{ zIndex: depth }}
            className="absolute inset-x-0 bottom-0 rounded-[4px_14px_14px_14px] shadow-[0_-2px_8px_rgba(28,25,23,0.06)]"
          >
            {/* 이름표 탭 — 프로젝트마다 가로 위치가 정해져 있어서 순서가 바뀌어도 자리는 그대로, 마우스로만 전환 */}
            <button
              type="button"
              tabIndex={-1}
              onClick={() => onChange(project.id)}
              style={
                TAB_POSITIONS[project.id] ?? { left: `${(i * 100) / count}%` }
              }
              className={`absolute bottom-full flex h-9 max-w-[11.5rem] cursor-pointer items-center gap-2.5 truncate rounded-t-xl bg-inherit px-5 text-sm font-semibold outline-none transition-colors ${
                isFront
                  ? "text-stone-900"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <span
                className={`font-fraunces text-[13px] font-normal italic ${
                  isFront ? "text-rose-700" : "opacity-60"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {project.title}
            </button>

            {/* 견출지와 내용은 맨 앞 폴더에만 */}
            {isFront && <FolderFlags project={project} />}
            {isFront && (
              <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                <FolderContent project={project} onOpen={onOpen} />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectFolders;
