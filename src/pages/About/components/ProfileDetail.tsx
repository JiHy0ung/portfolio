import { motion, type Variants } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { profile } from "../../../data/about";
import { useEscapeKey } from "../../../hooks/useEscapeKey";
import { PROFILE_LAYOUT_ID } from "./ProfileCard";
import QnaSection from "./detail/QnaSection";
import StackSection from "./detail/StackSection";
import ConnectSection from "./detail/ConnectSection";

// 카드 영상이 사진 자리로 옮겨 가는 동안 글자는 기다렸다가 나타나기
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

type ProfileDetailProps = {
  onBack: () => void;
};

/** 카드를 클릭하면 넘어가는 상세 화면 (About 안의 페이지) */
const ProfileDetail = ({ onBack }: ProfileDetailProps) => {
  useEscapeKey(true, onBack);

  return (
    <article
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-5xl px-6 pt-4 mt-12"
    >
      <motion.button
        type="button"
        onClick={onBack}
        // 화면이 바뀌었을 때 키보드 사용자의 포커스를 새 화면 시작점으로
        autoFocus
        variants={fadeIn}
        initial="hidden"
        animate="show"
        exit="exit"
        className="mb-8 flex cursor-pointer items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-900"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back
      </motion.button>

      {/* 첫 화면: 사진 + 소개 */}
      <div className="grid gap-6 pb-8 sm:grid-cols-[240px_1fr] sm:gap-12">
        {/* 카드의 영상 영역과 같은 layoutId → 영상이 이 자리로 커지며 이동 */}
        <motion.div
          layoutId={PROFILE_LAYOUT_ID}
          className="mx-auto aspect-[3/4] w-full max-w-60 overflow-hidden bg-stone-200 sm:max-w-none"
          style={{ borderRadius: 16 }}
        >
          <img
            src={profile.photo}
            alt={`${profile.name} 사진`}
            className="size-full object-cover"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 sm:pt-2"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div>
            <h2 id="about-title" className="text-3xl font-semibold">
              {profile.name}
            </h2>
            <p className="text-stone-500">{profile.role}</p>
            <p className="mt-4 break-keep leading-relaxed">{profile.intro}</p>
          </div>

          <ul className="flex flex-col gap-4">
            {profile.values.map((value) => (
              <li key={value.title}>
                <p className="font-semibold">{value.title}</p>
                <p className="break-keep text-sm text-stone-500">
                  {value.desc}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div variants={fadeIn} initial="hidden" animate="show" exit="exit">
        <StackSection />
        <QnaSection />
        <ConnectSection />
      </motion.div>
    </article>
  );
};

export default ProfileDetail;
