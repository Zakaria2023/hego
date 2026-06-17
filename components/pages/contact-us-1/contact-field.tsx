"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

type ContactFieldProps = {
  error?: string;
  id: string;
  label: string;
  multiline?: boolean;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
  value: string;
};

const ContactField = ({
  error,
  id,
  label,
  multiline = false,
  onChange,
  required = false,
  type = "text",
  value,
}: ContactFieldProps) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const sharedClasses = `
    w-full resize-none rounded-xl border-2 bg-white px-4 pt-6 pb-3 text-sm text-[#0F172A] outline-none transition-all duration-200
    ${
      error
        ? "border-red-400 focus:border-red-500"
        : focused
          ? "border-[#005CA3] shadow-[0_0_0_3px_rgba(3,105,161,0.1)]"
          : "border-slate-200 hover:border-slate-300"
    }
  `;

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          required={required}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(event) => onChange(event.target.value)}
          className={sharedClasses}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={Boolean(error)}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(event) => onChange(event.target.value)}
          className={sharedClasses}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={Boolean(error)}
        />
      )}

      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none font-medium transition-all duration-200 ${
          active
            ? `top-2 text-[10px] uppercase tracking-widest ${
                error
                  ? "text-red-500"
                  : focused
                    ? "text-[#005CA3]"
                    : "text-slate-500"
              }`
            : `${multiline ? "top-5" : "top-1/2 -translate-y-1/2"} text-sm text-slate-500`
        }`}
      >
        {label}
        {required ? (
          <span className="ml-0.5 text-[#005CA3]" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      <AnimatePresence>
        {error ? (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 flex items-center gap-1 text-xs text-red-500"
          >
            <AlertCircle className="h-3.5 w-3.5" />
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ContactField;
