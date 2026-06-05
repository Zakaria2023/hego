"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
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
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Floating label input ─── */
const FloatingField = ({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  error,
  multiline = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  multiline?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const sharedClasses = `
    peer w-full pt-6 pb-3 px-4 rounded-xl bg-white border-2 text-[#0F172A] text-sm outline-none
    transition-all duration-200 resize-none
    ${error ? "border-red-400 focus:border-red-500" : focused ? "border-[#0369A1] shadow-[0_0_0_3px_rgba(3,105,161,0.1)]" : "border-slate-200 hover:border-slate-300"}
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
          onChange={(e) => onChange(e.target.value)}
          className={sharedClasses}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
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
          onChange={(e) => onChange(e.target.value)}
          className={sharedClasses}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      )}

      {/* Floating label */}
      <label
        htmlFor={id}
        className={`
          absolute left-4 pointer-events-none font-medium transition-all duration-200
          ${
            active
              ? "top-2 text-[10px] tracking-widest uppercase " +
                (error
                  ? "text-red-500"
                  : focused
                    ? "text-[#0369A1]"
                    : "text-slate-400")
              : "top-1/2 " +
                (multiline ? "top-5" : "-translate-y-1/2") +
                " text-sm text-slate-400"
          }
        `}
      >
        {label}
        {required && (
          <span className="text-[#0369A1] ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Contact info row ─── */
const InfoRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-4 group">
    <div
      className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0369A1]/10 border border-[#0369A1]/20 flex items-center justify-center
      group-hover:bg-[#0369A1]/20 group-hover:border-[#0369A1]/40 transition-all duration-200"
    >
      {icon}
    </div>
    <div>
      <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5">
        {label}
      </span>
      <div className="text-[#0F172A] text-sm font-medium leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

/* ─── Business hours ─── */
const hours: { day: string; open: string }[] = [
  { day: "Monday", open: "09:00 – 17:00" },
  { day: "Tuesday", open: "09:00 – 17:00" },
  { day: "Wednesday", open: "09:00 – 17:00" },
  { day: "Thursday", open: "09:00 – 17:00" },
  { day: "Friday", open: "09:00 – 17:00" },
  { day: "Saturday", open: "Closed" },
  { day: "Sunday", open: "Closed" },
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const HoursDropdown = () => {
  const [open, setOpen] = useState(false);
  const today = dayNames[new Date().getDay()];
  const todayHours = hours.find((h) => h.day === today);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 text-sm font-semibold text-[#0369A1] hover:text-[#0284C7] transition-colors duration-150 cursor-pointer"
        aria-expanded={open}
        aria-label="Toggle business hours"
      >
        <span
          className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"
          aria-hidden="true"
        />
        Open today {todayHours?.open ?? "09:00 – 17:00"}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="hours"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 pl-4 border-l-2 border-[#0369A1]/20 space-y-1.5">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className={`flex items-center justify-between text-xs gap-8
                    ${h.day === today ? "font-bold text-[#0369A1]" : "text-[#64748B]"}
                  `}
                >
                  <span>{h.day}</span>
                  <span className={h.open === "Closed" ? "text-slate-400" : ""}>
                    {h.open}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Success overlay ─── */
const SuccessState = ({ onReset }: { onReset: () => void }) => (
  <motion.div
    key="success"
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col items-center justify-center text-center py-16 px-4"
  >
    {/* Animated checkmark */}
    <div className="relative mb-6">
      <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-9 h-9 text-emerald-500"
          aria-hidden="true"
        >
          <motion.path
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
      {/* Pulse ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-emerald-300 animate-ping opacity-30"
        aria-hidden="true"
      />
    </div>

    <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">
      Message Sent!
    </h3>
    <p className="text-[#475569] text-sm max-w-xs leading-relaxed mb-8">
      Thank you for reaching out. Our team will get back to you within one
      business day.
    </p>

    <button
      onClick={onReset}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-[#0369A1] text-sm font-semibold hover:border-[#0369A1] transition-all duration-200 cursor-pointer"
    >
      Send another message
    </button>
  </motion.div>
);

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
const ContactClient = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  /* Form state */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Enter a valid email address";
    if (!message.trim()) e.message = "Please write your question or comment";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      // Shake the form
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact SWEDINOX AB",
            url: "https://swedinox.se/contact-us-1",
            description: "Contact SWEDINOX AB for stainless steel inquiries.",
            mainEntity: {
              "@type": "Organization",
              name: "SWEDINOX AB",
              url: "https://swedinox.se",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pilevallen 77",
                addressLocality: "Arlöv",
                postalCode: "232 35",
                addressCountry: "SE",
              },
              email: ["sales@swedinox.se", "sales@swedinox.eu"],
              telephone: ["+46732488880", "+46406860186"],
              openingHours: "Mo-Fr 09:00-17:00",
            },
          }),
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        aria-label="Contact us hero"
        className="relative min-h-[50vh] flex items-end overflow-hidden bg-white"
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
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36"
        >
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0369A1] transition-colors duration-150"
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
                Contact Us
              </li>
            </ol>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold tracking-widest uppercase mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                aria-hidden="true"
              />
              We&apos;re Here to Help
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-2xl">
              Get in <span className="steel-text">Touch</span>
            </h1>
            <p className="mt-5 text-[#64748B] text-lg max-w-xl leading-relaxed">
              Questions about our stainless steel products, pricing, or
              availability? Our team is ready to help you source the right
              material.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* ─ LEFT: FORM ─ */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.08)] overflow-hidden">
                  {/* Card header accent */}
                  <div
                    className="h-1 bg-gradient-to-r from-[#0369A1] via-[#38BDF8] to-[#0369A1]"
                    aria-hidden="true"
                  />

                  <div className="p-8 sm:p-10">
                    <div className="mb-8">
                      <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                        Send Us a Message
                      </h2>
                      <p className="mt-2 text-[#64748B] text-sm leading-relaxed">
                        Do you have any questions about our business stainless
                        products, or are you seeking advice? We at SWEDINOX AB
                        are always happy to connect with you.
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <SuccessState key="success" onReset={resetForm} />
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          onSubmit={handleSubmit}
                          noValidate
                          aria-label="Contact form"
                        >
                          <div className="space-y-5">
                            <FloatingField
                              id="name"
                              label="Name"
                              value={name}
                              onChange={(v) => {
                                setName(v);
                                if (errors.name)
                                  setErrors((e) => ({ ...e, name: "" }));
                              }}
                              error={errors.name}
                            />
                            <FloatingField
                              id="email"
                              label="Email"
                              type="email"
                              required
                              value={email}
                              onChange={(v) => {
                                setEmail(v);
                                if (errors.email)
                                  setErrors((e) => ({ ...e, email: "" }));
                              }}
                              error={errors.email}
                            />
                            <FloatingField
                              id="phone"
                              label="Phone number"
                              type="tel"
                              value={phone}
                              onChange={setPhone}
                            />
                            <FloatingField
                              id="message"
                              label="Question / comments"
                              required
                              multiline
                              value={message}
                              onChange={(v) => {
                                setMessage(v);
                                if (errors.message)
                                  setErrors((e) => ({ ...e, message: "" }));
                              }}
                              error={errors.message}
                            />
                          </div>

                          <div className="mt-8">
                            <motion.button
                              type="submit"
                              disabled={submitting}
                              className="cta-glow relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0369A1] hover:bg-[#0284C7] disabled:opacity-60 text-white text-sm font-bold tracking-widest uppercase rounded-xl transition-colors duration-200 overflow-hidden group cursor-pointer"
                              whileHover={!submitting ? { scale: 1.01 } : {}}
                              whileTap={!submitting ? { scale: 0.98 } : {}}
                              aria-label="Send message"
                            >
                              {submitting ? (
                                <>
                                  <svg
                                    className="w-4 h-4 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    />
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    />
                                  </svg>
                                  Sending…
                                </>
                              ) : (
                                <>
                                  <span className="relative z-10">
                                    Send Message
                                  </span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-1"
                                    aria-hidden="true"
                                  >
                                    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                                  </svg>
                                  <span
                                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    aria-hidden="true"
                                  />
                                </>
                              )}
                            </motion.button>
                          </div>

                          <p className="mt-4 text-center text-[11px] text-slate-400 leading-relaxed">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a
                              href="https://policies.google.com/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-slate-600 transition-colors duration-150"
                            >
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                              href="https://policies.google.com/terms"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-slate-600 transition-colors duration-150"
                            >
                              Terms of Service
                            </a>{" "}
                            apply.
                          </p>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ─ RIGHT: CONTACT INFO ─ */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info card */}
              <Reveal delay={0.08}>
                <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.06)] overflow-hidden">
                  <div
                    className="h-1 bg-gradient-to-r from-[#059669] via-[#34D399] to-[#059669]"
                    aria-hidden="true"
                  />
                  <div className="p-8 space-y-7">
                    {/* Company tagline */}
                    <div>
                      <h2 className="text-lg font-extrabold text-[#0F172A] tracking-tight leading-snug mb-1">
                        SWEDINOX AB
                      </h2>
                      <p className="text-[#0369A1] text-sm font-medium italic">
                        Keeping your business stainless
                      </p>
                    </div>

                    <div className="h-px bg-slate-100" aria-hidden="true" />

                    {/* WhatsApp CTA */}
                    <motion.a
                      href="https://wa.me/46732488880"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] text-[#0F172A] font-bold text-sm transition-all duration-200 group cursor-pointer overflow-hidden relative"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 30px rgba(15,23,42,0.25)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Message SWEDINOX AB on WhatsApp"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center shadow-[0_0_12px_rgba(37,211,102,0.4)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <span>Message us on WhatsApp</span>
                      <span
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        aria-hidden="true"
                      />
                    </motion.a>

                    <div className="h-px bg-slate-100" aria-hidden="true" />

                    {/* Info rows */}
                    <InfoRow
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#0369A1]"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C14.302 15.952 16 13.487 16 10c0-3.192-2.053-5.5-4.5-5.5S7 6.808 7 10c0 3.487 1.698 5.952 2.855 7.186.828.8 1.652 1.38 2.274 1.765.311.193.57.337.757.433a5.741 5.741 0 00.3.148l.006.003zM10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      label="Address"
                    >
                      <a
                        href="https://maps.google.com/?q=Pilevallen+77,+Arlöv,+232+35,+Sweden"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0369A1] transition-colors duration-150 cursor-pointer"
                        aria-label="Open SWEDINOX AB address in Google Maps"
                      >
                        Pilevallen 77, Arlöv
                        <br />
                        232 35 SWEDEN
                      </a>
                    </InfoRow>

                    <InfoRow
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#0369A1]"
                          aria-hidden="true"
                        >
                          <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                          <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                      }
                      label="Email"
                    >
                      <a
                        href="mailto:sales@swedinox.se"
                        className="block hover:text-[#0369A1] transition-colors duration-150 cursor-pointer"
                      >
                        sales@swedinox.se
                      </a>
                      <a
                        href="mailto:sales@swedinox.eu"
                        className="block hover:text-[#0369A1] transition-colors duration-150 cursor-pointer"
                      >
                        sales@swedinox.eu
                      </a>
                    </InfoRow>

                    <InfoRow
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-[#0369A1]"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      label="Phone"
                    >
                      <a
                        href="tel:+46732488880"
                        className="block hover:text-[#0369A1] transition-colors duration-150 cursor-pointer"
                      >
                        +46 732 488 880
                      </a>
                      <a
                        href="tel:+46406860186"
                        className="block hover:text-[#0369A1] transition-colors duration-150 cursor-pointer"
                      >
                        +46 406 860 186
                      </a>
                    </InfoRow>

                    <div className="h-px bg-slate-100" aria-hidden="true" />

                    <InfoRow
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-emerald-500"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      label="Business Hours"
                    >
                      <HoursDropdown />
                    </InfoRow>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── MAP ── */}
        <section aria-label="Office location map" className="relative">
          {/* Top fade */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 z-10 h-12 bg-gradient-to-b from-[#F8FAFC] to-transparent"
          />

          <Reveal className="overflow-hidden" delay={0.05}>
            <div className="relative">
              {/* Map overlay label */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.12)] px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0369A1] flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C14.302 15.952 16 13.487 16 10c0-3.192-2.053-5.5-4.5-5.5S7 6.808 7 10c0 3.487 1.698 5.952 2.855 7.186.828.8 1.652 1.38 2.274 1.765.311.193.57.337.757.433a5.741 5.741 0 00.3.148l.006.003zM10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0F172A] text-xs font-bold leading-tight">
                      SWEDINOX AB
                    </p>
                    <p className="text-[#64748B] text-[11px]">
                      Pilevallen 77, Arlöv
                    </p>
                  </div>
                </div>
              </div>

              {/* Get directions button */}
              <div className="absolute top-6 right-6 z-20">
                <a
                  href="https://maps.google.com/?q=Pilevallen+77,+Arlöv,+232+35,+Sweden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-[0_4px_16px_rgba(15,23,42,0.1)] text-[#0369A1] text-xs font-bold hover:bg-[#0369A1] hover:text-white hover:border-[#0369A1] transition-all duration-200 cursor-pointer"
                  aria-label="Get directions to SWEDINOX AB in Google Maps"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.157 2.176a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.25v10.877a1.5 1.5 0 002.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.75V3.872a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.762zM7.58 5a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5A.75.75 0 017.58 5zm5.59 2.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Google Maps iframe */}
              <iframe
                title="SWEDINOX AB location — Pilevallen 77, Arlöv, Sweden"
                src="https://maps.google.com/maps?q=Pilevallen+77,+Arlöv,+232+35,+Sweden&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="480"
                className="w-full block border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map showing SWEDINOX AB office location at Pilevallen 77, Arlöv, Sweden"
              />
            </div>
          </Reveal>

          {/* Bottom dark strip */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 z-10 h-12 bg-gradient-to-t from-[#0F172A] to-transparent"
          />
        </section>

        {/* ── BOTTOM CTA ── */}
        <section
          aria-label="Quick contact options"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0F9FF]"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(219,234,254,0.7) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "sales@swedinox.se",
                  href: "mailto:sales@swedinox.se",
                  ariaLabel: "Send email to sales@swedinox.se",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+46 732 488 880",
                  href: "tel:+46732488880",
                  ariaLabel: "Call SWEDINOX AB at +46 732 488 880",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "Message us directly",
                  href: "https://wa.me/46732488880",
                  ariaLabel: "Message SWEDINOX AB on WhatsApp",
                },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-[0_8px_30px_rgba(3,105,161,0.08)] transition-all duration-200 group cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    aria-label={item.ariaLabel}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0369A1] flex-shrink-0 group-hover:bg-[#0369A1] group-hover:text-white transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase mb-0.5">
                        {item.label}
                      </span>
                      <span className="block text-[#0F172A] text-sm font-semibold group-hover:text-[#0369A1] transition-colors duration-200">
                        {item.value}
                      </span>
                    </div>
                  </motion.a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactClient;
