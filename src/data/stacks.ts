export type StackCategory = "frontend" | "backend" | "etc";

export type Stack = {
  name: string;
  file: string;
  category: StackCategory;
};

export const stackTabs = [
  { key: "all", label: "전체" },
  { key: "frontend", label: "프론트엔드" },
  { key: "backend", label: "백엔드" },
  { key: "etc", label: "기타" },
] as const;

export type StackTabKey = (typeof stackTabs)[number]["key"];

export const stackIconSrc = (stack: Stack) =>
  `/images/about/stack/${stack.file}`;

export const stacks: Stack[] = [
  // 프론트
  { name: "JavaScript", file: "javascript.svg", category: "frontend" },
  { name: "TypeScript", file: "typescript.svg", category: "frontend" },
  { name: "React", file: "react.svg", category: "frontend" },
  { name: "HTML", file: "html.svg", category: "frontend" },
  { name: "CSS", file: "css.svg", category: "frontend" },
  { name: "TanStack Query", file: "tanstack.svg", category: "frontend" },
  { name: "Zustand", file: "zustand.svg", category: "frontend" },
  { name: "Redux", file: "redux.svg", category: "frontend" },
  { name: "React Router", file: "react-router.svg", category: "frontend" },
  { name: "Axios", file: "axios.svg", category: "frontend" },
  { name: "Vite", file: "vite.svg", category: "frontend" },
  { name: "Tailwind CSS", file: "tailwindcss.svg", category: "frontend" },
  {
    name: "styled-components",
    file: "styled-components.png",
    category: "frontend",
  },
  { name: "Material UI", file: "mui.svg", category: "frontend" },
  { name: "Bootstrap", file: "bootstrap.svg", category: "frontend" },
  { name: "Shadcn/ui", file: "shadcn-ui.svg", category: "frontend" },
  { name: "Next.js", file: "nextjs.svg", category: "frontend" },

  // 백
  { name: "Node.js", file: "nodejs.svg", category: "backend" },
  { name: "Express", file: "express.svg", category: "backend" },
  { name: "MongoDB", file: "mongodb.svg", category: "backend" },
  { name: "Supabase", file: "supabase.svg", category: "backend" },
  { name: "PostgreSQL", file: "postgresql.png", category: "backend" },
  { name: "Firebase", file: "firebase.svg", category: "backend" },

  // 기타
  { name: "Git", file: "git.svg", category: "etc" },
  { name: "GitHub", file: "github.svg", category: "etc" },
  { name: "Vercel", file: "vercel.svg", category: "etc" },
  { name: "Netlify", file: "netlify.svg", category: "etc" },
  { name: "Figma", file: "figma.svg", category: "etc" },
  { name: "Photoshop", file: "photoshop.png", category: "etc" },
  { name: "Premiere Pro", file: "premiere-pro.png", category: "etc" },
];
