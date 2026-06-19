"use client";

import { type FaqItem } from "@/app/faq/data";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

const revealEase = [0.22, 1, 0.36, 1] as const;

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

type Props = {
  item: FaqItem & { category?: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  highlight?: string;
};

const FaqAccordionItem = ({
  item,
  index,
  isOpen,
  onToggle,
  highlight,
}: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: revealEase }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
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
        <span
          className={`shrink-0 w-7 h-7 rounded-full text-[11px] font-black flex items-center justify-center mt-0.5 transition-colors duration-200 ${
            isOpen
              ? "bg-[#005CA3] text-white"
              : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
          }`}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 text-sm font-bold leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-[#005CA3]"
              : "text-[#0F172A] group-hover:text-[#005CA3]"
          }`}
        >
          {highlight ? highlightText(item.q, highlight) : item.q}
        </span>

        {item.category && (
          <span className="shrink-0 hidden sm:inline-block px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-semibold tracking-wide mr-2">
            {item.category}
          </span>
        )}

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`shrink-0 w-5 h-5 mt-0.5 transition-colors duration-200 ${
            isOpen
              ? "text-[#005CA3]"
              : "text-slate-400 group-hover:text-slate-600"
          }`}
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
            <div className="pb-6 px-6 pl-17">
              <div
                className="h-px bg-linear-to-r from-[#005CA3]/20 to-transparent mb-4"
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

export default FaqAccordionItem;
