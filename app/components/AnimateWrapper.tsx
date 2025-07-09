"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateWrapperProps {
  children: ReactNode;
  delay?: number;
}

const AnimateWrapper = ({ children, delay = 0 }: AnimateWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;
