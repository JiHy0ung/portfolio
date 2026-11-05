import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

/** 페이지 마지막: Contact로 이어지는 큰 링크 */
const ConnectSection = () => (
  <motion.section
    className="py-20"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <Link
      to="/contact"
      className="group flex items-end justify-between gap-6 border-y border-stone-300/70 py-10"
    >
      <div>
        <p className="font-heumul text-xl text-stone-600">
          <span
            aria-hidden="true"
            className="mr-1.5 inline-block text-base text-rose-700"
          >
            ✦
          </span>
          조금 더 궁금하다면,
        </p>
        <p className="font-fraunces mt-2 text-6xl leading-none transition-colors group-hover:text-rose-800 sm:text-8xl">
          Let&apos;s talk
        </p>
        <p className="mt-3 text-sm text-stone-500 ita">
          언제든 편하게 연락 주세요.
        </p>
      </div>
      <ArrowUpRight
        size={56}
        strokeWidth={1}
        aria-hidden="true"
        className="shrink-0 text-rose-800 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </Link>
  </motion.section>
);

export default ConnectSection;
