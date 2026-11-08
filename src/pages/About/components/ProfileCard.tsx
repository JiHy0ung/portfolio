import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "../../../data/about";

/** 카드 영상 영역 → 상세 화면 사진으로 이어지는 레이아웃 애니메이션 id */
export const PROFILE_LAYOUT_ID = "about-card";

/** 평소 카드 기울기(deg) */
const CARD_TILT = -5;

/**
 * 상세 화면에서 돌아올 때, 사진이 카드 자리로 돌아온 뒤 틀과 이름이 나타나기까지의 지연(초).
 * 처음 페이지에 들어올 때는 About의 AnimatePresence initial={false} 덕분에 바로 보임
 */
const FRAME_DELAY = 0.3;

type ProfileCardProps = {
  /** true면 똑바로 서고 영상 재생 */
  active: boolean;
} & Pick<
  React.ComponentProps<typeof motion.button>,
  | "onClick"
  | "onFocus"
  | "onBlur"
  | "onPointerEnter"
  | "onPointerMove"
  | "onPointerLeave"
>;

const ProfileCard = ({ active, ...handlers }: ProfileCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  // active가 바뀔 때 영상 재생 / 정지 + 처음으로 되감기
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active && !reduceMotion) {
      video.play().catch(() => {
        // 빠르게 들어왔다 나가면 play()가 중단되며 에러가 나므로 무시
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [active, reduceMotion]);

  return (
    <motion.button
      type="button"
      // 평소에는 살짝 기울어 있다가 active면 똑바로 서기
      initial={false}
      animate={{
        rotate: active ? 0 : CARD_TILT,
        scale: active ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      aria-label={`${profile.name} 소개 자세히 보기`}
      className="relative z-10 w-64 cursor-pointer p-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-rose-700"
      style={{ borderRadius: 4 }}
      {...handlers}
    >
      {/* 흰 카드 틀은 따로 그려서, 상세 화면에서 돌아올 때
          사진이 먼저 자리를 잡은 뒤에 틀이 나타나게 함 */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-white shadow-xl"
        style={{ borderRadius: 4 }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: FRAME_DELAY, duration: 0.3, ease: "easeOut" }}
      />

      {/* 상세 화면의 사진과 같은 layoutId → 클릭하면 이 영역이 사진 자리로 커지며 이동 */}
      <motion.div
        layoutId={PROFILE_LAYOUT_ID}
        className="relative aspect-square w-full overflow-hidden bg-sky-200"
        style={{ borderRadius: 2 }}
      >
        {/* #t=0.001: iOS Safari에서 재생 전에도 첫 프레임이 보이도록 */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
          poster="/images/about/about_video-poster.webp"
          // 세로를 자를 때 얼굴과 흔드는 손이 모두 보이는 높이
          style={{ objectPosition: "50% 30%" }}
        >
          <source src={`${profile.video}#t=0.001`} type="video/mp4" />
        </video>
      </motion.div>
      <motion.div
        className="px-1 pt-3"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: FRAME_DELAY + 0.1, duration: 0.3 }}
      >
        <p className="text-lg font-semibold">{profile.name}</p>
        <p className="text-sm text-stone-500">{profile.role}</p>
      </motion.div>
    </motion.button>
  );
};

export default ProfileCard;
