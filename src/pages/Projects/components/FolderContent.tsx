import { motion } from "motion/react";
import type { Project } from "../../../data/projects";
import { formatPeriod } from "../../../utils/formatPeriod";

const MAX_STACK = 5;

const TEAM_LABEL = {
  front: "프론트엔드",
  back: "백엔드",
  fullstack: "풀스택",
  design: "디자인",
} as const;

/** { front: 2, back: 2 } → "4인 · 프론트엔드 2 · 백엔드 2" */
const formatTeam = (team: Project["team"]) => {
  if (!team) return "개인 프로젝트";
  const parts = (Object.keys(TEAM_LABEL) as (keyof typeof TEAM_LABEL)[])
    .filter((key) => team[key])
    .map((key) => ({ label: TEAM_LABEL[key], count: team[key] ?? 0 }));
  const total = parts.reduce((sum, p) => sum + p.count, 0);
  return [`${total}인`, ...parts.map((p) => `${p.label} ${p.count}`)].join(
    " · ",
  );
};

type FolderContentProps = {
  project: Project;
  onOpen: (id: number) => void;
};

/** 맨 앞 폴더 안쪽 — 클립으로 꽂은 스크린샷 + 포스트잇 + 프로젝트 정보 */
const FolderContent = ({ project, onOpen }: FolderContentProps) => {
  const stack = project.stack ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.12 }}
      className="relative grid h-full min-h-[22rem] gap-10 p-6 md:grid-cols-[1.45fr_1fr] md:gap-12 lg:px-11 lg:py-10"
    >
      {/* 왼쪽: 클립으로 꽂은 스크린샷 — 폴더 높이에 맞춰 늘어남 */}
      <div className="relative min-h-56 md:min-h-0">
        <div
          className="absolute inset-0 -rotate-[1.5deg] rounded-sm bg-cover bg-top shadow-[0_14px_28px_rgba(28,25,23,0.16)]"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
          role="img"
          aria-label={`${project.title} 화면`}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 24 64"
          className="absolute -top-7 left-12 h-[4.5rem] w-7 -rotate-[8deg] text-stone-400 drop-shadow-[1px_2px_1.5px_rgba(28,25,23,0.25)]"
        >
          <path
            d="M9 22 V50 a5 5 0 0 0 10 0 V12 a7 7 0 0 0 -14 0 V48"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
          />
        </svg>
        {project.note && (
          <p className="font-geuriun font-semibold absolute -right-4 -bottom-6 hidden w-max max-w-64 rotate-[4deg] whitespace-pre-line bg-amber-200 px-4 pt-4 pb-5 text-base text-stone-700 shadow-[0_8px_14px_rgba(0,0,0,0.12)] sm:block lg:-right-8">
            {project.note}
          </p>
        )}
      </div>

      {/* 오른쪽: 정보 */}
      <div className="flex flex-col">
        <span className="text-xs text-stone-500 tabular-nums">
          {formatPeriod(project.start, project.end)}
          {project.subtitle && ` · ${project.subtitle}`}
        </span>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight lg:text-5xl">
          {project.title}
        </h2>
        <p className="mt-4 break-keep text-sm leading-relaxed text-stone-600">
          {project.desc}
        </p>

        <dl className="mt-6 grid grid-cols-[4rem_1fr] gap-y-2 border-t border-dashed border-stone-300 pt-4 text-[13px]">
          <dt className="text-stone-400">팀</dt>
          <dd className="text-stone-700">{formatTeam(project.team)}</dd>
          {project.role && (
            <>
              <dt className="text-stone-400">맡은 일</dt>
              <dd className="text-stone-700">{project.role}</dd>
            </>
          )}
        </dl>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4 md:mt-auto">
          <span className="flex flex-wrap gap-1.5">
            {stack.slice(0, MAX_STACK).map((s) => (
              <span
                key={s}
                className="rounded-full border border-stone-300 bg-white/40 px-2.5 py-0.5 text-[11px] text-stone-600"
              >
                {s}
              </span>
            ))}
            {stack.length > MAX_STACK && (
              <span className="px-1 py-0.5 text-[11px] text-stone-400 tabular-nums">
                +{stack.length - MAX_STACK}
              </span>
            )}
          </span>
          <button
            type="button"
            onClick={() => onOpen(project.id)}
            className="group flex items-center gap-2 text-sm font-semibold outline-none
                      focus-visible:underline cursor-pointer"
          >
            자세히 보기
            <span className="font-fraunces text-lg text-rose-700 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FolderContent;
