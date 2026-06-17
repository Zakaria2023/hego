"use client";

import Reveal from "@/components/shared/reveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import ContactField from "./contact-field";
import ContactSuccessState from "./contact-success-state";

const ContactFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!message.trim()) nextErrors.message = "Please write your question";

    return nextErrors;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <Reveal>
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.08)]">
        <div
          className="h-1 bg-gradient-to-r from-[#005CA3] via-[#00AADD] to-[#005CA3]"
          aria-hidden="true"
        />

        <div className="p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A]">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
              Share your product requirements, quantity, target grade, or any
              sourcing question. Our team will review it and respond quickly.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <ContactSuccessState key="success" onReset={resetForm} />
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
                  <ContactField
                    id="name"
                    label="Name"
                    value={name}
                    error={errors.name}
                    onChange={(value) => {
                      setName(value);
                      if (errors.name) {
                        setErrors((current) => ({ ...current, name: "" }));
                      }
                    }}
                  />
                  <ContactField
                    id="email"
                    label="Email"
                    type="email"
                    required
                    value={email}
                    error={errors.email}
                    onChange={(value) => {
                      setEmail(value);
                      if (errors.email) {
                        setErrors((current) => ({ ...current, email: "" }));
                      }
                    }}
                  />
                  <ContactField
                    id="phone"
                    label="Phone number"
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                  />
                  <ContactField
                    id="message"
                    label="Question / comments"
                    required
                    multiline
                    value={message}
                    error={errors.message}
                    onChange={(value) => {
                      setMessage(value);
                      if (errors.message) {
                        setErrors((current) => ({ ...current, message: "" }));
                      }
                    }}
                  />
                </div>

                <div className="mt-8">
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className="cta-glow group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#005CA3] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#0077BB] disabled:opacity-60"
                    whileHover={!submitting ? { scale: 1.01 } : {}}
                    whileTap={!submitting ? { scale: 0.98 } : {}}
                  >
                    {submitting ? (
                      <>
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Send Message</span>
                        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        <span
                          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-400">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors duration-150 hover:text-slate-600"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors duration-150 hover:text-slate-600"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Reveal>
  );
};

export default ContactFormSection;
