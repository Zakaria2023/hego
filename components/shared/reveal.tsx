"use client";

import { motion, useInView, type UseInViewOptions } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeUp } from "./motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: UseInViewOptions["margin"];
};

const Reveal = ({
  children,
  className = "",
  delay = 0,
  margin = "-80px",
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
