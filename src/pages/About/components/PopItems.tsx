import { motion, type Variants } from "motion/react";
import type { AboutItem } from "../../../data/about";

const groupVariants: Variants = {
  closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.04 } },
};

const itemVariants: Variants = {
  closed: {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 0.4,
    opacity: 0,
    transition: { type: "spring", stiffness: 400, damping: 32 },
  },
  open: (item: AboutItem) => ({
    x: item.x,
    y: item.y,
    rotate: item.rotate,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  }),
};

type PopItemsProps = {
  items: AboutItem[];
  open: boolean;
};

/** 카드 뒤에서 튀어나오는 좋아하는 것·스택 아이템 */
const PopItems = ({ items, open }: PopItemsProps) => {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      variants={groupVariants}
      initial={false}
      animate={open ? "open" : "closed"}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          custom={item}
          variants={itemVariants}
          className={`absolute left-1/2 top-1/2 ${item.front ? "z-20" : "z-0"}`}
          style={{
            width: item.size,
            height: item.size,
            marginLeft: -item.size / 2,
            marginTop: -item.size / 2,
          }}
        >
          <img
            src={item.src}
            className="size-full object-contain"
            draggable={false}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PopItems;
