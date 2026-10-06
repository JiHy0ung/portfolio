import { useState } from "react";
import Dial from "./components/Dial";
import { projects } from "../../data/projects";
import { Link } from "react-router";
import { formatPeriod } from "../../utils/formatPeriod";

const menu = ["All", "Group", "Personal"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="h-screen w-full flex overflow-hidden gap-20">
      <div className="flex items-center gap-3">
        <Dial size={420} items={menu} active={active} onSelect={setActive} />
        <div className="flex flex-col gap-4">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`text-left transition-colors cursor-pointer w-18
                hover:text-rose-800
                ${
                  active === item ? "text-rose-700 font-bold" : "text-stone-400"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-30">
        <h1 className="font-fraunces text-8xl">Projects</h1>
        <div>
          화면 하나를 만들 때마다 배우는 게 늘어납니다.
          <br />
          그래서 계속 만듭니다.
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col mb-20">
        {filteredProjects.map((project, i) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group flex gap-6 border-b border-stone-400/70 cursor-pointer"
          >
            <div className="flex-1 flex flex-col justify-between p-4">
              <span className="self-start text-[10px] text-stone-500/80 tabular-nums bg-stone-300 px-2 py-0.5 rounded-lg">
                {formatPeriod(project.start, project.end)}
              </span>

              <div className="flex flex-col gap-2">
                <div className="flex items-end justify-between">
                  <span className="text-7xl font-bold font-pilowlava text-rose-800">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-medium transition-colors group-hover:text-rose-800 group-focus-visible:text-rose-800">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-stone-500 mt-1 text-end">
                  {project.des}
                </p>
              </div>
            </div>

            <div className="flex-1 h-80 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                style={{ backgroundImage: `url(${project.img})` }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
