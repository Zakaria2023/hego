"use client";

import { aboutPillars } from "@/components/pages/about-us/data";
import Reveal from "@/components/shared/reveal";
import { fadeUp, stagger } from "@/components/shared/motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";

const AboutPillarsSection = () => (
  <section
    aria-labelledby="pillars-heading"
    className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
  >
    <div className="mb-16 text-center">
      <Reveal>
        <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
          How We Operate
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          id="pillars-heading"
          className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl"
        >
          Three Pillars of Excellence
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#334155]">
          Our entire operation is built around three core principles that
          ensure we deliver premium stainless steel products reliably, every
          time.
        </p>
      </Reveal>
    </div>

    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {aboutPillars.map(({ icon: Icon, label, heading, body }) => (
        <GlowCard
          key={label}
          customSize
          className="p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
        >
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative h-full cursor-default rounded-2xl"
          >
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-24 w-24 rounded-bl-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at top right,rgba(3,105,161,0.08),transparent)",
              }}
            />

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#005CA3]/20 bg-[#005CA3]/10 text-[#005CA3] transition-all duration-300 group-hover:bg-[#005CA3] group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
              {label}
            </span>
            <h3 className="mt-2 text-xl font-bold leading-snug text-[#0F172A]">
              {heading}
            </h3>
            <div
              aria-hidden="true"
              className="mt-3 h-0.5 w-8 rounded-full bg-[#005CA3]/40 transition-all duration-300 group-hover:w-16"
            />
            <p className="mt-4 text-sm leading-relaxed text-[#334155]">
              {body}
            </p>
          </motion.article>
        </GlowCard>
      ))}
    </motion.div>
  </section>
);

export default AboutPillarsSection;
