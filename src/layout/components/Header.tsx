import { X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Menu from "./Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 backdrop-blur-3xl"
          />
        )}
      </AnimatePresence>

      <div className="relative z-50 h-20 flex justify-between items-center px-6 py-2">
        <h1 className="font-kihim text-4xl">YJH</h1>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.25 }}
              >
                <X strokeWidth={1} size={32} />
              </motion.div>
            ) : (
              <motion.p
                key="menu"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.25 }}
                className="font-sans font-extralight"
              >
                MENU
              </motion.p>
            )}
          </AnimatePresence>
        </button>
      </div>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
