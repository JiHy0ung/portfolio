import { motion } from "motion/react";

type SectionTitleProps = {
  /** 크게 쓰는 영어 제목 (Projects 페이지 제목과 같은 서체) */
  title: string;
  /** 제목 옆에 손글씨로 붙는 한마디 */
  note: string;
};

/**
 * 상세 페이지 각 구역의 제목.
 * Home의 "Welcome to my" 손글씨와 Projects 제목 서체를 섞어,
 * 메모를 붙여 둔 것처럼 보이게 함
 */
const SectionTitle = ({ title, note }: SectionTitleProps) => (
  <motion.header
    className="mb-10 flex flex-wrap items-end gap-x-4 gap-y-1"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="font-fraunces text-6xl leading-none sm:text-7xl">{title}</h2>
    <p className="flex items-center font-heumul mb-1 text-2xl text-stone-600 sm:text-2xl">
      {note}
      <span
        aria-hidden="true"
        className="ml-1.5 inline-block text-base text-rose-700"
      >
        ✦
      </span>
    </p>
  </motion.header>
);

export default SectionTitle;
