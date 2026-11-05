import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  stackIconSrc,
  stacks,
  stackTabs,
  type StackTabKey,
} from "../../../../data/stacks";
import SectionTitle from "./SectionTitle";

/**
 * 기술 스택: 분류 탭 + 아이콘.
 * - 스크롤해서 보이면 아이콘이 차례로 떠오름
 * - 탭을 고르면 해당 분류만 또렷하게 남고 나머지는 흐리게 처리됨
 */
const StackSection = () => {
  const [activeTab, setActiveTab] = useState<StackTabKey>("all");

  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.3 });

  return (
    <section className="py-16">
      <SectionTitle title="Stack" note="만지작거려 본 것들" />

      {/* 분류 탭 — 고른 탭 앞에만 작은 로즈색 점 */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {stackTabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              aria-pressed={isActive}
              className={`flex cursor-pointer items-center gap-1.5 text-sm transition-colors ${
                isActive
                  ? "font-semibold text-stone-900"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              {/* 점 자리는 항상 비워 둬서, 탭을 바꿔도 글자가 좌우로 밀리지 않게 */}
              <span className="relative size-1.5" aria-hidden="true">
                {isActive && (
                  <motion.span
                    layoutId="stack-tab-dot"
                    className="absolute inset-0 rounded-full bg-rose-700"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 아이콘 — 아래에 이름이 나타날 자리를 gap-y로 확보 */}
      <ul
        ref={listRef}
        className="grid grid-cols-[repeat(auto-fill,5rem)] justify-center gap-x-3 gap-y-8"
      >
        {stacks.map((stack, i) => {
          const isDimmed = activeTab !== "all" && stack.category !== activeTab;

          return (
            <motion.li
              key={stack.name}
              // 키보드로도 이름을 볼 수 있도록 포커스 가능하게
              tabIndex={0}
              aria-label={stack.name}
              className="group relative flex h-12 w-20 cursor-pointer items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-rose-700"
              // 처음 보일 때만 앞에서부터 차례로 톡톡 떠오름
              initial={{ opacity: 0, y: 16, scale: 0.6 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: i * 0.03,
                      },
                    }
                  : undefined
              }
              // 스티커를 집어 드는 느낌 — 홀짝으로 기우는 방향을 다르게
              whileHover={{ y: -4, rotate: i % 2 ? 5 : -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* 흐림 처리는 이미지에만 — li의 opacity는 등장 애니메이션이 쓰고 있어서 */}
              <img
                src={stackIconSrc(stack)}
                alt=""
                loading="lazy"
                draggable={false}
                className={`size-12 object-contain transition-[opacity,filter] duration-300 ${
                  isDimmed ? "opacity-25 grayscale" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-full mt-1.5 whitespace-nowrap text-[11px] text-stone-500 opacity-0 transition-all duration-200 -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
              >
                {stack.name}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default StackSection;
