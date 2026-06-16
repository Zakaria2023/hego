"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { allFaqItems, faqData, type FaqItem } from "./data";

const revealEase = [0.22, 1, 0.36, 1] as const;

/* ─── Animation helpers ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: revealEase },
  },
};

const Reveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      style={{ transitionDelay: `${delay}s` } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
};

/* ─── Single accordion item ─── */
const AccordionItem = ({
  item,
  index,
  isOpen,
  onToggle,
  highlight,
}: {
  item: FaqItem & { category?: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  highlight?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={i}
          className="bg-[#005CA3]/15 text-[#005CA3] rounded px-0.5 not-italic font-semibold"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: revealEase,
      }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden
        ${
          isOpen
            ? "border-[#005CA3]/40 shadow-[0_4px_24px_rgba(3,105,161,0.1)] bg-white"
            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
        }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 px-6 py-5 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        {/* Number */}
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full text-[11px] font-black flex items-center justify-center mt-0.5 transition-colors duration-200
            ${isOpen ? "bg-[#005CA3] text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"}`}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className={`flex-1 text-sm font-bold leading-snug transition-colors duration-200
            ${isOpen ? "text-[#005CA3]" : "text-[#0F172A] group-hover:text-[#005CA3]"}`}
        >
          {highlight ? highlightText(item.q, highlight) : item.q}
        </span>

        {/* Category badge (shown in search results) */}
        {item.category && (
          <span className="flex-shrink-0 hidden sm:inline-block px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold tracking-wide mr-2">
            {item.category}
          </span>
        )}

        {/* Chevron */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`flex-shrink-0 w-5 h-5 mt-0.5 transition-colors duration-200
            ${isOpen ? "text-[#005CA3]" : "text-slate-400 group-hover:text-slate-600"}`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: revealEase }}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: revealEase }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6 pl-[4.25rem]">
              {/* Top divider */}
              <div
                className="h-px bg-gradient-to-r from-[#005CA3]/20 to-transparent mb-4"
                aria-hidden="true"
              />
              <p className="text-[#475569] text-sm leading-relaxed">
                {highlight ? highlightText(item.a, highlight) : item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Stat card ─── */
const StatCard = ({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) => (
  <Reveal delay={delay}>
    <div className="text-center p-6 rounded-2xl bg-[#FFF7ED] border border-[#FCD34D]">
      <div className="text-3xl font-black text-[#0F172A] tracking-tight mb-1">
        {value}
      </div>
      <div className="text-[#64748B] text-xs font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  </Reveal>
);

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
const FaqClient = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  /* Toggle accordion */
  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  /* Filtered items based on search */
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    return allFaqItems.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  /* Category data to display */
  const displayedCategories = useMemo(() => {
    if (searchResults !== null) return [];
    if (activeCategory === "all") return faqData;
    return faqData.filter((cat) => cat.id === activeCategory);
  }, [activeCategory, searchResults]);

  const totalQuestions = faqData.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );

  return (
    <>
      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        aria-label="FAQ hero"
        className="relative min-h-[55vh] flex items-end overflow-hidden bg-white"
      >
        <div
          aria-hidden="true"
          className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
          }}
        />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-36"
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#005CA3] transition-colors duration-150"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="text-[#0F172A] font-medium" aria-current="page">
                FAQ
              </li>
            </ol>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: revealEase }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
                aria-hidden="true"
              />
              Knowledge Base
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-3xl">
              Frequently Asked <span className="steel-text">Questions</span>
            </h1>
            <p className="mt-5 text-[#64748B] text-lg max-w-xl leading-relaxed">
              Everything you need to know about our stainless steel products,
              ordering, delivery, and more. Can&apos;t find your answer?{" "}
              <Link
                href="/contact-us-1"
                className="text-[#005CA3] hover:text-[#0077BB] underline underline-offset-4 transition-colors duration-150"
              >
                Reach out to us directly.
              </Link>
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: revealEase }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
          >
            <StatCard
              value={String(totalQuestions)}
              label="Questions answered"
              delay={0}
            />
            <StatCard
              value={String(faqData.length)}
              label="Categories"
              delay={0.05}
            />
            <StatCard value="12+" label="Years of expertise" delay={0.1} />
            <StatCard value="10+" label="Countries served" delay={0.15} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="bg-[#F8FAFC] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* ── SEARCH BAR ── */}
          <Reveal>
            <div className="relative mb-10">
              <label htmlFor="faq-search" className="sr-only">
                Search frequently asked questions
              </label>
              <div
                className={`flex items-center gap-3 rounded-2xl border-2 bg-white px-5 py-4 transition-all duration-200
                  ${
                    searchFocused
                      ? "border-[#005CA3] shadow-[0_0_0_3px_rgba(3,105,161,0.1)]"
                      : searchQuery
                        ? "border-[#005CA3]/50"
                        : "border-slate-200 hover:border-slate-300"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-5 h-5 flex-shrink-0 transition-colors duration-200
                    ${searchFocused || searchQuery ? "text-[#005CA3]" : "text-slate-400"}`}
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  id="faq-search"
                  type="search"
                  placeholder="Search questions… e.g. grade 316L, delivery, surface finish"
                  className="flex-1 bg-transparent text-[#0F172A] text-sm placeholder:text-slate-400 outline-none"
                  value={searchQuery}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search FAQ"
                  autoComplete="off"
                />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => setSearchQuery("")}
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-150 cursor-pointer"
                      aria-label="Clear search"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3.5 h-3.5 text-slate-500"
                        aria-hidden="true"
                      >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* ── CATEGORY TABS ── */}
          <AnimatePresence>
            {!searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mb-10"
              >
                <div
                  className="flex flex-wrap gap-2"
                  role="tablist"
                  aria-label="FAQ categories"
                >
                  {/* All tab */}
                  <button
                    role="tab"
                    aria-selected={activeCategory === "all"}
                    onClick={() => setActiveCategory("all")}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer
                      ${
                        activeCategory === "all"
                          ? "bg-[#005CA3] text-white shadow-[0_4px_16px_rgba(3,105,161,0.3)]"
                          : "bg-white text-[#475569] border border-slate-200 hover:border-slate-300 hover:text-[#0F172A]"
                      }`}
                  >
                    All
                    <span
                      className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center
                        ${activeCategory === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}
                    >
                      {totalQuestions}
                    </span>
                  </button>

                  {faqData.map((cat) => (
                    <button
                      key={cat.id}
                      role="tab"
                      aria-selected={activeCategory === cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer
                        ${
                          activeCategory === cat.id
                            ? "bg-[#005CA3] text-white shadow-[0_4px_16px_rgba(3,105,161,0.25)]"
                            : "bg-white text-[#475569] border border-slate-200 hover:border-[#005CA3]/40 hover:text-[#005CA3]"
                        }`}
                    >
                      <span aria-hidden="true">{cat.icon}</span>
                      {cat.label}
                      <span
                        className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center
                          ${activeCategory === cat.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}
                      >
                        {cat.items.length}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── SEARCH RESULTS ── */}
          <AnimatePresence mode="wait">
            {searchResults !== null && (
              <motion.div
                key="search-results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-sm text-[#475569]">
                    {searchResults.length === 0
                      ? "No results found"
                      : `${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} for`}
                  </span>
                  {searchResults.length > 0 && (
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#005CA3]/10 text-[#005CA3] text-sm font-semibold">
                      &ldquo;{searchQuery}&rdquo;
                    </span>
                  )}
                </div>

                {searchResults.length === 0 ? (
                  <div className="text-center py-20">
                    <div
                      className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-7 h-7 text-slate-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#0F172A] font-bold text-lg mb-2">
                      No results for &ldquo;{searchQuery}&rdquo;
                    </h3>
                    <p className="text-[#64748B] text-sm max-w-xs mx-auto leading-relaxed mb-6">
                      Try a different keyword, or contact our team directly.
                    </p>
                    <Link
                      href="/contact-us-1"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#005CA3] text-white text-sm font-bold hover:bg-[#0077BB] transition-colors duration-200"
                    >
                      Ask our team
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {searchResults.map((item, i) => (
                      <AccordionItem
                        key={`search-${i}`}
                        item={item}
                        index={i}
                        isOpen={openItems.has(`search-${i}`)}
                        onToggle={() => toggleItem(`search-${i}`)}
                        highlight={searchQuery}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* ── CATEGORY ACCORDION PANELS ── */}
            {searchResults === null && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {displayedCategories.map((cat) => (
                  <section
                    key={cat.id}
                    className="mb-14"
                    aria-labelledby={`cat-${cat.id}`}
                  >
                    {/* Category header */}
                    <Reveal className="mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-xl bg-[#005CA3]/10 border border-[#005CA3]/20 flex items-center justify-center text-lg flex-shrink-0"
                          aria-hidden="true"
                        >
                          {cat.icon}
                        </div>
                        <div>
                          <h2
                            id={`cat-${cat.id}`}
                            className="text-lg font-extrabold text-[#0F172A] tracking-tight leading-tight"
                          >
                            {cat.label}
                          </h2>
                          <p className="text-[#64748B] text-xs mt-0.5">
                            {cat.description}
                          </p>
                        </div>
                        <div className="ml-auto flex-shrink-0 hidden sm:block">
                          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[11px] font-bold">
                            {cat.items.length} Q&amp;A
                          </span>
                        </div>
                      </div>
                      <div
                        className="mt-4 h-px bg-gradient-to-r from-[#005CA3]/30 via-slate-200 to-transparent"
                        aria-hidden="true"
                      />
                    </Reveal>

                    {/* Accordion items */}
                    <div className="space-y-3">
                      {cat.items.map((item, i) => {
                        const key = `${cat.id}-${i}`;
                        return (
                          <AccordionItem
                            key={key}
                            item={item}
                            index={i}
                            isOpen={openItems.has(key)}
                            onToggle={() => toggleItem(key)}
                          />
                        );
                      })}
                    </div>
                  </section>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <section
          aria-label="Still have questions"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0F9FF]"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(219,234,254,0.8) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase mb-5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                  aria-hidden="true"
                />
                Still have questions?
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
                Our team is here to help
              </h2>
              <p className="text-[#64748B] text-base max-w-xl mx-auto leading-relaxed mb-10">
                Can&apos;t find the answer you&apos;re looking for? Get in touch
                with our stainless steel specialists directly.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact-us-1"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(3,105,161,0.3)] hover:shadow-[0_8px_32px_rgba(3,105,161,0.4)] hover:-translate-y-0.5 group"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/46732488880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-[#E2E8F0] hover:border-[#25D366] text-[#334155] hover:text-[#16a34a] text-sm font-semibold transition-all duration-200"
                  aria-label="Contact SWEDINOX AB on WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-[#25D366]"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default FaqClient;
