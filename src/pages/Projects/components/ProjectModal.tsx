import { useEffect, useState, type ReactNode } from "react";
import { projects } from "../../../data/projects";
import { ArrowUpRight, X } from "lucide-react";
import Slider from "./Slider";
import { formatPeriod } from "../../../utils/formatPeriod";

interface ProjectModalProps {
  onClose: () => void;
  selected: number;
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="grid grid-cols-4 px-14 py-10 border-t border-stone-200/50  first-of-type:border-t-0">
    <h3 className="text-2xl font-bold">{title}</h3>
    <div className="col-span-3">{children}</div>
  </section>
);

const NumberedList = ({ items }: { items: string[] }) => (
  <ol>
    {items.map((item, i) => (
      <li
        key={i}
        className="flex gap-4 py-3 border-b border-stone-200 text-sm leading-relaxed first:pt-0 last:border-b-0 last:pb-0"
      >
        <span className="text-stone-400 tabular-nums">
          {String(i + 1).padStart(2, "0")}
        </span>
        <p className="break-keep">{item}</p>
      </li>
    ))}
  </ol>
);

const ProjectModal = ({ onClose, selected }: ProjectModalProps) => {
  const [scrolled, setScrolled] = useState(false);
  const project = projects.find((project) => project.id === selected);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const team = [
    project.team?.front && `프론트 ${project.team.front}`,
    project.team?.back && `백엔드 ${project.team.back}`,
    project.team?.design && `디자인 ${project.team.design}`,
    project.team?.fullstack && `풀스택 ${project.team.fullstack}`,
  ]
    .filter(Boolean)
    .join(" · ");

  const stack = project.stack ?? [];
  const features = project.features ?? [];
  const contributions = project.contributions ?? [];
  const troubleshooting = project.troubleshooting ?? [];
  const learnings = project.learnings ?? [];
  const links = project.links ?? {};

  const half =
    stack.length > 0
      ? Array.from({ length: Math.ceil(16 / stack.length) }, () => stack).flat()
      : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-xs flex justify-center p-12">
      <div
        role="dialog"
        aria-modal="true"
        className="w-5xl h-full overflow-auto scrollbar-hide 
                  flex-col justify-end items-end
                  bg-white rounded-sm"
        onClick={(e) => e.stopPropagation()}
        onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 60)}
      >
        <div
          className="flex w-full justify-between
                      sticky top-0 z-10
                    bg-white border-b border-b-black"
        >
          <h2
            className={`flex justify-center items-center px-4
                        font-semibold text-2xl
                        transition-opacity duration-300
                        ${scrolled ? "opacity-100" : "opacity-0"}`}
          >
            {project.title}
          </h2>
          <button
            aria-label="닫기"
            onClick={onClose}
            className="bg-black cursor-pointer hover:bg-black/80 duration-300 ease-in-out"
          >
            <X strokeWidth={1} size={48} color={"white"} />
          </button>
        </div>

        <h1
          className="flex justify-start items-start px-6 py-4
                          font-semibold text-6xl"
        >
          {project.title}
        </h1>
        <p className="px-6 pb-4 text-stone-500 border-b border-stone-300">
          {project.desc}
        </p>

        {project.screenshots && project.screenshots.length > 0 && (
          <Slider images={project.screenshots} />
        )}

        <div className="grid grid-cols-3 px-14 py-8">
          <div>
            <h6 className="text-stone-500 text-sm pb-1">진행 기간</h6>
            <p className="text-sm font-semibold">
              {formatPeriod(project.start, project.end)}
            </p>
          </div>

          {project.category === "Group" ? (
            <>
              <div>
                <h6 className="text-stone-500 text-sm pb-1">담당 역할</h6>
                <p className="text-sm font-semibold">{project.role}</p>
              </div>
              <div>
                <h6 className="text-stone-500 text-sm pb-1">팀 구성</h6>
                {team && <p className="text-sm font-semibold">{team}</p>}
              </div>
            </>
          ) : (
            <>
              <div>
                <h6 className="text-stone-500 text-sm pb-1">담당 역할</h6>
                <p className="text-sm font-semibold">개인 개발</p>
              </div>
              <div>
                <h6 className="text-stone-500 text-sm pb-1">팀 구성</h6>
                <p className="text-sm font-semibold">1인 개발</p>
              </div>
            </>
          )}
        </div>

        {stack.length > 0 && (
          <div className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-stone-300" />
            <div
              className="relative flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
              style={{ animationDuration: `${half.length * 2.5}s` }}
            >
              {[...half, ...half].map((s, i) => (
                <div
                  key={i}
                  aria-hidden={i >= stack.length}
                  className="mr-4 px-2.5 py-1 bg-black rounded-[11px] text-xs text-stone-100 font-light whitespace-nowrap"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.overview && (
          <Section title="개요">
            <p className="leading-relaxed break-keep">{project.overview}</p>
          </Section>
        )}

        {features.length > 0 && (
          <Section title="주요 기능">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm font-medium break-keep"
                >
                  <span className="mt-[7px] size-1.5 shrink-0 bg-rose-800" />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {contributions.length > 0 && (
          <Section title="구현 내용">
            <NumberedList items={contributions} />
          </Section>
        )}

        {troubleshooting.length > 0 && (
          <Section title="트러블슈팅">
            <div className="flex flex-col gap-8">
              {troubleshooting.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 pb-4">
                    <span className="font-bold text-2xl text-rose-800 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-stone-300" />
                  </div>
                  <dl className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 text-sm leading-relaxed">
                    <dt className="text-stone-500">문제</dt>
                    <dd className="break-keep">{item.problem}</dd>
                    <dt className="text-stone-500">해결</dt>
                    <dd className="break-keep">{item.solution}</dd>
                    {item.result && (
                      <>
                        <dt className="text-stone-500">결과</dt>
                        <dd className="break-keep font-semibold">
                          {item.result}
                        </dd>
                      </>
                    )}
                  </dl>
                </div>
              ))}
            </div>
          </Section>
        )}

        {learnings.length > 0 && (
          <Section title="배운 점">
            <ul className="flex flex-col gap-5">
              {learnings.map((learning, i) => (
                <li
                  key={i}
                  className="border-l-2 border-rose-800 pl-4 text-sm leading-relaxed text-stone-700 break-keep"
                >
                  {learning}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {(links.github || links.demo) && (
          <Section title="링크">
            <div className="flex gap-2">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 bg-black px-4 py-2.5 text-sm text-white hover:bg-black/80 duration-300"
                >
                  GitHub
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 bg-black px-4 py-2.5 text-sm text-white hover:bg-black/80 duration-300"
                >
                  배포 사이트
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
