import { heroStats, heroTrustBrands } from "@/components/site-data";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroTextShadow = "0 2px 18px rgba(255,255,255,0.42)";
const tickerTextShadow = "0 2px 10px rgba(0,0,0,0.45)";

const HeroSection = () => {
  return (
    <section
      aria-label="SWEDINOX AB - Premium Stainless Steel Hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src="/hero-section.webp"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

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
          <div className="relative z-10 max-w-135">
            {/* Badge */}
            <div className="animate-slide-up mb-7">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FCD34D] text-[#005CA3] text-xs font-bold tracking-widest uppercase"
                style={{ textShadow: heroTextShadow }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
                  aria-hidden="true"
                />
                ISO 9001:2015 CERTIFIED STAINLESS STEEL SUPPLIER
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold leading-[1.04] tracking-tight animate-slide-in delay-100"
              style={{ textShadow: heroTextShadow }}
            >
              <span className="steel-text block mt-1">
                Prime, Ex-Prime &amp; Second-Choice Stainless Steel
              </span>
            </h1>

            <p
              className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0F172A] animate-slide-up delay-150"
              style={{ textShadow: heroTextShadow }}
            >
              Reliable Supply Worldwide.
            </p>

            {/* Description */}
            <p
              className="mt-6 text-[#475569] text-base sm:text-lg leading-relaxed animate-slide-up delay-200"
              style={{ textShadow: heroTextShadow }}
            >
              Swedinox AB supplies prime, ex-prime, and second-choice
              stainless steel coils, sheets, strips, circles, baby coils, and
              head and tail sheets to industrial buyers worldwide. With
              reliable sourcing, flexible processing, and efficient logistics,
              we deliver the right specification at the right time.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up delay-300">
              <Link
                href="/contact-us-1"
                prefetch={false}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(0,92,163,0.3)] hover:shadow-[0_6px_28px_rgba(0,170,221,0.45)] hover:-translate-y-0.5 cursor-pointer group"
                aria-label="Contact SWEDINOX AB for a quote"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                prefetch={false}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#F5A623]/70 hover:border-[#F5A623] text-[#005CA3] hover:text-[#005CA3] text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer group bg-white/40 hover:bg-white/60 backdrop-blur-sm"
                aria-label="Browse our steel product catalog"
              >
                <span>View Products</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-[#0F172A]/20 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-slide-up delay-400">
              {heroStats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]"
                    style={{ textShadow: heroTextShadow }}
                  >
                    {value}
                  </span>
                  <span className="text-xs text-[#334155] font-semibold tracking-wide">
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
        <div className="px-6 pt-3 text-center">
          <span
            className="text-white/90 text-[11px] font-bold tracking-[0.28em] uppercase"
            style={{ textShadow: tickerTextShadow }}
          >
            Leading Brands We Work With
          </span>
        </div>
        <p className="sr-only">
          Leading brands we work with:{" "}
          {heroTrustBrands.map((brand) => brand.alt).join(", ")}.
        </p>
        <div
          aria-hidden="true"
          className="flex w-max animate-marquee whitespace-nowrap py-5 gap-0"
        >
          {[...heroTrustBrands, ...heroTrustBrands, ...heroTrustBrands].map(
            (brand, i) => (
              <div
                key={`${brand.alt}-${i}`}
                className="inline-flex items-center gap-4 px-8"
              >
                <span
                  className="w-1 h-1 rounded-full bg-[#F5A623]"
                  aria-hidden="true"
                />
                <div
                  className="relative h-10 shrink-0 sm:h-11"
                  style={{ width: `${brand.frameWidth}px` }}
                >
                  <Image
                    src={brand.src}
                    alt=""
                    fill
                    sizes={`${brand.frameWidth}px`}
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.28))",
                      transform: `scale(${brand.scale})`,
                      transformOrigin: "center",
                    }}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
