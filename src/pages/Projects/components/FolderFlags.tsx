import { motion } from "motion/react";
import type { Project } from "../../../data/projects";

type Flag = { label: string; className: string };

const getFlags = (project: Project): Flag[] => {
  const flags: Flag[] = [];

  if (!project.end) {
    flags.push({ label: "진행 중", className: "bg-rose-600/85 text-white" });
  } else if (project.end.includes("종료")) {
    flags.push({ label: "운영 종료", className: "bg-stone-400/85 text-white" });
  }

  flags.push(
    project.category === "Group"
      ? { label: "팀 프로젝트", className: "bg-rose-300/85 text-rose-900" }
      : {
          label: "개인 프로젝트",
          className: "bg-violet-200/85 text-violet-900",
        },
  );

  return flags;
};

const FolderFlags = ({ project }: { project: Project }) => (
  <ul
    aria-label="프로젝트 상태"
    className="pointer-events-none absolute top-14 left-full -ml-10 hidden flex-col items-start gap-2 lg:flex"
  >
    {getFlags(project).map((flag, i) => (
      <motion.li
        key={flag.label}
        initial={{ x: -18, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.15 + i * 0.06,
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
        style={{ marginLeft: i % 2 ? 6 : 0 }}
        className={`flex h-7.5 w-[6rem] items-center justify-end rounded-r-sm pr-2.5 text-xs font-semibold opacity-90 shadow-[2px_2px_4px_rgba(28,25,23,0.12)] ${flag.className}`}
      >
        {flag.label}
      </motion.li>
    ))}
  </ul>
);

export default FolderFlags;
