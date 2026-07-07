"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type ContactSuccessStateProps = {
  onReset: () => void;
  recipientEmail: string;
};

const ContactSuccessState = ({
  onReset,
  recipientEmail,
}: ContactSuccessStateProps) => (
  <motion.div
    key="success"
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col items-center justify-center px-4 py-16 text-center"
  >
    <div className="relative mb-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-200 bg-emerald-50">
        <Check className="h-9 w-9 text-emerald-500" />
      </div>
      <div
        className="absolute inset-0 rounded-full border-2 border-emerald-300 opacity-30 animate-ping"
        aria-hidden="true"
      />
    </div>

    <h3 className="mb-2 text-xl font-extrabold text-[#0F172A]">
      Message Sent
    </h3>
    <p className="mb-8 max-w-sm text-sm leading-relaxed text-[#475569]">
      Your message has been sent to {recipientEmail}. Our team will get back
      to you shortly.
    </p>

    <button
      onClick={onReset}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-[#005CA3] transition-all duration-200 hover:border-[#005CA3]"
    >
      Send another message
    </button>
  </motion.div>
);

export default ContactSuccessState;
