import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../../data/projects";
import { formatPeriod } from "../../../utils/formatPeriod";

const MAX_STACK = 4;

type ProjectListItemProps = {
  project: Project;
  index: number;
  onSelect: (id: number) => void;
};

/** Projects 목록의 한 줄 (번호·제목·설명·스택·썸네일) */
const ProjectListItem = ({ project, index, onSelect }: ProjectListItemProps) => {
  const stack = project.stack ?? [];

  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      className="group flex gap-1 border-b border-stone-400/70 cursor-pointer text-left transition-colors duration-300 hover:bg-stone-200/40 focus-visible:bg-stone-200/40"
    >
      <span className="flex-1 flex flex-col justify-between p-5">
        <span className="flex items-center justify-between">
          <span className="text-[10px] text-stone-600 tabular-nums bg-stone-300 px-2 py-0.5 rounded-full">
            {formatPeriod(project.start, project.end)}
          </span>
          <ArrowUpRight
            size={20}
            strokeWidth={1.5}
            aria-hidden="true"
            className="text-rose-800 opacity-0 -translate-x-1 translate-y-1 transition duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0"
          />
        </span>

        <span className="flex flex-col gap-3">
          <span className="flex items-end justify-between gap-4">
            <span className="text-7xl font-bold font-pilowlava text-rose-800">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex flex-col items-end gap-0.5">
              {project.subtitle && (
                <span className="text-xs text-stone-400">{project.subtitle}</span>
              )}
              <span className="text-2xl font-semibold transition-colors group-hover:text-rose-800 group-focus-visible:text-rose-800">
                {project.title}
              </span>
            </span>
          </span>

          <span className="text-sm leading-relaxed text-stone-500 text-end break-keep">
            {project.desc}
          </span>

          {stack.length > 0 && (
            <span className="flex flex-wrap justify-end gap-1.5">
              {stack.slice(0, MAX_STACK).map((s) => (
                <span
                  key={s}
                  className="border bg-stone-200 border-stone-300 rounded-full px-2 py-0.5 text-[10px] text-stone-500"
                >
                  {s}
                </span>
              ))}
              {stack.length > MAX_STACK && (
                <span className="px-1 py-0.5 text-[10px] text-stone-400 tabular-nums">
                  +{stack.length - MAX_STACK}
                </span>
              )}
            </span>
          )}
        </span>
      </span>

      <span className="flex-1 h-80 overflow-hidden">
        <span
          className="block h-full w-full bg-cover bg-top transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        />
      </span>
    </button>
  );
};

export default ProjectListItem;
