import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const trustBadges = [
  "ISO 9001:2015 CERTIFIED STAINLESS STEEL SUPPLIER",
  "EN 10088 Compliant",
  "ASTM Standards",
  "REACH Compliant",
];

const HomeCtaBanner = () => (
  <section
    aria-label="Final call to action"
    className="relative overflow-hidden bg-[#0F172A] px-4 py-24 sm:px-6 lg:px-8"
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% 110%, rgba(3,105,161,0.4) 0%, transparent 60%)",
      }}
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.6) 20px, rgba(255,255,255,0.6) 21px)",
      }}
    />
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00AADD]/60 to-transparent"
    />

    <div className="relative mx-auto max-w-4xl text-center">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00AADD]/30 bg-[#00AADD]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#00AADD]">
        <span
          className="h-1.5 w-1.5 rounded-full bg-[#00AADD] animate-pulse"
          aria-hidden="true"
        />
        Ready to Source Premium Steel?
      </span>

      <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        Let&apos;s Build Your
        <br />
        <span className="steel-text">Supply Chain</span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
        Join 500+ industrial clients across 10+ countries who trust SWEDINOX AB
        for reliable, certified stainless steel supply.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/contact-us-1"
          className="cta-glow group inline-flex items-center gap-2 rounded-full bg-[#005CA3] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-[0_4px_24px_rgba(0,92,163,0.35)] transition-colors duration-200 hover:bg-[#0077BB]"
          aria-label="Contact SWEDINOX AB"
        >
          <span>Contact Our Team</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        <Link
          href="/products"
          className="group inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/10"
          aria-label="Browse our full product catalog"
        >
          <span>Browse Products</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {trustBadges.map((badge) => (
          <div
            key={badge}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500"
          >
            <span
              className="h-1 w-1 rounded-full bg-[#F5A623]"
              aria-hidden="true"
            />
            {badge}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeCtaBanner;
