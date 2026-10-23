import { useState } from "react";
import { projects } from "../../data/projects";
import CategoryFilter from "./components/CategoryFilter";
import ProjectListItem from "./components/ProjectListItem";
import ProjectModal from "./components/ProjectModal";

const CATEGORIES = ["All", "Group", "Personal"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="h-screen w-full flex overflow-hidden gap-20">
      <div className="flex flex-col-reverse 2xl:flex-row 2xl:gap-20">
        <CategoryFilter items={CATEGORIES} active={active} onSelect={setActive} />

        <div className="flex flex-col gap-5 pt-10 2xl:pt-30 pl-6 2xl:pl-0">
          <h1 className="font-fraunces text-6xl 2xl:text-8xl">Projects</h1>
          <p>
            화면 하나를 만들 때마다 배우는 게 늘어납니다.
            <br />
            그래서 계속 만듭니다.
          </p>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col mb-20">
        {filteredProjects.map((project, i) => (
          <ProjectListItem
            key={project.id}
            project={project}
            index={i}
            onSelect={setSelected}
          />
        ))}
      </div>

      {selected !== null && (
        <ProjectModal onClose={() => setSelected(null)} selected={selected} />
      )}
    </div>
  );
};

export default Projects;
