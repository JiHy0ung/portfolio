import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { aboutItems } from "../../data/about";
import CursorTooltip from "../../components/CursorTooltip";
import { useCursorTooltip } from "../../hooks/useCursorTooltip";
import PopItems from "./components/PopItems";
import ProfileCard from "./components/ProfileCard";
import ProfileDetail from "./components/ProfileDetail";

type HoverState = "idle" | "hover";

const HOVER_DELAY = 120;
/** /about?view=detail 이면 상세 화면 */
const DETAIL_PARAM = { key: "view", value: "detail" };

const About = () => {
  const [hoverState, setHoverState] = useState<HoverState>("idle");
  const { tooltip, bind, hide } = useCursorTooltip();

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isDetail = searchParams.get(DETAIL_PARAM.key) === DETAIL_PARAM.value;

  // 카드는 사라지는 애니메이션 동안 잠깐 더 남아 있어서, 그 사이 마우스가 움직이면
  // 툴팁이 다시 켜질 수 있음 → 상세 화면 여부를 ref로 들고 있다가 무시
  const isDetailRef = useRef(isDetail);
  useEffect(() => {
    isDetailRef.current = isDetail;
  }, [isDetail]);

  const areaRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<number | null>(null);
  const pointerType = useRef("mouse");

  const clearHoverTimer = () => {
    if (hoverTimer.current !== null) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  useEffect(() => clearHoverTimer, []);

  const cardTooltip = bind("click!");
  const handleCardPointerMove = (e: React.PointerEvent) => {
    if (isDetailRef.current) return;
    cardTooltip.onPointerMove(e);
  };

  const toHover = () => setHoverState("hover");
  const toIdle = () => setHoverState("idle");

  const openDetail = () => {
    clearHoverTimer();
    hide();
    toIdle(); // 돌아왔을 때 카드가 펼쳐진 채로 남지 않도록
    // 히스토리에 새 항목을 쌓아서 브라우저 뒤로 가기로 카드 화면에 돌아올 수 있게
    setSearchParams(
      { [DETAIL_PARAM.key]: DETAIL_PARAM.value },
      { state: { fromCard: true } },
    );
  };

  const closeDetail = () => {
    if (location.state?.fromCard) {
      // 카드에서 들어온 경우: 뒤로 가기와 같은 동작 (히스토리가 깔끔하게 유지됨)
      navigate(-1);
    } else {
      // 주소로 바로 들어온 경우: 뒤로 가면 사이트를 떠나므로 주소만 바꾸기
      setSearchParams({}, { replace: true });
    }
  };

  // 마우스: 카드에 잠깐 머물렀을 때만 펼치기
  const handleCardEnter = (e: React.PointerEvent) => {
    pointerType.current = e.pointerType;
    if (e.pointerType !== "mouse") return;
    clearHoverTimer();
    hoverTimer.current = window.setTimeout(toHover, HOVER_DELAY);
  };

  // 펼쳐진 영역 전체를 벗어났을 때만 닫기
  const handleAreaLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    clearHoverTimer();
    toIdle();
  };

  // 터치: 첫 탭은 펼치기, 두 번째 탭은 상세 열기 / 마우스·키보드: 바로 상세 열기
  const handleCardClick = () => {
    clearHoverTimer();
    if (pointerType.current !== "mouse" && hoverState === "idle") {
      toHover();
      return;
    }
    openDetail();
  };

  // 터치 기기에서 카드 바깥을 누르면 접기
  const handlePagePointerDown = (e: React.PointerEvent) => {
    pointerType.current = e.pointerType;
    if (areaRef.current?.contains(e.target as Node)) return;
    toIdle();
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* 두 화면을 같은 칸에 겹쳐 두어, 전환 중에 서로 밀어내지 않게 함 */}
      <div className="grid h-full w-full">
        <AnimatePresence initial={false}>
          {isDetail ? (
            <motion.div
              key="detail"
              className="col-start-1 row-start-1 h-full overflow-y-auto"
            >
              <ProfileDetail onBack={closeDetail} />
            </motion.div>
          ) : (
            <motion.div
              key="card"
              className="col-start-1 row-start-1 flex h-full w-full items-center justify-center overflow-hidden"
              onPointerDown={handlePagePointerDown}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div
                ref={areaRef}
                onPointerLeave={handleAreaLeave}
                className="relative flex w-[720px] shrink-0 scale-[0.55] items-center justify-center sm:scale-75 lg:scale-100"
              >
                <PopItems items={aboutItems} open={hoverState === "hover"} />

                <ProfileCard
                  active={hoverState === "hover"}
                  onPointerEnter={handleCardEnter}
                  onClick={handleCardClick}
                  onFocus={toHover}
                  onBlur={toIdle}
                  onPointerMove={handleCardPointerMove}
                  onPointerLeave={cardTooltip.onPointerLeave}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* scale이 걸린 영역 바깥에 두어야 마우스 위치에 정확히 붙음 */}
        {!isDetail && <CursorTooltip tooltip={tooltip} />}
      </div>
    </MotionConfig>
  );
};

export default About;
