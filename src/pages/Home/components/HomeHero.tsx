import { motion } from "motion/react";
import HandUnderline from "./HandUnderline";

/** 왼쪽 글이 위에서부터 차례로 떠오르도록 */
const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const riseVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
} as const;

const LAST_UPDATED = new Date(__BUILD_DATE__).toLocaleDateString("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "Asia/Seoul",
});

/** 홈 왼쪽: 이름과 소개, 아래 footer */
const HomeHero = () => (
  <motion.section
    variants={heroVariants}
    initial="hidden"
    animate="show"
    className="relative flex flex-col justify-between"
  >
    <div>
      <motion.p
        variants={riseVariants}
        className="font-heumul inline-block -rotate-3 text-2xl text-stone-700 lg:text-3xl"
      >
        Welcome to my portfolio <span className="text-lg">✦</span>
      </motion.p>
      <motion.h1
        variants={riseVariants}
        className="font-fraunces mt-2 text-7xl leading-[0.86] tracking-tight sm:text-8xl xl:text-[8.5rem]"
      >
        Yoo
        <br />
        {/* 밑줄을 넣어도 마침표가 다음 줄로 넘어가지 않게 묶음 */}
        <span className="whitespace-nowrap">
          <HandUnderline delay={0.8}>Jihyoung</HandUnderline>
          <span className="text-rose-800">.</span>
        </span>
      </motion.h1>
      <motion.p
        variants={riseVariants}
        className="mt-10 break-keep text-base leading-relaxed text-stone-700"
      >
        필요한 걸 직접 만드는{" "}
        <strong className="font-semibold text-stone-900">
          프론트엔드 개발자
        </strong>
        예요.
        <br />
        보기 쉽고, 오래 머물고 싶은 화면을 고민해요.
      </motion.p>
    </div>

    <motion.p
      variants={riseVariants}
      className="mt-10 flex items-center gap-5 text-xs text-stone-400"
    >
      <a
        href="https://github.com/JiHy0ung"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="transition-colors hover:text-stone-800"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-4 fill-current"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      </a>
      <time dateTime={__BUILD_DATE__}>Last updated {LAST_UPDATED}</time>
    </motion.p>
  </motion.section>
);

export default HomeHero;
