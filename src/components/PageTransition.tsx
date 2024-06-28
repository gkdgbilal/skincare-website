"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathName}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 1, delay: 1, ease: "easeIn" },
        }}
        className='w-screen h-screen fixed z-30 bg-white top-0 pointer-events-none'
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
