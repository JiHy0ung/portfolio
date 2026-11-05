import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectFolders from "./components/ProjectFolders";
import ProjectModal from "./components/ProjectModal";

const Projects = () => {
  // 맨 앞에 꺼내 둔 폴더
  const [activeId, setActiveId] = useState(projects[0]?.id);
  // 상세 모달로 연 프로젝트
  const [selected, setSelected] = useState<number | null>(null);

  // h-screen 안에서 위쪽 헤더 높이(약 5rem)만큼 아래를 비워 둬야 폴더가 화면 밖으로 안 넘침
  return (
    <div className="flex h-screen w-full flex-col px-6 pt-10 pb-20 lg:px-20">
      <header>
        <h1 className="font-fraunces text-6xl leading-[0.9] tracking-tight lg:text-[5.25rem]">
          Projects
        </h1>
        <p className="mt-2 text-sm text-stone-600 pt-4">
          불편하거나 필요해서 만들다 보니 쌓인 것들.
        </p>
      </header>

      <ProjectFolders
        projects={projects}
        activeId={activeId}
        onChange={setActiveId}
        onOpen={setSelected}
        className="mt-8 min-h-[30rem] flex-1"
      />

      {selected !== null && (
        <ProjectModal onClose={() => setSelected(null)} selected={selected} />
      )}
    </div>
  );
};

export default Projects;
