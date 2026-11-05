import type { Project } from "../../../data/projects";
import { formatPeriod } from "../../../utils/formatPeriod";

const MAX_STACK = 4;

type ProjectListItemProps = {
  project: Project;
  index: number;
  onSelect: (id: number) => void;
};

const ProjectListItem = ({
  project,
  index,
  onSelect,
}: ProjectListItemProps) => {
  const stack = project.stack ?? [];

  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      className="min-h-80 group grid cursor-pointer grid-cols-[6rem_1fr] items-center gap-x-5 border-b border-stone-300/90 text-left outline-none first:border-t focus-visible:bg-stone-200/40 md:grid-cols-[3rem_1fr_1.3fr]"
    >
      <span className="font-pilowlava self-start py-6 text-6xl font-bold leading-none text-rose-800">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="flex min-w-0 flex-col items-end self-end py-6">
        <span className="mb-2.5 text-[10px] text-stone-600 tabular-nums bg-stone-300 px-2 py-0.5 rounded-full">
          {formatPeriod(project.start, project.end)}
        </span>
        {project.subtitle && (
          <span className="text-xs text-stone-400">{project.subtitle}</span>
        )}
        <span className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-rose-800 group-focus-visible:text-rose-800">
          {project.title}
        </span>
        <span className="mt-1.5 break-keep text-sm text-stone-500 gap-1.5">
          {project.desc}
        </span>

        {stack.length > 0 && (
          <span className="mt-3 flex flex-wrap gap-1.5">
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

      <span
        aria-hidden="true"
        className="hidden self-stretch overflow-hidden md:block"
      >
        <span
          className="block h-full w-full bg-cover bg-top transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        />
      </span>
    </button>
  );
};

export default ProjectListItem;
