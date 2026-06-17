"use client";

import { GlowCard } from "@/components/ui/spotlight-card";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { revealEase } from "@/components/shared/motion";

const stats = [
  { value: 11, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 500, suffix: "+", label: "Product Grades" },
  { value: 300, suffix: "", label: "Number of Clients" },
];

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => spring.on("change", (latest) => setDisplay(Math.round(latest))), [
    spring,
  ]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

const AboutStatsSection = () => (
  <section
    aria-label="Company statistics"
    className="relative overflow-hidden bg-[#F8FAFC] py-20"
  >
    <div
      aria-hidden="true"
      className="absolute left-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(219,234,254,0.55) 0%, transparent 70%)",
      }}
    />
    <div
      aria-hidden="true"
      className="absolute right-[-10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(186,230,253,0.4) 0%, transparent 70%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {stats.map(({ value, suffix, label }, index) => (
          <GlowCard
            key={label}
            customSize
            className="shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 36, scale: 0.92 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: revealEase,
                  },
                },
              }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative h-full cursor-default overflow-hidden rounded-3xl p-7 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 h-28 w-28 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(3,105,161,0.07), transparent 70%)",
                }}
              />
              <div className="mb-3 text-4xl font-extrabold leading-none tracking-tight steel-text sm:text-5xl xl:text-6xl">
                <Counter value={value} suffix={suffix} />
              </div>
              <div className="text-sm font-semibold leading-tight tracking-wide text-[#64748B]">
                {label}
              </div>
              <div
                aria-hidden="true"
                className="absolute right-0 bottom-0 left-0 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#005CA3] via-[#00AADD] to-[#005CA3] transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.div>
          </GlowCard>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutStatsSection;
