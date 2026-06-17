"use client";

import { businessHours, weekdayNames } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ContactHoursDropdown = () => {
  const [open, setOpen] = useState(false);
  const today = weekdayNames[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];
  const todayHours = businessHours.find((item) => item.day === today);

  return (
    <div>
      <button
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2 text-sm font-semibold text-[#005CA3] transition-colors duration-150 hover:text-[#0077BB]"
        aria-expanded={open}
        aria-label="Toggle business hours"
      >
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse"
          aria-hidden="true"
        />
        Open today {todayHours?.label ?? "09:00 - 17:00"}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="hours"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-1.5 border-l-2 border-[#005CA3]/20 pl-4">
              {businessHours.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between gap-8 text-xs ${
                    item.day === today
                      ? "font-bold text-[#005CA3]"
                      : "text-[#64748B]"
                  }`}
                >
                  <span>{item.day}</span>
                  <span
                    className={item.label === "Closed" ? "text-slate-400" : ""}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ContactHoursDropdown;
