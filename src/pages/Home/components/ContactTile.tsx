import { motion } from "motion/react";
import Tile, { TileArrow } from "./Tile";

/** Contact 칸 말풍선 — 차례로 하나씩 올라옴 */
const CHAT = [
  { text: "안녕하세요! 👋", mine: false },
  { text: "함께 이야기 나눠요", mine: true },
];

const ContactTile = () => (
  <Tile
    to="/contact"
    className="rounded-br-[56px] bg-stone-300 lg:rounded-br-[96px]"
  >
    <span>
      <span className="font-fraunces block text-[1.75rem] sm:text-4xl">
        Contact
      </span>
      <span className="mt-1 block text-[13px] text-stone-600">
        Let&apos;s talk
      </span>
    </span>
    <TileArrow />
    {/* 말풍선 대화 — 페이지가 열리면 하나씩 올라오고, 마지막은 "입력 중" 점 */}
    <span className="absolute right-20 bottom-6 left-6 hidden flex-col gap-1.5 text-[13px] sm:flex">
      {CHAT.map((msg, i) => (
        <motion.span
          key={msg.text}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.9 + i * 0.5,
            type: "spring",
            stiffness: 400,
            damping: 26,
          }}
          className={`w-fit max-w-full px-3 py-1.5 ${
            msg.mine
              ? "self-end rounded-2xl rounded-br-[4px] bg-rose-700 text-white"
              : "rounded-2xl rounded-bl-[4px] bg-stone-50 text-stone-900"
          }`}
        >
          {msg.text}
        </motion.span>
      ))}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 + CHAT.length * 0.5 }}
        className="flex w-fit gap-1 rounded-2xl bg-stone-50 px-3 py-2.5"
      >
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="size-1.5 animate-typing rounded-full bg-stone-400 motion-reduce:animate-none"
            style={{ animationDelay: `${dot * 0.15}s` }}
          />
        ))}
      </motion.span>
    </span>
  </Tile>
);

export default ContactTile;
