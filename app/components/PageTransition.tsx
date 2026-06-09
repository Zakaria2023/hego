"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/* ─── Top progress bar ─── */
const ProgressBar = ({ active }: { active: boolean }) => {
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (active) {
      progress.set(0);
      const t1 = setTimeout(() => progress.set(0.72), 80);
      const t2 = setTimeout(() => progress.set(0.88), 400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      progress.set(1);
    }
  }, [active, progress]);

  return (
    <AnimatePresence>
      {(active || progress.get() > 0) && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[9999] h-0.75 pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.1 } }}
        >
          <motion.div
            className="h-full"
            style={{
              width,
              background: "linear-gradient(90deg, #F5A623, #00AADD, #005CA3)",
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          />
          {/* Glowing tip */}
          <motion.div
            className="absolute right-0 top-0 h-0.75 w-20 blur-sm"
            style={{
              background: "linear-gradient(90deg, transparent, #F5A623)",
              opacity: active ? 1 : 0,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─── Page transition curtain ─── */
const Curtain = ({ visible }: { visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        key="curtain"
        className="fixed inset-0 z-[9998] pointer-events-none flex flex-col items-center justify-center overflow-hidden bg-white"
        aria-hidden="true"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        exit={{ clipPath: "inset(0 0 0 100%)" }}
        transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] as const }}
      >
        {/* Brand accent line at the top */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, #F5A623 0%, #00AADD 50%, #005CA3 100%)",
          }}
        />

        {/* Subtle tinted background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,170,221,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.3, delay: 0.14, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative"
        >
          <Image
            src="/logo.png"
            alt="SWEDINOX AB"
            width={220}
            height={55}
            priority
            quality={100}
            className="h-16 w-auto object-contain"
          />
        </motion.div>

        {/* Animated progress bar under logo */}
        <motion.div
          className="mt-7 w-44 h-1 rounded-full bg-slate-100 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #F5A623, #00AADD, #005CA3)",
            }}
            initial={{ x: "-110%" }}
            animate={{ x: "110%" }}
            transition={{
              duration: 0.55,
              ease: "easeInOut",
              delay: 0.22,
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-[#94A3B8] text-[10px] font-semibold tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Keeping your business stainless
        </motion.p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, #F5A623 30%, #00AADD 70%, transparent)",
          }}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─── Main wrapper ─── */
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [curtainVisible, setCurtainVisible] = useState(false);
  const [progressActive, setProgressActive] = useState(false);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    setCurtainVisible(true);
    setProgressActive(true);

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

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
