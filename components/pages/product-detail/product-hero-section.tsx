"use client";

import type { Product } from "@/app/products/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductHeroSectionProps = {
  product: Product;
};

const ProductHeroSection = ({ product }: ProductHeroSectionProps) => {
  const hasHeroImage = Boolean(product.image);
  const heroTextShadow = hasHeroImage
    ? "0 6px 20px rgba(255,255,255,0.34)"
    : undefined;
  const sectionClassName = hasHeroImage
    ? "relative flex min-h-screen overflow-hidden bg-[#F8FAFC]"
    : "relative flex min-h-screen overflow-hidden bg-[#000000]";
  const breadcrumbClassName = hasHeroImage
    ? "flex items-center gap-2 text-xs text-[#475569]"
    : "flex items-center gap-2 text-xs text-slate-300";
  const breadcrumbLinkClassName = hasHeroImage
    ? "transition-colors hover:text-[#005CA3]"
    : "transition-colors hover:text-white";
  const currentBreadcrumbClassName = hasHeroImage
    ? "font-medium text-[#0F172A]"
    : "font-medium text-white";
  const titleClassName = hasHeroImage
    ? "mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
    : "mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]";
  const descriptionClassName = hasHeroImage
    ? "mt-5 text-base leading-relaxed text-[#334155] sm:text-lg"
    : "mt-5 text-base leading-relaxed text-slate-300 sm:text-lg";
  const gradesLabelClassName = hasHeroImage
    ? "mb-3 text-xs font-bold uppercase tracking-widest text-[#475569]"
    : "mb-3 text-xs font-bold uppercase tracking-widest text-slate-400";
  const secondaryCtaClassName = hasHeroImage
    ? "inline-flex items-center gap-2 rounded-full border-2 border-[#E2E8F0] px-7 py-3.5 text-sm font-bold tracking-wide text-[#334155] transition-all duration-200 hover:border-[#005CA3] hover:text-[#005CA3]"
    : "inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:border-white hover:bg-white/8";
  const heroNoteClassName = hasHeroImage
    ? "mt-4 max-w-xl text-sm leading-relaxed text-[#475569]"
    : "mt-4 max-w-xl text-sm leading-relaxed text-slate-400";

  return (
    <section
      aria-label={`${product.name} product detail`}
      className={sectionClassName}
    >
      {hasHeroImage ? (
        <>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <Image
              src={product.image!}
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
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at top left, ${product.accent}40 0%, transparent 32%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08) 0%, transparent 24%)`,
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-white/10"
          />
        </>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: hasHeroImage
            ? "linear-gradient(180deg, rgba(15,23,42,0.12) 0%, transparent 18%, transparent 82%, rgba(15,23,42,0.14) 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 22%, transparent 78%, rgba(255,255,255,0.08) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute top-[-10%] left-[-5%] h-125 w-125 rounded-full pointer-events-none"
        style={{
          background: hasHeroImage
            ? "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)"
            : `radial-gradient(circle, ${product.accent}26 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex w-full items-center px-6 pt-28 pb-20 sm:px-10 lg:w-[56%] lg:pl-16 lg:pr-10 lg:pt-32 lg:pb-24 xl:pl-24 2xl:pl-32">
      <div className="w-full max-w-xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className={breadcrumbClassName}>
            <li>
              <Link href="/" className={breadcrumbLinkClassName}>
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/products"
                className={breadcrumbLinkClassName}
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className={currentBreadcrumbClassName} aria-current="page">
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
          <h1 className={titleClassName} style={{ textShadow: heroTextShadow }}>
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
          className={descriptionClassName}
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
          <p className={gradesLabelClassName}>
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
            className={secondaryCtaClassName}
          >
            {product.secondaryCtaLabel ?? "View All Products"}
          </Link>
        </motion.div>

        {product.heroNote ? (
          <motion.p
            className={heroNoteClassName}
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
};

export default ProductHeroSection;
