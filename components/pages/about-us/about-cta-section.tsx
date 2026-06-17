import Reveal from "@/components/shared/reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutCtaSection = () => (
  <section
    aria-label="Contact call to action"
    className="relative overflow-hidden"
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-linear-to-br from-[#EFF6FF] via-white to-[#F0F9FF]"
    />
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 h-100 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, rgba(219,234,254,0.7) 0%, transparent 70%)",
      }}
    />

    <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <Reveal>
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#005CA3]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#F5A623] animate-pulse"
            aria-hidden="true"
          />
          Ready to Partner With Us?
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
          Let&apos;s Build a Long-Term Relationship
        </h2>
        <p className="mt-4 leading-relaxed text-[#64748B]">
          Contact our team to discuss your stainless steel requirements.
          We&apos;ll find the exact grade, dimension, and finish for your
          application.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact-us-1"
            className="group inline-flex items-center gap-2 rounded-full bg-[#005CA3] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-[0_4px_20px_rgba(3,105,161,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0077BB] hover:shadow-[0_8px_32px_rgba(3,105,161,0.4)]"
            aria-label="Contact SWEDINOX AB"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#E2E8F0] px-8 py-4 text-sm font-bold tracking-wide text-[#334155] transition-all duration-200 hover:border-[#005CA3] hover:text-[#005CA3]"
            aria-label="Browse our product catalog"
          >
            Browse Products
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutCtaSection;
