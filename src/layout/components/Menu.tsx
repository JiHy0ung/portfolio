import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Menu = ({ isOpen, onClose }: MenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-20 inset-x-0 bottom-0 z-50
                    flex flex-col items-center justify-center gap-5
                    "
        >
          {menuItems.map((item, i) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={item.path}
                onClick={onClose}
                className="flex gap-2 group"
              >
                <span className="font-sans mt-5">[0{i + 1}]</span>
                <span className="relative inline-grid h-24 [perspective:1000px]">
                  <div className="absolute inset-0 -z-10 bg-[url('/images/highlight.png')] bg-contain bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1 [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(180deg)]">
                    <span
                      className="col-start-1 row-start-1 place-self-center [backface-visibility:hidden]
                                    font-sans text-8xl font-extralight whitespace-nowrap tracking-tight"
                    >
                      {item.label}
                    </span>
                    <span
                      className="col-start-1 row-start-1 place-self-center [backface-visibility:hidden] [transform:rotateX(180deg)]
                                    font-heumul text-9xl italic whitespace-nowrap tracking-tight"
                    >
                      {item.label}
                    </span>
                  </div>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
