"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/* ─── Top loading progress bar ─── */
const ProgressBar = ({ active }: { active: boolean }) => {
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (active) {
      progress.set(0);
      // Fast-fill to ~70% then hold
      const t1 = setTimeout(() => progress.set(0.72), 80);
      // Creep to 88%
      const t2 = setTimeout(() => progress.set(0.88), 400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      // Complete and fade
      progress.set(1);
    }
  }, [active, progress]);

  return (
    <AnimatePresence>
      {(active || progress.get() > 0) && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.1 } }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#0369A1] via-[#38BDF8] to-[#0369A1]"
            style={{ width }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Glow tip */}
          <motion.div
            className="absolute right-0 top-0 h-[2px] w-24 bg-gradient-to-r from-transparent to-[#38BDF8] blur-sm"
            style={{ opacity: active ? 1 : 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─── Steel sweep curtain ─── */
const Curtain = ({ visible }: { visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        key="curtain"
        className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        {/* Main panel */}
        <motion.div
          className="absolute inset-0 bg-[#0F172A]"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          exit={{ clipPath: "inset(0 0 0 100%)" }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        />
        {/* Accent stripe */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#0369A1]/30 via-[#38BDF8]/20 to-transparent"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          exit={{ clipPath: "inset(0 0 0 100%)" }}
          transition={{ duration: 0.45, delay: 0.03, ease: [0.76, 0, 0.24, 1] }}
        />
        {/* Wordmark shown during transition */}
        <motion.span
          className="relative z-10 text-[#38BDF8] text-xs font-black tracking-[0.4em] uppercase select-none"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, delay: 0.15 }}
        >
          SWEDINOX
        </motion.span>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─── Main transition wrapper ─── */
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [curtainVisible, setCurtainVisible] = useState(false);
  const [progressActive, setProgressActive] = useState(false);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    // Trigger curtain
    setCurtainVisible(true);
    setProgressActive(true);

    // Hide curtain after it's covered and exit animation plays
    const hide = setTimeout(() => {
      setCurtainVisible(false);
      setProgressActive(false);
    }, 600);

    return () => clearTimeout(hide);
  }, [pathname]);

  return (
    <>
      <ProgressBar active={progressActive} />
      <Curtain visible={curtainVisible} />

      {/* Page content — enter only, no exit (prevents white flash gap) */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
