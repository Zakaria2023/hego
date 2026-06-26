"use client";

import type { Product } from "@/app/products/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductHeroSectionProps = {
  product: Product;
};

const heroTextShadow = "0 6px 20px rgba(255,255,255,0.34)";

const ProductHeroSection = ({ product }: ProductHeroSectionProps) => (
  <section
    aria-label={`${product.name} product detail`}
    className="relative flex min-h-screen overflow-hidden bg-[#F8FAFC]"
  >
    {product.image && (
      <>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src={product.image}
            alt={`${product.name} - SWEDINOX AB`}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(248,250,252,0.98) 0%, rgba(248,250,252,0.95) 22%, rgba(248,250,252,0.82) 34%, rgba(248,250,252,0.54) 45%, rgba(248,250,252,0.16) 58%, rgba(248,250,252,0) 72%)",
          }}
        />
      </>
    )}

    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.12) 0%, transparent 18%, transparent 82%, rgba(15,23,42,0.14) 100%)",
      }}
    />

    <div
      aria-hidden="true"
      className="absolute top-[-10%] left-[-5%] h-125 w-125 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
      }}
    />

    <div className="relative z-10 flex w-full items-center px-6 pt-28 pb-20 sm:px-10 lg:w-[56%] lg:pl-16 lg:pr-10 lg:pt-32 lg:pb-24 xl:pl-24 2xl:pl-32">
      <div className="w-full max-w-xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-[#475569]">
            <li>
              <Link href="/" className="transition-colors hover:text-[#005CA3]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/products"
                className="transition-colors hover:text-[#005CA3]"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-[#0F172A]" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{
              backgroundColor: `${product.accent}15`,
              color: product.accent,
              border: `1px solid ${product.accent}30`,
            }}
          >
            Stainless Steel
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <h1
            className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
            style={{ textShadow: heroTextShadow }}
          >
            {product.name}
          </h1>
          <p
            className="mt-2 text-lg font-semibold"
            style={{ color: product.accent, textShadow: heroTextShadow }}
          >
            {product.tagline}
          </p>
        </motion.div>

        <motion.p
          className="mt-5 text-base leading-relaxed text-[#334155] sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          style={{ textShadow: heroTextShadow }}
        >
          {product.longDescription}
        </motion.p>

        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#475569]">
            Available Grades
          </p>
          <div className="flex flex-wrap gap-2">
            {product.grades.map((grade) => (
              <span
                key={grade}
                className="rounded-full border px-3 py-1.5 text-xs font-bold"
                style={{
                  borderColor: `${product.accent}40`,
                  color: product.accent,
                  backgroundColor: `${product.accent}08`,
                }}
              >
                {grade}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
        >
          <Link
            href="/contact-us-1"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: product.accent }}
            aria-label={`Request a quote for ${product.name}`}
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={product.secondaryCtaHref ?? "/products"}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#E2E8F0] px-7 py-3.5 text-sm font-bold tracking-wide text-[#334155] transition-all duration-200 hover:border-[#005CA3] hover:text-[#005CA3]"
          >
            {product.secondaryCtaLabel ?? "View All Products"}
          </Link>
        </motion.div>

        {product.heroNote ? (
          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-[#475569]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            style={{ textShadow: heroTextShadow }}
          >
            {product.heroNote}
          </motion.p>
        ) : null}
      </div>
    </div>
  </section>
);

export default ProductHeroSection;
