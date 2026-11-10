export type Project = {
  id: number;
  title: string;
  subtitle?: string;
  desc: string;
  category: "Group" | "Personal";
  start: string;
  end?: string;
  thumbnail: string;
  note?: string;

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
    title: "속솜",
    note: "붐비는 곳 피해\n여행하고 싶은 사람들을 위해",
    subtitle: "한국관광공사 공모전",
    desc: "제주도 오버투어리즘 해소를 위한 혼잡 회피형 스마트 관광 루트 추천 서비스",
    thumbnail: "/images/projects/soksom/thumb.webp",
    category: "Group",
    start: "2026-05",
    overview:
      "제주도 유명 맛집과 핫플레이스를 찾았다가 주변이 모두 붐벼 계획했던 일정이 계속 늘어진 경험에서 시작한 여행 계획 서비스입니다. 사람이 많은 곳을 피해 여유로운 휴식을 지키고 싶은 여행자를 위해 혼잡도를 보며 일정을 짤 수 있도록 했습니다. 붐비는 관광지 대신 갈 만한 곳을 추천하도록 설계했습니다. 제주 오버투어리즘 문제를 줄이는 것을 목표로 한 한국관광공사 공모전 출품작입니다.",
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
      "관광지 혼잡도와 실시간 교통 정보를 함께 보여주는 지도",
      "혼잡 관광지의 대체 관광지 추천",
      "관광지 검색과 카테고리 필터, 현재 지도 영역 검색",
      "드래그 앤 드롭 일자별 여행 일정 구성과 수정",
      "구간별 이동 거리·시간 표시와 AI 루트 최적화",
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
      "사이트 전반의 UI 디자인 개선(홈, 마이페이지 등)",
    ],
    troubleshooting: [
      {
        problem:
          "관광지 목록을 걸러 만든 filteredSpots 배열을 useMemo 없이 계산해, 렌더링마다 내용이 같은 새 배열이 만들어짐. 이를 의존성으로 쓰는 useEffect가 매번 다시 실행되며 상태를 바꿔 'Maximum update depth exceeded' 에러와 무한 리렌더링 발생",
        solution:
          "filteredSpots를 useMemo로 감싸 원본 데이터가 바뀔 때만 새 배열을 만들도록 수정",
        result:
          "무한 리렌더링이 사라지고, 값이 실제로 바뀔 때만 다시 그려지도록 개선",
      },
      {
        problem:
          "소셜 로그인 콜백에서 토큰 저장이 끝나기 전에 페이지 이동이 먼저 일어나, 로그인 직후 다시 로그인 화면으로 돌아감",
        solution:
          "토큰 저장이 끝난 뒤에만 이동하도록 순서를 보장하고, 인증 확인 중에는 리다이렉트하지 않도록 확인 중 상태를 따로 둠",
        result: "로그인 직후 로그인 화면으로 돌아가는 현상 해결",
      },
    ],
    learnings: [
      "작업 전 PR리뷰를 제안했지만 지켜지지 않아 작업이 꼬이는 경험을 하며 협업을 시작할 때 PR/커밋 규칙을 팀이 함께 분명히 정해 두는 일이 가장 중요하다는 것을 배움",
      "React는 배열과 객체를 내용이 아닌 참조로 비교한다는 것을 직접 겪고, 계산한 배열을 의존성으로 쓸 때는 참조가 유지되는지 먼저 확인하게 됨",
      "비동기 작업은 코드에 적힌 순서대로 끝나지 않는다는 것을 배우고, 인증처럼 순서가 중요한 흐름에는 확인 중 상태를 따로 두고 설계하게 됨",
      "서버에서 오는 데이터는 TanStack Query로, 화면에서만 쓰는 상태는 Zustand로 나눠 관리하며 두 상태를 구분하는 기준을 세움",
    ],
    links: {
      github: "https://github.com/colaage23/soksom",
      demo: "https://soksom.netlify.app/",
    },
    screenshots: [
      { src: "/images/projects/soksom/main.mp4", desc: "메인 홈 화면" },
      { src: "/images/projects/soksom/signup.webp", desc: "회원가입 화면" },
      { src: "/images/projects/soksom/login.webp", desc: "로그인 화면" },
      {
        src: "/images/projects/soksom/map.webp",
        desc: "탐색 페이지 지도 화면",
      },
      {
        src: "/images/projects/soksom/spot_detail.webp",
        desc: "탐색 페이지 관광지 상세 패널",
      },
      {
        src: "/images/projects/soksom/route1.webp",
        desc: "탐색 페이지 루트 모드",
      },
      {
        src: "/images/projects/soksom/route2.webp",
        desc: "탐색 페이지 루트 모드",
      },
      {
        src: "/images/projects/soksom/trip_detail.webp",
        desc: "여행 상세 페이지",
      },
    ],
  },
  {
    id: 2,
    title: "Tidy Mind",
    note: "정리 못 하는 사람들을\n위해 만든 것",
    desc: "AI 기반 메모 자동 분류 및 할 일 관리 애플리케이션",
    thumbnail: "/images/projects/tidymind/thumb.webp",
    category: "Group",
    start: "2025-08",
    end: "2025-08",
    overview:
      "아이디어나 약속, 간단한 메모를 메모장 한 곳에 몰아 적다 보면 내용이 뒤섞여 나중에 다시 정리하고 확인하는 일이 번거로워집니다. 이 불편을 덜기 위해 메모장에 모든 것을 적는 사람들을 위한 생산성 애플리케이션을 만들었습니다. 메모를 입력하면 OpenAI GPT-4o-mini가 Task, Reminder, Idea 등으로 자동 분류하고 우선순위에 따라 마감일까지 설정합니다. 분류된 Task와 Reminder는 캘린더에 자동으로 표시됩니다.",
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
      "Heatmap용 월간 완료 현황 API(GET /api/notes/status) 설계와 구현: 완료된 Task·Reminder를 일자별로 집계하고, 잘못된 연도·월 요청에는 한국어 에러 메시지로 응답",
      "요청 연도·월 유효성 검사와 잘못된 입력에 대한 한국어 에러 메시지 처리",
    ],
    troubleshooting: [
      {
        problem:
          "로컬에서는 잘 되던 음성 인식이 Vercel 배포 후 동작하지 않음. HTTPS 여부, Safari의 제한적인 Web Speech API 지원, 마이크 권한처럼 배포 환경에서만 드러나는 원인이 얽혀 있어 찾기 어려웠음",
        solution:
          "HTTPS 또는 localhost인지 먼저 확인하고, Safari는 감지해 따로 안내함. getUserMedia로 마이크 권한을 직접 요청해 권한 거부와 장치 없음을 구분하고, 상황별 토스트 메시지로 안내",
        result: "배포 환경에서도 음성 입력이 안정적으로 동작",
      },
      {
        problem:
          "직접 만든 Heatmap API를 프론트에 연동하는 과정에서 경로의 선행 슬래시가 빠져 요청이 실패하고, completion 필드가 없는 노트가 있으면 캘린더 렌더링이 깨짐",
        solution:
          "엔드포인트 형식을 하나로 정리하고, completion 필드가 없으면 기본값을 채우는 방어 로직 추가",
        result:
          "Heatmap이 정상적으로 표시되고, 일부 노트에 값이 없어도 캘린더가 깨지지 않음",
      },
    ],
    learnings: [
      "프론트엔드를 맡기로 했지만 팀 상황에 따라 백엔드 API까지 맡게 되었고 직접 설계하고 연동해 보며 프론트가 기대하는 응답 형태와 빠질 수 있는 필드의 기본값을 미리 맞춰 둬야 한다는 것을 배움",
      "현업 개발자 팀원에게 궁금했던 실무 지식을 직접 들으며 배웠고 추천받은 CodeRabbit을 PR에 실제 도입해 리뷰 의견을 바탕으로 코드를 개선함",
      "로컬에서 된다고 배포 환경에서도 되는 것은 아니라는 걸 겪고, 브라우저 지원 범위와 권한, HTTPS 조건을 구현 전에 먼저 확인하게 됨",
      "API를 직접 설계하고 연동까지 해 보며, 프론트가 기대하는 응답 형태와 빠질 수 있는 필드의 기본값을 미리 맞춰 둬야 한다는 것을 배움",
    ],
    links: {
      github: "https://github.com/JiHy0ung/tidy-mind-fe",
    },
    screenshots: [
      { src: "/images/projects/tidymind/tidymind.mp4", desc: "메인 홈 화면" },
      { src: "/images/projects/tidymind/collection.webp", desc: "콜렉션 화면" },
      { src: "/images/projects/tidymind/calendar.webp", desc: "캘린더 화면" },
      { src: "/images/projects/tidymind/signin.webp", desc: "로그인 화면" },
      { src: "/images/projects/tidymind/signup.webp", desc: "회원가입 화면" },
    ],
  },
  {
    id: 3,
    title: "포트폴리오",
    note: "나를 소개하기 위해\n만든 공간",
    desc: "개인 포트폴리오 사이트",
    category: "Personal",
    start: "2026-09",
    end: "2026-11",
    thumbnail: "/images/projects/portfolio/thumb.webp",
    overview:
      "저를 소개할 공간이 필요해서 직접 기획하고 디자인해 만든 포트폴리오 사이트입니다. 개발뿐 아니라 디자인에도 신경을 쓰는 사람이라는 것을 보여 주고 싶어 사이트 자체가 하나의 작업물로 보이도록 꾸몄습니다. 프로젝트 정보는 데이터 파일 하나로 관리하여 새프로젝트를 추가할 때 화면 코드를 고치지 않도록 설계했습니다.",
    role: "기획 · 디자인 · 개발",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Motion",
    ],
    features: [
      "Projects · About · Contact로 이어지는 홈 안내판",
      "마우스를 올리면 좋아하는 것들이 펼쳐지는 About 카드",
      "프로젝트 상세 모달과 이미지·영상 슬라이더",
      "커서를 따라오는 툴팁과 빛",
      "이미지·영상·폰트 경량화와 로딩 순서 조정으로 Lighthouse 성능 데스크톱 100점·모바일 96점 달성",
    ],
    contributions: [
      "탭을 누르면 폴더가 앞으로 나오는 서류 폴더 전환을 스프링 애니메이션으로 구현",
      "마우스를 올리면 좋아하는 것들이 카드 뒤에서 차례로 펼쳐지는 About 카드 구현 (터치는 첫 탭에 펼치고 두 번째 탭에 상세 열기)",
      "홈 Projects 칸에서 목록에 마우스를 올리면 썸네일이 부드럽게 겹쳐 바뀌는 미리보기 구현",
      "커서를 따라오는 빛과 커서 툴팁 구현 (Motion의 useSpring 활용)",
      "라이브러리 없이 useState와 CSS transform으로 이미지·영상 슬라이더 구현",
      "Esc 닫기, 스크롤 시 제목 노출, aria 속성을 갖춘 상세 모달 구현",
      "프로젝트 데이터 타입 설계와 선택 필드에 따른 조건부 렌더링 (진행 상태에 따라 견출지 자동 표시 등)",
    ],
    troubleshooting: [
      {
        problem:
          "배포 후 첫 로딩이 느림. Lighthouse 성능 83점, 페이지 무게 16.5MB로 원본 png·gif·mov 파일과 전체 폰트를 그대로 쓰고 있었던 것이 원인",
        solution:
          "이미지는 webp, 영상은 mp4로 변환하고 폰트는 쓰는 글자만 남긴 woff2로 줄임. 폰트 CSS를 @import 대신 link로 불러와 렌더링을 막지 않도록 하고, 모바일 LCP 요소인 홈 제목은 투명도 없이 위치만 움직이도록 수정",
        result:
          "페이지 무게 16.5MB → 489KB, Lighthouse 성능 데스크톱 100점·모바일 96점",
      },
      {
        problem:
          "슬라이더에 넣은 화면 녹화 영상이 재생되지 않음. 모든 항목을 img로 그리고 있었고, 파일도 Chrome에서 재생되지 않는 mov 형식이었음",
        solution:
          "영상을 mp4로 변환하고, 확장자로 영상을 구분해 video 태그로 그리도록 나눔. 자동 재생이 막히지 않도록 muted와 playsInline을 함께 지정",
        result:
          "이미지와 영상을 한 슬라이더에서 함께 보여 줄 수 있게 되었고, 영상은 조작 없이 자동으로 반복 재생",
      },
      {
        problem:
          "About 카드에 마우스를 올리면 뜨는 커서 툴팁이 마우스 위치와 어긋남. 화면 크기에 따라 카드 영역에 scale을 걸어 두었는데, transform이 걸린 요소 안에서는 position: fixed가 화면이 아니라 그 요소를 기준으로 잡히는 것이 원인",
        solution:
          "툴팁을 scale이 걸린 영역 바깥으로 옮겨, 화면을 기준으로 위치가 잡히도록 수정",
        result: "화면 크기와 관계없이 툴팁이 마우스 바로 옆에 정확히 붙음",
      },
    ],
    learnings: [
      "개발할 때는 몰랐던 느린 로딩을 배포 후에야 알게 되어 Lighthouse로 측정해 보니 이미지·영상·폰트 용량이 원인이었고, 화면 밖에서 놓치기 쉬운 부분도 사용자 경험의 일부라는 것을 배움",
      "CSS가 예상과 다르게 동작할 때 값을 바꿔 가며 맞추기보다, transform이 fixed의 기준을 바꾸는 것처럼 원인이 되는 규칙을 먼저 찾아보게 됨",
      "데이터 타입을 먼저 설계하고 화면을 그리니, 값이 없는 경우의 처리를 타입 오류로 미리 잡을 수 있었음",
    ],
    links: {},
    screenshots: [
      { src: "/images/projects/portfolio/portfolio.mp4", desc: "Home 화면" },
      { src: "/images/projects/portfolio/projects.mp4", desc: "Projects 화면" },
      { src: "/images/projects/portfolio/about.mp4", desc: "About 화면" },
      { src: "/images/projects/portfolio/contact.mp4", desc: "Contact 화면" },
    ],
  },
  {
    id: 4,
    title: "시먀",
    note: "게임하다 필요해서\n직접 만든 공략집",
    desc: "마인크래프트 서버 플레이어를 위한 비공식 공략 참고 사이트",
    thumbnail: "/images/projects/simya/thumb.webp",
    category: "Personal",
    start: "2026-04",
    end: "2026-10 (운영 종료)",
    overview:
      "마인크래프트 '심야잡화점' 서버를 플레이하며 직접 겪은 불편에서 시작한 비공식 공략 사이트입니다. 이 서버는 제작 도구를 구매해야 레시피가 공개되고, 단계마다 재료가 달라 매번 찾아보기 어려웠습니다. 그래서 아직 도구를 구매하지 못한 플레이어도 레시피를 미리보고 재료 비용과 순수익을 비교해 효율적으로 플레이할 수 있도록 만들었습니다. 운영하는 동안 디스코드와 인게임으로 오류와 UI 의견, NPC 호감도 아이템 정보를 제보받아 바로 반영하며 사이트를 키웠습니다. 서버가 문을 닫기까지 약 6개월 동안 방문자 7,949명, 페이지뷰 31,138회를 기록했고 서버 베스트 유저 공략으로 선정되었습니다.",
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
      "하위 재료까지 한 번에 펼쳐 보는 재료 트리",
      "서버의 현재 계절과 계절별 수확 작물, 방문 가능한 마을 안내",
      "재료로 만들 수 있는 완성품 찾기",
      "NPC별 선호 선물과 호감도 단계에 맞는 추천 선물",
      "주문·무역을 관리하는 개인 잡화점 도구와 무역 대기 타이머",
      "마을별 채집 아이템, 물고기 도감, 행상인 정보",
    ],
    contributions: [
      "하위 레시피가 있는 재료를 재귀적으로 펼쳐, 필요한 양과 세트 수까지 계산해 보여 주는 재료 트리",
      "레시피를 순수익·판매가·계절 재료 수 기준으로 정렬해 비교할 수 있는 레시피 조회",
      "서버의 인게임 시간을 계산해 현재 계절을 표시하고 주기적으로 갱신",
      "종료 시각을 저장하는 방식의 무역 대기 타이머 (탭에 돌아오면 남은 시간 재계산, 끝나면 알림음)",
      "보던 탭과 정렬, 입력한 데이터를 localStorage에 저장해 다시 방문해도 그대로 복원",
      "Canvas 2D로 별, 별똥별, 성운, 달을 그린 인트로 애니메이션 (첫 방문에만 재생)",
      "React.lazy 페이지별 코드 분할과 픽셀 폰트, 커스텀 커서를 적용한 반응형 UI",
    ],
    troubleshooting: [
      {
        problem:
          "무역 대기 타이머를 1초마다 줄이는 방식은 탭이 백그라운드에 있으면 브라우저가 interval을 늦춰 실제 시간과 어긋남",
        solution:
          "종료 시각을 localStorage에 저장하고 매번 현재 시각과의 차이로 남은 시간을 계산, focus·visibilitychange 시 즉시 재계산",
        result: "탭을 오래 비워 두어도 실제 시간과 같은 남은 시간을 표시",
      },
      {
        problem:
          "타이머 종료 시 알림음이 브라우저 자동재생 정책에 막혀 재생되지 않음",
        solution:
          "타이머를 시작하는 클릭 시점에 오디오를 한 번 재생 후 멈춰 재생 권한을 미리 확보",
        result: "타이머가 끝나면 알림음이 정상적으로 재생",
      },
      {
        problem:
          "무역판 데이터 구조를 한 칸 한 아이템에서 한 칸 여러 아이템으로 바꾸자 기존 사용자의 저장 데이터가 깨짐",
        solution:
          "불러올 때 이전 형식을 감지해 새 구조로 변환하는 마이그레이션 처리",
        result: "기존 사용자도 데이터 손실없이 새 무역판을 그대로 사용",
      },
      {
        problem:
          "레시피 데이터마다 재료 이름 띄어쓰기가 달라 하위 레시피 매칭과 검색이 실패",
        solution: "공백을 제거한 이름으로 비교하도록 매칭 로직 수정",
        result: "띄어쓰기가 달라도 하위 레시피와 검색 결과가 정확히 연결",
      },
      {
        problem:
          "디스코드 플레이어 제보와 화면 녹화로, 크롬 번역을 켠 상태에서 NPC 호감도 페이지의 첫 NPC에서 다른 NPC를 고르면 화면이 통째로 사라지고 픽셀 폰트가 깨지는 문제를 발견. 한국어 사이트인데 html의 lang이 en으로 되어 있어 번역이 켜지기 쉬웠고, 번역 기능이 글자를 다른 태그로 바꿔 넣으면서 React가 알고 있는 화면 구조와 실제 화면이 어긋난 것이 원인",
        solution:
          'html의 lang을 ko로 바로잡고 translate="no"를 지정해 사이트가 번역되지 않도록 막은 뒤 핫픽스로 바로 배포',
        result: "제보 당일 핫픽스로 번역 상태에서도 화면이 깨지지 않도록 해결",
      },
    ],
    learnings: [
      "디스코드와 인게임으로 실시간 제보를 받아 바로 고치면서, 서비스는 배포가 끝이 아니라 실제 사용자와 함께 운영하며 완성된다는 것을 알게 됨",
      "플레이어 제보로 채운 NPC 호감도 페이지가 가장 많이 방문한 페이지가 되는 것을 보며, 사용자가 진짜 필요로 하는 정보를 듣는 일의 중요성을 배움",
      "기존 사용자의 저장 데이터를 깨뜨리지 않도록 구조 변경을 마이그레이션으로 처리하면서, 이미 쓰고 있는 사람의 데이터를 먼저 지키는 습관이 생김",
    ],
    links: {
      github: "https://github.com/JiHy0ung/Simya",
      demo: "https://si-mya.vercel.app",
    },
    screenshots: [
      { src: "/images/projects/simya/simya.mp4", desc: "전체 사이트" },
      {
        src: "/images/projects/simya/personal1.webp",
        desc: "개인 잡화점 (주문)",
      },
      {
        src: "/images/projects/simya/personal2.webp",
        desc: "개인 잡화점 (무역)",
      },
      { src: "/images/projects/simya/season.webp", desc: "계절 정보" },
      { src: "/images/projects/simya/npc.webp", desc: "NPC 호감도 정보" },
      { src: "/images/projects/simya/shop.webp", desc: "행상인 정보" },
      { src: "/images/projects/simya/food.webp", desc: "음식 레시피 정보" },
      { src: "/images/projects/simya/jewel.webp", desc: "보석 레시피 정보" },
      { src: "/images/projects/simya/wood.webp", desc: "목재 레시피 정보" },
      { src: "/images/projects/simya/fishing.webp", desc: "낚시 도감 정보" },
    ],
  },
];
