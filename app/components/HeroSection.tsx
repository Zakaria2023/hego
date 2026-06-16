"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "10+", label: "Countries Served" },
  { value: "500+", label: "Product Grades" },
  { value: "99%", label: "Client Retention" },
];

const trustBadges = [
  "ISO 9001:2015 Certified",
  "EN 10088 Compliant",
  "ASTM Standards",
  "TUV Approved",
  "REACH Compliant",
];

const HeroSection = () => {
  return (
    <section
      aria-label="SWEDINOX AB - Premium Stainless Steel Hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/hero-section.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SWEDINOX AB",
            url: "https://swedinox.se",
            logo: "https://swedinox.se/logo.png",
            description:
              "SWEDINOX AB is a global B2B supplier of premium stainless steel products including coils, sheets, tubes and more.",
            address: { "@type": "PostalAddress", addressCountry: "SE" },
          }),
        }}
      />

      {/* Subtle light wash behind text for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.3) 45%, transparent 65%)",
        }}
      />

      {/* Main row */}
      <div className="relative z-10 flex-1 flex min-h-screen">
        {/* Left: text content */}
        <div className="relative flex items-center w-full lg:w-[57%] px-6 sm:px-10 lg:pl-16 xl:pl-24 2xl:pl-32 pt-28 pb-24 lg:pt-32 lg:pb-28">
          <div className="relative z-10 max-w-[540px]">
            {/* Badge */}
            <div className="animate-slide-up mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FCD34D] text-[#005CA3] text-xs font-bold tracking-widest uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
                  aria-hidden="true"
                />
                ISO 9001:2015 CERTIFIED STAINLESS STEEL SUPPLIER
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold leading-[1.04] tracking-tight animate-slide-up delay-100">
              <span className="block text-[#0F172A]">
                Premium Stainless Steel.
              </span>
              <span className="steel-text block mt-1">Reliable Supply</span>
              <span className="block mt-1 text-[#0F172A]">Worldwide.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-[#475569] text-base sm:text-lg leading-relaxed animate-slide-up delay-200">
              Swedinox AB supplies high-quality stainless steel coils, sheets,
              strips, and circles to industrial customers worldwide. With
              reliable sourcing, flexible processing, and efficient logistics,
              we deliver the right material, in the right specification, at the
              right time.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up delay-300">
              <Link
                href="/contact-us-1"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(0,92,163,0.3)] hover:shadow-[0_6px_28px_rgba(0,170,221,0.45)] hover:-translate-y-0.5 cursor-pointer group"
                aria-label="Contact SWEDINOX AB for a quote"
              >
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#F5A623]/70 hover:border-[#F5A623] text-[#005CA3] hover:text-[#005CA3] text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer group bg-white/40 hover:bg-white/60 backdrop-blur-sm"
                aria-label="Browse our steel product catalog"
              >
                <span>View Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 group-hover:rotate-45 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-[#0F172A]/20 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-slide-up delay-400">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                    {value}
                  </span>
                  <span className="text-xs text-[#64748B] font-medium tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges ticker */}
      <div
        aria-label="Certifications and standards"
        className="relative z-10 border-t border-white/20 bg-black/20 backdrop-blur-sm overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap py-4 gap-0">
          {[...trustBadges, ...trustBadges, ...trustBadges, ...trustBadges].map(
            (badge, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-8 text-white/70 text-xs font-semibold tracking-widest uppercase"
              >
                <span
                  className="w-1 h-1 rounded-full bg-[#F5A623]"
                  aria-hidden="true"
                />
                <span>{badge}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
