"use client";

import { allFaqItems, faqData } from "@/app/faq/data";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import FaqAccordionItem from "./faq-accordion-item";

const revealEase = [0.22, 1, 0.36, 1] as const;

const CategoryHeader = ({ cat }: { cat: (typeof faqData)[number] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: revealEase }}
      className="mb-6"
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-xl bg-[#005CA3]/10 border border-[#005CA3]/20 flex items-center justify-center text-lg shrink-0"
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
          <p className="text-[#64748B] text-xs mt-0.5">{cat.description}</p>
        </div>
        <div className="ml-auto shrink-0 hidden sm:block">
          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
            {cat.items.length} Q&amp;A
          </span>
        </div>
      </div>
      <div
        className="mt-4 h-px bg-linear-to-r from-[#005CA3]/30 via-slate-200 to-transparent"
        aria-hidden="true"
      />
    </motion.div>
  );
};

const FaqBody = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const totalQuestions = faqData.reduce((acc, cat) => acc + cat.items.length, 0);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    return allFaqItems.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const displayedCategories = useMemo(() => {
    if (searchResults !== null) return [];
    if (activeCategory === "all") return faqData;
    return faqData.filter((cat) => cat.id === activeCategory);
  }, [activeCategory, searchResults]);

  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search bar */}
        <div className="relative mb-10">
          <label htmlFor="faq-search" className="sr-only">
            Search frequently asked questions
          </label>
          <div
            className={`flex items-center gap-3 rounded-2xl border-2 bg-white px-5 py-4 transition-all duration-200 ${
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
              className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
                searchFocused || searchQuery ? "text-[#005CA3]" : "text-slate-400"
              }`}
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
                  className="shrink-0 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-150 cursor-pointer"
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

        {/* Category tabs */}
        <AnimatePresence>
          {!searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mb-10"
            >
              <div
                className="flex flex-wrap gap-2"
                role="tablist"
                aria-label="FAQ categories"
              >
                <button
                  role="tab"
                  aria-selected={activeCategory === "all"}
                  onClick={() => setActiveCategory("all")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === "all"
                      ? "bg-[#005CA3] text-white shadow-[0_4px_16px_rgba(3,105,161,0.3)]"
                      : "bg-white text-[#475569] border border-slate-200 hover:border-slate-300 hover:text-[#0F172A]"
                  }`}
                >
                  All
                  <span
                    className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center ${
                      activeCategory === "all"
                        ? "bg-white text-[#005CA3]"
                        : "bg-slate-100 text-slate-700"
                    }`}
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
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-[#005CA3] text-white shadow-[0_4px_16px_rgba(3,105,161,0.25)]"
                        : "bg-white text-[#475569] border border-slate-200 hover:border-[#005CA3]/40 hover:text-[#005CA3]"
                    }`}
                  >
                    <span aria-hidden="true">{cat.icon}</span>
                    {cat.label}
                    <span
                      className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center ${
                        activeCategory === cat.id
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {cat.items.length}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence mode="wait">
          {/* Search results */}
          {searchResults !== null && (
            <motion.div
              key="search-results"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
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
                    <FaqAccordionItem
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

          {/* Category panels */}
          {searchResults === null && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {displayedCategories.map((cat) => (
                <section
                  key={cat.id}
                  className="mb-14"
                  aria-labelledby={`cat-${cat.id}`}
                >
                  <CategoryHeader cat={cat} />
                  <div className="space-y-3">
                    {cat.items.map((item, i) => {
                      const key = `${cat.id}-${i}`;
                      return (
                        <FaqAccordionItem
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
    </main>
  );
};

export default FaqBody;
