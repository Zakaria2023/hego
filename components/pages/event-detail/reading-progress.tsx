"use client";

import { motion, useScroll } from "framer-motion";

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #005CA3, #00AADD, #005CA3)",
      }}
      aria-hidden="true"
    />
  );
};

export default ReadingProgress;
