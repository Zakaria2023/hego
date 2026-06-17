"use client";

import { revealEase } from "@/components/shared/motion";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutHeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={heroRef}
      aria-label="About SWEDINOX AB"
      className="relative flex min-h-[52vh] items-end overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: 0.18 }}
      >
        <ShaderAnimation />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-5%] h-[600px] w-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[-10%] h-[400px] w-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(186,230,253,0.3) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ y: heroY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-36 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: revealEase }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#005CA3]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#F5A623] animate-pulse"
              aria-hidden="true"
            />
            Family-Owned Since 1999
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            Built on <span className="steel-text">Trust</span>,
            <br />
            Driven by{" "}
            <span className="relative inline-block text-[#0F172A]">
              Excellence
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-1 h-1 w-full rounded-full bg-gradient-to-r from-[#005CA3] to-[#00AADD]"
              />
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#64748B]">
            SWEDINOX AB is the destination for semi-manufactured stainless
            steel products and a trusted partner for industrial clients across
            the globe.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;
