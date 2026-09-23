export type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  category: "Group" | "Personal";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "포트폴리오",
    des: "개인 포트폴리오 사이트",
    img: "/images/projects/portfolio_thumb.png",
    category: "Personal",
  },
  {
    id: 2,
    title: "속솜",
    des: "제주도 오버투어리즘 해소를 위한 혼잡 회피형 스마트 관광 루트 추천 서비스",
    img: "/images/projects/soksom_thumb.png",
    category: "Group",
  },
  {
    id: 3,
    title: "Tidy Mind",
    des: "AI 기반 메모 자동 분류 및 할 일 관리 애플리케이션",
    img: "/images/projects/tidymind_thumb.png",
    category: "Group",
  },
  {
    id: 4,
    title: "시먀",
    des: "마인크래프트 서버 플레이어를 위한 비공식 공략 참고 사이트",
    img: "/images/projects/simya_thumb.png",
    category: "Personal",
  },
];
