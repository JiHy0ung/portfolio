import { useState } from "react";
import Dial from "./components/Dial";
import { projects } from "../../data/projects";
import { formatPeriod } from "../../utils/formatPeriod";
import ProjectModal from "./components/ProjectModal";
import { ArrowUpRight } from "lucide-react";

const menu = ["All", "Group", "Personal"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const handleClose = () => {
    setSelected(null);
  };

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="h-screen w-full flex overflow-hidden gap-20">
      <div className="flex flex-col-reverse 2xl:flex-row 2xl:gap-20">
        <div className="flex-1 2xl:flex-none flex items-center gap-3">
          <Dial size={420} items={menu} active={active} onSelect={setActive} />
          <div className="flex flex-col gap-4">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`text-left transition-colors cursor-pointer w-18
            hover:text-rose-800
            ${active === item ? "text-rose-700 font-bold" : "text-stone-400"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-10 2xl:pt-30 pl-6 2xl:pl-0">
          <h1 className="font-fraunces text-6xl 2xl:text-8xl">Projects</h1>
          <div>
            화면 하나를 만들 때마다 배우는 게 늘어납니다.
            <br />
            그래서 계속 만듭니다.
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col mb-20">
        {filteredProjects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => setSelected(project.id)}
            className="group flex gap-1 border-b border-stone-400/70 cursor-pointer transition-colors duration-300 hover:bg-stone-200/40 focus-visible:bg-stone-200/40"
          >
            <div className="flex-1 flex flex-col justify-between p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] text-stone-600 tabular-nums bg-stone-300 px-2 py-0.5 rounded-full">
                    {formatPeriod(project.start, project.end)}
                  </span>
                </div>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-rose-800 opacity-0 -translate-x-1 translate-y-1 transition duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-end justify-between gap-4">
                  <span className="text-7xl font-bold font-pilowlava text-rose-800">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col items-end gap-0.5">
                    {project.subtitle && (
                      <span className="text-xs text-stone-400">
                        {project.subtitle}
                      </span>
                    )}
                    <h3 className="text-2xl font-semibold transition-colors group-hover:text-rose-800 group-focus-visible:text-rose-800">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-stone-500 text-end break-keep">
                  {project.desc}
                </p>

                {project.stack && project.stack.length > 0 && (
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {project.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="border bg-stone-200 border-stone-300 rounded-full px-2 py-0.5 text-[10px] text-stone-500"
                      >
                        {s}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1 py-0.5 text-[10px] text-stone-400 tabular-nums">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 h-80 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-top transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                style={{ backgroundImage: `url(${project.thumbnail})` }}
              />
            </div>
          </button>
        ))}
      </div>
      {selected !== null && (
        <ProjectModal onClose={handleClose} selected={selected} />
      )}
    </div>
  );
};

export default Projects;
