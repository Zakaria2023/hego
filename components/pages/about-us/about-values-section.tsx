"use client";

import Reveal from "@/components/shared/reveal";
import { fadeUp, stagger } from "@/components/shared/motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";

const values = [
  {
    title: "Customer First",
    description:
      "Our customers are our main point of focus and every decision we make is driven by your long-term success.",
  },
  {
    title: "Quality Assurance",
    description:
      "We supply only certified materials meeting ISO, EN 10088, ASTM, and REACH standards without exception.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "As a family-owned company, we build lasting relationships with clients and suppliers grounded in trust.",
  },
  {
    title: "Prompt Delivery",
    description:
      "Our European port warehouses give us fast, reliable logistics for global delivery with minimal lead times.",
  },
];

const AboutValuesSection = () => (
  <section
    aria-labelledby="values-heading"
    className="relative overflow-hidden bg-[#F8FAFC]"
  >
    <div
      aria-hidden="true"
      className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
            Our Commitments
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="values-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl"
          >
            What Sets Us Apart
          </h2>
        </Reveal>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {values.map(({ title, description }) => (
          <GlowCard
            key={title}
            customSize
            className="shadow-[0_4px_16px_rgba(15,23,42,0.04)]"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group flex h-full gap-5 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#FCD34D] bg-[#FFF7ED]">
                  <div className="h-2 w-2 rounded-full bg-[#005CA3]" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                  {description}
                </p>
              </div>
            </motion.div>
          </GlowCard>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutValuesSection;
