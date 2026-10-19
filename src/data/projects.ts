export type Project = {
  id: number;
  title: string;
  subtitle?: string;
  desc: string;
  category: "Group" | "Personal";
  start: string;
  end?: string;
  thumbnail: string;

  screenshots?: IScreenShots[];
  team?: { front?: number; back?: number; fullstack?: number; design?: number };
  role?: string;
  stack: string[];
  overview?: string;
  features?: string[];
  contributions?: string[];
  troubleshooting?: { problem?: string; solution?: string; result?: string }[];
  links?: { github?: string; demo?: string };
  learnings?: string[];
};

export interface IScreenShots {
  src: string;
  desc: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "포트폴리오",
    desc: "개인 포트폴리오 사이트",
    category: "Personal",
    start: "2026-09",
    end: "2026-10",
    thumbnail: "/images/projects/portfolio/thumb.png",
    overview:
      "지금 보고 계신 사이트입니다. 프로젝트를 나열하는 데 그치지 않고 사이트 자체가 하나의 작업물로 보이도록, 굵은 타이포그래피와 절제된 색으로 직접 디자인하고 개발했습니다. 프로젝트 정보는 데이터 파일 하나로 관리해서, 새 프로젝트를 추가할 때 화면 코드를 고치지 않아도 됩니다.",
    role: "기획 · 디자인 · 개발",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    features: [
      "다이얼로 프로젝트 분류 필터링",
      "프로젝트 상세 모달",
      "이미지·영상 슬라이더",
      "기술 스택 마키 애니메이션",
      "화면 크기에 따른 레이아웃 전환",
    ],
    contributions: [
      "라이브러리 없이 useState와 CSS transform으로 이미지·영상 슬라이더 구현",
      "Esc 닫기, 스크롤 시 제목 노출, aria 속성을 갖춘 상세 모달 구현",
      "CSS keyframes로 끊김 없이 반복되는 스택 마키 구현",
      "프로젝트 데이터 타입 설계와 선택 필드에 따른 조건부 렌더링",
      "group-hover를 이용한 카드 호버 인터랙션",
    ],
    troubleshooting: [
      {
        problem:
          "슬라이더에 넣은 화면 녹화 영상이 재생되지 않았습니다. 모든 항목을 img로 그리고 있었고, 파일도 Chrome에서 재생되지 않는 mov 형식이었습니다.",
        solution:
          "영상을 mp4로 변환하고, 확장자로 영상을 구분해 video 태그로 그리도록 나눴습니다. 자동 재생이 막히지 않도록 muted와 playsInline을 함께 지정했습니다.",
        result:
          "이미지와 영상을 한 슬라이더에서 같이 보여줄 수 있게 되었고, 영상은 조작 없이 자동으로 반복 재생됩니다.",
      },
      {
        problem:
          "프로젝트 카드에 overflow-hidden을 주자, 세로 flex 목록 안의 카드들이 화면 높이에 맞춰 찌그러졌습니다.",
        solution:
          "flex 아이템은 overflow가 visible이 아니면 최소 높이가 0이 되어 줄어들 수 있다는 것을 확인하고, 카드에 shrink-0을 지정했습니다.",
        result:
          "카드가 원래 높이를 유지하고, 넘치는 카드는 목록 안에서 스크롤됩니다.",
      },
    ],
    learnings: [
      "CSS가 예상과 다르게 동작할 때 값을 바꿔 가며 맞추기보다, flex의 최소 크기 규칙처럼 원인이 되는 규칙을 찾아보게 되었습니다.",
      "데이터 타입을 먼저 설계하고 화면을 그리니, 값이 없는 경우의 처리를 타입 오류로 미리 잡을 수 있었습니다.",
      "슬라이더와 모달을 직접 만들면서, 평소 라이브러리가 대신 처리해 주던 키보드 조작과 접근성을 하나씩 챙기게 되었습니다.",
    ],
    links: {},
    screenshots: [],
  },
  {
    id: 2,
    title: "속솜",
    subtitle: "한국관광공사 공모전",
    desc: "제주도 오버투어리즘 해소를 위한 혼잡 회피형 스마트 관광 루트 추천 서비스",
    thumbnail: "/images/projects/soksom/thumb.png",
    category: "Group",
    start: "2026-05",
    overview:
      "제주 관광객이 일부 유명 관광지에 몰리는 오버투어리즘 문제를 줄이기 위해 만든 여행 계획 서비스입니다. 관광지의 당일 혼잡도를 지도에서 보여주고, 혼잡한 곳은 대체 관광지를 추천하며, 사용자가 짠 일정의 이동 루트를 AI로 최적화합니다. 한국관광공사 공모전 출품작으로, 프론트엔드 2명과 백엔드 2명이 함께 개발하고 있습니다.",
    role: "프론트엔드 개발",
    team: { front: 2, back: 2 },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Zustand",
      "TanStack Query",
      "Axios",
      "styled-components",
      "Kakao Maps SDK",
      "Kakao Mobility API",
      "Open-Meteo API",
      "react-dnd",
      "react-intersection-observer",
      "Netlify",
      "GitHub Actions",
    ],
    features: [
      "관광지 혼잡도 지도 시각화 (지금 / 내일 오전)",
      "혼잡 관광지의 대체 관광지 추천",
      "관광지 검색과 카테고리 필터, 현재 지도 영역 검색",
      "드래그 앤 드롭 일자별 여행 일정 구성과 수정",
      "구간별 이동 거리·시간 표시와 AI 루트 최적화",
      "실시간 교통정보 레이어",
      "제주 날씨와 7일 예보, 월별 핫플레이스",
      "즐겨찾기와 최근 검색 기록, 마이페이지",
      "이메일 및 카카오·구글·네이버 소셜 로그인",
    ],
    contributions: [
      "Kakao Maps SDK 기반 지도 화면: 커스텀 SVG 마커, 혼잡도 오버레이, 교통 레이어 토글",
      "카카오·구글·네이버 소셜 로그인과 refresh token 기반 로그인 유지",
      "Zustand와 TanStack Query를 이용한 즐겨찾기",
      "useInfiniteQuery 기반 관광지 목록 무한 스크롤과 현재 지도 영역 검색",
      "react-dnd를 이용한 경유지 드래그 앤 드롭 순서 변경",
      "일자별 경로와 이동 거리·시간을 보여주는 일정 상세 페이지",
      "혼잡한 관광지 상세 패널의 대체 관광지 3곳 추천",
      "사이트 전반의 UI 디자인 개선",
    ],
    troubleshooting: [
      {
        problem:
          "스토어에서 꺼낸 배열이 렌더링마다 새로 만들어지면서 참조가 계속 바뀌어, 이를 의존성으로 쓰는 컴포넌트에서 무한 리렌더링이 발생했습니다.",
        solution:
          "selector가 새 배열을 만들지 않고 스토어의 값을 그대로 반환하도록 바꾸고, 가공이 필요한 배열은 useMemo로 참조를 고정했습니다.",
        result:
          "무한 리렌더링이 사라졌고, 값이 실제로 바뀔 때만 컴포넌트가 다시 그려지게 되었습니다.",
      },
      {
        problem:
          "소셜 로그인 콜백에서 토큰 저장이 끝나기 전에 페이지 이동이 먼저 일어나, 로그인 직후 다시 로그인 화면으로 돌아가는 문제가 있었습니다.",
        solution:
          "토큰 저장이 끝난 뒤에만 이동하도록 순서를 보장하고, 인증을 확인하는 동안에는 리다이렉트하지 않도록 확인 중 상태를 따로 두었습니다.",
        result: "로그인 직후 로그인 화면으로 돌아가는 현상이 사라졌습니다.",
      },
    ],
    learnings: [
      "렌더링마다 새로 만들어지는 배열과 객체가 리렌더링을 일으킨다는 것을 직접 겪으며, 상태를 꺼낼 때 참조가 유지되는지 먼저 확인하게 되었습니다.",
      "비동기 작업은 코드에 적힌 순서대로 끝나지 않는다는 것을 배웠고, 인증처럼 순서가 중요한 흐름에는 확인 중 상태를 따로 두고 설계하게 되었습니다.",
      "서버에서 오는 데이터는 TanStack Query로, 화면에서만 쓰는 상태는 Zustand로 나눠 관리하면서 두 상태를 구분하는 기준을 세웠습니다.",
    ],
    links: {
      github: "https://github.com/colaage23/soksom",
      demo: "https://soksom.netlify.app/",
    },
    screenshots: [
      { src: "/images/projects/soksom/main.mp4", desc: "메인 홈 화면" },
      { src: "/images/projects/soksom/signup.png", desc: "회원가입 화면" },
      { src: "/images/projects/soksom/login.png", desc: "로그인 화면" },
      { src: "/images/projects/soksom/map.png", desc: "탐색 페이지 지도 화면" },
      {
        src: "/images/projects/soksom/spot_detail.png",
        desc: "탐색 페이지 관광지 상세 패널",
      },
      {
        src: "/images/projects/soksom/route1.png",
        desc: "탐색 페이지 루트 모드",
      },
      {
        src: "/images/projects/soksom/route2.png",
        desc: "탐색 페이지 루트 모드",
      },
      {
        src: "/images/projects/soksom/trip_detail.png",
        desc: "여행 상세 페이지",
      },
    ],
  },
  {
    id: 3,
    title: "Tidy Mind",
    desc: "AI 기반 메모 자동 분류 및 할 일 관리 애플리케이션",
    thumbnail: "/images/projects/tidymind/thumb.png",
    category: "Group",
    start: "2025-08",
    end: "2025-08",
    overview:
      "메모는 빠르게 쌓이지만 정리에 드는 노력 때문에 방치되기 쉽다는 문제에서 출발한 생산성 애플리케이션입니다. 메모를 입력하면 OpenAI GPT-4o-mini가 Task, Reminder, Idea 등으로 자동 분류하고, 우선순위에 따라 마감일까지 설정합니다. Task와 Reminder는 캘린더에 자동으로 표시됩니다. 풀스택 4명이 2주 동안 개발했습니다.",
    role: "풀스택 개발",
    team: { fullstack: 4 },
    stack: [
      "React",
      "JavaScript",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "MUI",
      "Emotion",
      "Axios",
      "date-fns",
      "FullCalendar",
      "react-speech-recognition",
      "Cloudinary",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Google OAuth",
      "OpenAI GPT-4o-mini",
      "Vercel",
    ],
    features: [
      "AI 메모 자동 분류와 우선순위 판단",
      "우선순위에 따른 마감일 자동 설정",
      "음성 메모 입력",
      "메모당 최대 5장 이미지 첨부",
      "카테고리별 메모 필터와 날짜별 그룹 목록",
      "메모 제목·내용·카테고리·마감일·이미지 수정",
      "캘린더와 Task Board, 완료 상태 토글",
      "월별 완료 항목 Heatmap",
      "이메일·Google 로그인",
      "라이트·다크 모드",
    ],
    contributions: [
      "react-speech-recognition을 활용한 음성 메모 입력 구현과 배포 환경 호환성 문제 해결",
      "Cloudinary 이미지 업로드 구현",
      "FullCalendar 연동과 미완료 우선 정렬 Task Board 구현",
      "Heatmap용 일별 완료 집계 API(GET /api/notes/statics) 설계와 구현",
      "요청 연도·월 유효성 검사와 에러 처리 구현",
    ],
    troubleshooting: [
      {
        problem:
          "로컬에서는 정상 동작하던 음성 인식이 Vercel 배포 후에는 동작하지 않았습니다. HTTPS 여부, Safari의 제한적인 Web Speech API 지원, 마이크 권한 처리처럼 배포 환경에서만 드러나는 변수가 얽혀 있어 원인 파악이 까다로웠습니다.",
        solution:
          "HTTPS 또는 localhost인지 먼저 확인하고, Safari를 감지해 별도 안내를 띄웠습니다. getUserMedia로 마이크 권한을 명시적으로 요청해 권한 거부와 장치 없음을 구분하고, 상황별 토스트 메시지로 안내했습니다.",
        result: "배포 환경에서도 음성 입력이 안정적으로 동작하게 되었습니다.",
      },
      {
        problem:
          "직접 만든 Heatmap용 API를 프론트에 연동하는 과정에서, 경로의 선행 슬래시가 빠져 요청이 실패했고 completion 필드가 없는 노트가 있으면 캘린더 렌더링이 깨졌습니다.",
        solution:
          "엔드포인트 형식을 일관되게 정리하고, completion 필드가 없으면 기본값을 채우는 방어 로직을 추가했습니다.",
        result:
          "Heatmap이 정상적으로 표시되었고, 점검 중에 발견한 테마 전환 시 캘린더 색상이 갱신되지 않는 문제도 함께 해결했습니다.",
      },
    ],
    learnings: [
      "로컬에서 동작한다고 배포 환경에서도 동작하는 것은 아니라는 걸 겪고, 브라우저 지원 범위와 권한, HTTPS 조건을 구현 전에 먼저 확인하게 되었습니다.",
      "API를 직접 설계하고 연동까지 해 보며, 프론트가 기대하는 응답 형태와 빠질 수 있는 필드의 기본값을 미리 맞춰 둬야 한다는 것을 배웠습니다.",
    ],
    links: {
      github: "https://github.com/JiHy0ung/tidy-mind-fe",
    },
    screenshots: [
      { src: "/images/projects/tidymind/tidymind.mp4", desc: "메인 홈 화면" },
      { src: "/images/projects/tidymind/collection.png", desc: "콜렉션 화면" },
      { src: "/images/projects/tidymind/calendar.png", desc: "캘린더 화면" },
      { src: "/images/projects/tidymind/signin.png", desc: "로그인 화면" },
      { src: "/images/projects/tidymind/signup.png", desc: "회원가입 화면" },
    ],
  },
  {
    id: 4,
    title: "시먀",
    desc: "마인크래프트 서버 플레이어를 위한 비공식 공략 참고 사이트",
    thumbnail: "/images/projects/simya/thumb.png",
    category: "Personal",
    start: "2026-04",
    end: "2026-10 (운영 종료 예정)",
    overview:
      "마인크래프트 '심야잡화점' 서버 플레이어가 레시피와 재료, 계절별 작물, 마을별 채집 아이템, NPC 선물 취향, 물고기 정보를 한곳에서 찾아볼 수 있게 만든 비공식 공략 사이트입니다. 레시피마다 재료 구성과 총 비용, 순수익을 계산해 보여주고, 서버의 현재 계절에 맞는 정보를 안내합니다. 주문과 무역 빙고판을 관리하는 개인 잡화점 도구도 함께 제공합니다. 게임 분위기에 맞춰 픽셀 폰트와 밤하늘 테마로 직접 디자인했습니다.",
    role: "기획 · 디자인 · 개발",
    stack: [
      "React",
      "JavaScript",
      "Vite",
      "MUI",
      "Emotion",
      "React Router",
      "Canvas API",
      "Lucide React",
      "Vercel",
      "Vercel Analytics",
    ],
    features: [
      "레시피별 재료 구성과 총 비용, 순수익 계산",
      "하위 재료까지 펼쳐 보는 재료 트리",
      "서버의 현재 계절과 계절별 수확 작물, 방문 가능한 마을 안내",
      "재료가 들어가는 완성품 찾기",
      "마을별 채집 아이템 안내",
      "NPC별 선호 선물과 호감도 단계에 맞는 추천 선물",
      "주문 슬롯과 5×5 무역 빙고판 관리, 무역 대기 타이머",
      "낚싯대 등급에 따른 생선살 기대 가격 추정",
      "물고기 도감과 분해 결과",
      "행상인 슬롯별 판매 품목 정보",
    ],
    contributions: [
      "가공식품, 레스토랑, 카페, 절임통, 양조통 탭별 레시피 조회와 순수익·판매가·계절 재료 수 기준 정렬",
      "하위 레시피가 있는 재료를 재귀적으로 펼치고 상위 수량을 곱해 필요한 양과 세트 수를 표시하는 재료 트리",
      "서버의 인게임 시간을 계산해 현재 계절을 표시하고 주기적으로 갱신",
      "작물이나 채집 아이템을 고르면 그 재료가 들어가는 완성품을 찾아 주는 조회 유틸",
      "낚싯대 등급별 출현 확률로 크기별 생선살 기대 가격을 추정해 생선 요리의 재료 비용에 반영",
      "물고기의 등급, 크기, 마을에 따른 분해 결과 계산 ('특별한' 물고기는 기본 물고기와 같은 결과로 처리)",
      "멤버십과 확장권 수에 따라 슬롯 수가 달라지는 주문 관리, 방향키·Enter·Esc로 조작하는 아이템 검색",
      "5×5 무역 빙고판에서 준비 완료한 칸을 체크하면 가로·세로·대각선 12줄의 완성 여부를 계산해 강조",
      "종료 시각을 저장하는 방식의 1시간 무역 대기 타이머 (탭 복귀 시 남은 시간 재계산, 종료 시 알림음)",
      "NPC별 호감도를 0.5 단위로 기록하고, 호감도 단계에 따라 추천 선물 등급을 강조",
      "보던 탭과 정렬, 선택한 항목, 주문·무역 데이터, 호감도를 localStorage에 저장해 재방문 시 복원",
      "Canvas 2D로 별, 별똥별, 성운, 달을 그린 인트로 애니메이션 (첫 방문에만 재생)",
      "메인 화면에 무작위 NPC를 클릭해 쓰다듬는 프레임 애니메이션",
      "React.lazy를 이용한 페이지별 코드 분할",
      "픽셀 폰트, 커스텀 커서, 커스텀 스크롤바, 모바일 드로어 메뉴를 적용한 반응형 UI",
    ],
    troubleshooting: [
      {
        problem:
          "무역 대기 타이머를 1초마다 줄이는 방식은 탭이 백그라운드에 있으면 브라우저가 interval을 늦춰 실제 시간과 어긋남",
        solution:
          "종료 시각을 localStorage에 저장하고 매번 현재 시각과의 차이로 남은 시간을 계산, focus·visibilitychange 시 즉시 재계산",
      },
      {
        problem:
          "타이머 종료 시 알림음이 브라우저 자동재생 정책에 막혀 재생되지 않음",
        solution:
          "타이머를 시작하는 클릭 시점에 오디오를 한 번 재생 후 멈춰 재생 권한을 미리 확보",
      },
      {
        problem:
          "무역판 데이터 구조를 한 칸 한 아이템에서 한 칸 여러 아이템으로 바꾸자 기존 사용자의 저장 데이터가 깨짐",
        solution:
          "불러올 때 이전 형식을 감지해 새 구조로 변환하는 마이그레이션 처리",
      },
      {
        problem:
          "레시피 데이터마다 재료 이름 띄어쓰기가 달라 하위 레시피 매칭과 검색이 실패",
        solution: "공백을 제거한 이름으로 비교하도록 매칭 로직 수정",
      },
    ],
    learnings: [],
    links: {
      github: "https://github.com/JiHy0ung/Simya",
      demo: "https://si-mya.vercel.app",
    },
    screenshots: [
      { src: "/images/projects/simya/simya.mp4", desc: "전체 사이트" },
      {
        src: "/images/projects/simya/personal1.png",
        desc: "개인 잡화점 (주문)",
      },
      {
        src: "/images/projects/simya/personal2.png",
        desc: "개인 잡화점 (무역)",
      },
      { src: "/images/projects/simya/season.png", desc: "계절 정보" },
      { src: "/images/projects/simya/npc.png", desc: "NPC 호감도 정보" },
      { src: "/images/projects/simya/shop.png", desc: "행상인 정보" },
      { src: "/images/projects/simya/food.png", desc: "음식 레시피 정보" },
      { src: "/images/projects/simya/jewel.png", desc: "보석 레시피 정보" },
      { src: "/images/projects/simya/wood.png", desc: "목재 레시피 정보" },
      { src: "/images/projects/simya/fishing.png", desc: "낚시 도감 정보" },
    ],
  },
];
