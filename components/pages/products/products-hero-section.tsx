"use client";

import { ShaderAnimation } from "@/components/ui/shader-lines";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { revealEase } from "@/components/shared/motion";

const ProductsHeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  return (
    <section
      ref={heroRef}
      aria-label="Products catalog hero"
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
        className="absolute top-[-15%] right-[-5%] h-[600px] w-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ y: heroY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-36 pb-16 sm:px-6 lg:px-8"
      >
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <li>
              <Link
                href="/"
                className="cursor-pointer transition-colors duration-150 hover:text-[#005CA3]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3" />
            </li>
            <li className="font-medium text-[#0F172A]" aria-current="page">
              Products
            </li>
          </ol>
        </nav>

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
            6 Product Categories
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            Our <span className="steel-text">Stainless Steel</span>
            <br />
            Product Catalog
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#64748B]">
            Semi-manufactured stainless steel in every form your operation
            requires - prime, ex-prime and 2nd choice quality, hot and cold
            rolled, globally delivered.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductsHeroSection;
