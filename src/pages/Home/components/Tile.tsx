import type { ComponentProps } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

/** 안내판 칸 공통 스타일 — 마우스를 올리면 살짝 떠오름 */
const TILE_BASE =
  "group relative flex flex-col justify-between overflow-hidden rounded-[10px] p-5 outline-none sm:p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(28,25,23,0.18)] focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-rose-700 focus-visible:ring-offset-4 focus-visible:ring-offset-background";

/** 안내판 칸 — 공통 스타일이 입혀진 Link. 모서리 · 배경색은 className으로 */
const Tile = ({ className = "", ...props }: ComponentProps<typeof Link>) => (
  <Link className={`${TILE_BASE} ${className}`} {...props} />
);

/** 칸 오른쪽 위 화살표 (About · Contact) */
export const TileArrow = () => (
  <ArrowUpRight
    size={26}
    strokeWidth={1.5}
    aria-hidden="true"
    className="absolute right-4 top-4 size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:right-5 sm:top-5 sm:size-6"
  />
);

export default Tile;
