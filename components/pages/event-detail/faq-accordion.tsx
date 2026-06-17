"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FaqItem = { q: string; a: string };

const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      className="space-y-3 my-8"
      role="list"
      aria-label="Frequently asked questions"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
          role="listitem"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-start gap-4 px-6 py-5 text-left group"
            aria-expanded={openIndex === i}
            aria-controls={`faq-${i}`}
          >
            <motion.div
              className="shrink-0 w-6 h-6 mt-0.5 rounded-full bg-[#FFF7ED] border border-[#FCD34D] flex items-center justify-center"
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 text-[#005CA3]"
                aria-hidden="true"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </motion.div>
            <span className="font-semibold text-[#0F172A] text-sm leading-relaxed group-hover:text-[#005CA3] transition-colors duration-200">
              {item.q}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                id={`faq-${i}`}
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pl-16 text-[#475569] text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FaqAccordion;
