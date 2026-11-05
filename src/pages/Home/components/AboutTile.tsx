import Tile, { TileArrow } from "./Tile";

/** About 칸에서 빼꼼 내미는 캐릭터 (눈만 깜빡이는 webp) — 파일 위치에 맞게 바꾸기 */
const ABOUT_GIF = "/images/home/blink.webp";

const AboutTile = () => (
  <Tile
    to="/about"
    className="rounded-bl-[56px] bg-rose-800 text-stone-100 lg:rounded-bl-[96px]"
  >
    <span>
      <span className="font-fraunces block text-[1.75rem] sm:text-4xl">
        About
      </span>
      <span className="mt-1 block text-[13px] opacity-75">
        코드 안팎의 유지형
      </span>
    </span>
    <TileArrow />
    {/* 칸 아래 가장자리 뒤에서 캐릭터가 빼꼼 — 마우스를 올리면 쑥 올라옴 */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-6 -bottom-29 w-32 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-22 group-focus-visible:-translate-y-22 sm:right-8 sm:w-40"
    >
      <span className="absolute -top-3 -left-9 hidden rounded-2xl rounded-br-[4px] bg-white px-3 py-1 text-xs font-medium text-stone-900 shadow-sm transition-transform duration-300 group-hover:scale-110 sm:block">
        hi!
      </span>
      <img
        src={ABOUT_GIF}
        alt=""
        draggable={false}
        className="aspect-[3/4] w-full rounded-t-full object-cover object-top"
      />
    </span>
  </Tile>
);

export default AboutTile;
