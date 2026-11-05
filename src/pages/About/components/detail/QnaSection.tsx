import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { profile } from "../../../../data/about";
import SectionTitle from "./SectionTitle";

const QnaSection = () => {
  // 첫 질문은 열어 둬서 "누르면 펼쳐진다"는 걸 바로 알 수 있게
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="py-16">
      <SectionTitle title="Q&A" note="자주 하는 생각" />

      <ul className="border-t border-stone-300/70">
        {profile.qna.map((item, i) => {
          const isOpen = openIndex === i;
          const panelId = `${baseId}-answer-${i}`;

          return (
            <motion.li
              key={item.q}
              className="border-b border-stone-300/70"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full cursor-pointer items-start gap-4 py-5 text-left"
              >
                <span className="pt-0.5 text-sm font-semibold text-rose-700 tabular-nums">
                  Q{i + 1}.
                </span>
                <span className="flex-1 break-keep text-lg font-medium transition-colors group-hover:text-rose-800">
                  {item.q}
                </span>
                <Plus
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className={`mt-1 shrink-0 text-stone-400 transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-rose-700" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="break-keep pb-6 pl-10 pr-9 leading-relaxed text-stone-600">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default QnaSection;
