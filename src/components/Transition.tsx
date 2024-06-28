"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const animation = {
  initial: { top: "0%" },
  animate: { top: "-100%" },
  exit: { top: ["100%", "0%"] },
};

const Transition = () => {
  const pathName = usePathname();

  return (
    <>
      <AnimatePresence mode='wait'>
        <div key={pathName}>
          <div className='hidden xl:flex xl:h-screen xl:w-screen fixed top-0 left-0 right-0 pointer-events-none z-50'>
            <motion.div
              variants={animation}
              initial={animation.initial}
              animate='animate'
              exit='exit'
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              className='w-full h-full bg-[#e2cfbd] relative'
            />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
