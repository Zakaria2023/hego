import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/reveal";

const ProductsInquirySection = () => (
  <section
    aria-label="Request a quote"
    className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
  >
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,#F0F9FF 0%,#E0F2FE 50%,#F0F9FF 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005CA3] via-[#00AADD] to-[#005CA3]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20 blur-[60px]"
          style={{
            background: "radial-gradient(circle,#005CA3,transparent)",
          }}
        />

        <div className="relative px-8 py-16 text-center sm:px-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#005CA3]/30 bg-[#005CA3]/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#005CA3]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#005CA3] animate-pulse"
              aria-hidden="true"
            />
            Need a Custom Specification?
          </span>
          <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#334155]">
            We accommodate special alloy requirements and specific dimension
            needs beyond our standard listings. Contact our team and we&apos;ll
            source it for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us-1"
              className="cta-glow group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-sm bg-[#005CA3] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#0077BB]"
              aria-label="Contact us for custom stainless steel specifications"
            >
              <span className="relative z-10">Request a Custom Quote</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 rounded-sm border border-[#CBD5E1] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#334155] transition-all duration-200 hover:border-[#005CA3] hover:text-[#005CA3]"
              aria-label="Learn more about SWEDINOX AB"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

export default ProductsInquirySection;
