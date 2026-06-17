"use client";

import { ShaderAnimation } from "@/app/components/ui/shader-lines";
import { GlowCard } from "@/app/components/ui/spotlight-card";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const revealEase = [0.22, 1, 0.36, 1] as const;

/* ─── Shared fade-up variant ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: revealEase },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Scroll-aware section wrapper ─── */
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
  const inView = useInView(ref, { once: true, margin: "0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Animated counter ─── */
const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 50, stiffness: 100 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    return spring.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [spring]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

/* ─── Pillar card data ─── */
const pillars = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Strategy",
    heading: "Precision Matching",
    body: "Our strategic focus is on matching our prime or non-prime supply with the niche requirements of our customer base. We offer hot and cold rolled stainless steel in varying dimensions and finishes — coils, sheets, circles, tubes, pipes, and bars.",
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
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
        <path
          fillRule="evenodd"
          d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Inventory",
    heading: "Always In Stock",
    body: "Our continued stock locations ensure fast delivery times and weekly confirmed in-stock listings of newly available semi manufactured stainless steel materials. We accommodate special alloy requirements and specific dimension needs beyond recurring stock listings.",
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
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V4.5h-10.125zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875H3.75a3 3 0 116 0h3.375a1.875 1.875 0 001.875-1.875V15z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
      </svg>
    ),
    label: "Logistics",
    heading: "Strategic Warehousing",
    body: "Our warehouses, strategically located at the main ports of Europe, provide a significant logistical advantage for our global trade. This prime location places us near service centers capable of cutting to length, polishing, slitting, and other value-added services.",
  },
];

/* ─── Stats ─── */
const stats = [
  { value: 11, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 500, suffix: "+", label: "Product Grades" },
  { value: 300, suffix: "", label: "Number of CLients" },
];

/* ─── Values ─── */
const values = [
  {
    title: "Customer First",
    desc: "Our customers are our main point of focus — every decision we make is driven by your long-term success.",
  },
  {
    title: "Quality Assurance",
    desc: "We supply only certified materials meeting ISO, EN 10088, ASTM and REACH standards without exception.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "As a family-owned company, we build lasting relationships with clients and suppliers grounded in trust.",
  },
  {
    title: "Prompt Delivery",
    desc: "Our European port warehouses give us fast, reliable logistics for global delivery with minimal lead times.",
  },
];

/* ═══════════════════════════════ MAIN COMPONENT ═══════════════════════════════ */
const AboutUsClient = () => {
  /* Parallax for hero title */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About SWEDINOX AB",
            url: "https://swedinox.se/about-us",
            description:
              "SWEDINOX AB is a family-owned global supplier of semi-manufactured stainless steel products with over 25 years of experience.",
            mainEntity: {
              "@type": "Organization",
              name: "SWEDINOX AB",
              foundingDate: "1999",
              description:
                "Premium stainless steel supplier serving 80+ countries.",
              address: { "@type": "PostalAddress", addressCountry: "SE" },
            },
          }),
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        aria-label="About SWEDINOX AB"
        className="relative min-h-[52vh] flex items-end overflow-hidden bg-white"
      >
        {/* Shader animation background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ opacity: 0.18 }}
        >
          <ShaderAnimation />
        </div>

        {/* Decorative blob */}
        <div
          aria-hidden="true"
          className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(186,230,253,0.3) 0%, transparent 70%)",
          }}
        />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36"
        >
          {/* Breadcrumb */}
          {/* <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#005CA3] transition-colors duration-150 cursor-pointer"
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
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="text-[#0F172A] font-medium" aria-current="page">
                About Us
              </li>
            </ol>
          </nav> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: revealEase }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
                aria-hidden="true"
              />
              Family-Owned Since 1999
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-3xl">
              Built on <span className="steel-text">Trust</span>
              ,<br />
              Driven by{" "}
              <span className="relative inline-block text-[#0F172A]">
                Excellence
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#005CA3] to-[#00AADD]"
                />
              </span>
            </h1>
            <p className="mt-5 text-[#64748B] text-lg max-w-xl leading-relaxed">
              SWEDINOX AB is the destination for semi-manufactured stainless
              steel products — a trusted partner for industrial clients across
              the globe.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="bg-[#F8FAFC]">
        {/* ── WHO WE ARE ── */}
        <section
          aria-labelledby="who-we-are"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <Reveal>
                <span className="text-[#005CA3] text-xs font-bold tracking-widest uppercase">
                  Who We Are
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  id="who-we-are"
                  className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight"
                >
                  Your Reliable Gateway to International Steel Trade
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-[#005CA3] to-[#00AADD]"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[#334155] text-base leading-relaxed">
                  SWEDINOX AB is the destination for semi-manufactured stainless
                  steel products. As a family-owned company, we prioritize
                  long-term relationships with our customers and suppliers,
                  which has been a primary goal since our founding.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 text-[#334155] text-base leading-relaxed">
                  We cater to various end users and smaller wholesalers in the
                  stainless steel industry, ensuring efficient stainless steel
                  logistics as a reliable stainless steel supplier. Our
                  customers are our main point of focus — SWEDINOX is your
                  perfect partner for long-lasting cooperation in the realm of
                  semi-manufactured stainless steel.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide rounded-sm transition-colors duration-200 cursor-pointer group"
                    aria-label="View our stainless steel products"
                  >
                    <span>View Products</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#CBD5E1] hover:border-[#005CA3] text-[#334155] hover:text-[#005CA3] text-sm font-bold tracking-wide rounded-sm transition-all duration-200 cursor-pointer"
                    aria-label="Contact SWEDINOX AB"
                  >
                    Contact Us
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* About us image */}
            <Reveal delay={0.1}>
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(15,23,42,0.15)] border border-slate-200">
                  <div className="w-full h-105 relative overflow-hidden">
                    <Image
                      src="/about-us.jpg"
                      alt="SWEDINOX AB facility"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
                    {/* Badge */}
                    {/* <div className="absolute bottom-4 left-4 px-3 py-2 rounded-lg bg-white/90 backdrop-blur-sm border border-[#E2E8F0] text-xs text-[#0F172A] font-semibold">
                      European Port Warehouse
                    </div> */}
                  </div>
                </div>
                {/* Floating stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4,
                    duration: 0.5,
                    ease: revealEase,
                  }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.12)] border border-slate-100 px-5 py-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#005CA3]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-[#005CA3]"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0F172A] text-sm font-bold">
                      ISO 9001:2015
                    </p>
                    <p className="text-slate-500 text-xs">Quality Certified</p>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section
          aria-label="Company statistics"
          className="relative overflow-hidden bg-[#F8FAFC] py-20"
        >
          {/* Decorative blobs */}
          <div
            aria-hidden="true"
            className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(219,234,254,0.55) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(186,230,253,0.4) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {stats.map(({ value, suffix, label }, i) => (
                <GlowCard
                  key={label}
                  customSize
                  className="shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 36, scale: 0.92 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.65,
                          delay: i * 0.08,
                          ease: revealEase,
                        },
                      },
                    }}
                    className="group relative rounded-3xl p-7 sm:p-8 overflow-hidden cursor-default h-full"
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  >
                    {/* Hover gradient corner */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 right-0 w-28 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at top right, rgba(3,105,161,0.07), transparent 70%)",
                      }}
                    />

                    {/* Number */}
                    <div className="text-4xl sm:text-5xl xl:text-6xl font-extrabold steel-text leading-none mb-3 tracking-tight">
                      <Counter value={value} suffix={suffix} />
                    </div>

                    {/* Label */}
                    <div className="text-[#64748B] text-sm font-semibold tracking-wide leading-tight">
                      {label}
                    </div>

                    {/* Bottom accent bar */}
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#005CA3] via-[#00AADD] to-[#005CA3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"
                    />
                  </motion.div>
                </GlowCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── THREE PILLARS ── */}
        <section
          aria-labelledby="pillars-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-[#005CA3] text-xs font-bold tracking-widest uppercase">
                How We Operate
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="pillars-heading"
                className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight"
              >
                Three Pillars of Excellence
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[#334155] max-w-xl mx-auto leading-relaxed">
                Our entire operation is built around three core principles that
                ensure we deliver premium stainless steel products reliably,
                every time.
              </p>
            </Reveal>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {pillars.map(({ icon, label, heading, body }) => (
              <GlowCard
                key={label}
                customSize
                className="p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
              >
                <motion.article
                  variants={fadeUp}
                  className="group relative rounded-2xl h-full cursor-default"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Gradient corner */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(circle at top right,rgba(3,105,161,0.08),transparent)",
                    }}
                  />

                  <div className="w-12 h-12 rounded-xl bg-[#005CA3]/10 border border-[#005CA3]/20 flex items-center justify-center text-[#005CA3] mb-6 group-hover:bg-[#005CA3] group-hover:text-white transition-all duration-300">
                    {icon}
                  </div>
                  <span className="text-[#005CA3] text-xs font-bold tracking-widest uppercase">
                    {label}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-[#0F172A] leading-snug">
                    {heading}
                  </h3>
                  <div
                    aria-hidden="true"
                    className="mt-3 w-8 h-0.5 rounded-full bg-[#005CA3]/40 group-hover:w-16 transition-all duration-300"
                  />
                  <p className="mt-4 text-[#334155] text-sm leading-relaxed">
                    {body}
                  </p>
                </motion.article>
              </GlowCard>
            ))}
          </motion.div>
        </section>

        {/* ── VALUES ── */}
        <section
          aria-labelledby="values-heading"
          className="bg-[#F8FAFC] relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <Reveal>
                <span className="text-[#005CA3] text-xs font-bold tracking-widest uppercase">
                  Our Commitments
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  id="values-heading"
                  className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight"
                >
                  What Sets Us Apart
                </h2>
              </Reveal>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {values.map(({ title, desc }) => (
                <GlowCard
                  key={title}
                  customSize
                  className="shadow-[0_4px_16px_rgba(15,23,42,0.04)]"
                >
                  <motion.div
                    variants={fadeUp}
                    className="group flex gap-5 p-6 rounded-2xl h-full transition-all duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-[#FFF7ED] border border-[#FCD34D] flex items-center justify-center">
                        <div
                          className="w-2 h-2 rounded-full bg-[#005CA3]"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#0F172A] font-bold text-base">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-[#64748B] text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                </GlowCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CLOSING STATEMENT ── */}
        <section
          aria-label="Our promise"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              {/* BG gradient */}
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

              <div className="relative text-center px-8 sm:px-16 py-16">
                <div
                  aria-hidden="true"
                  className="w-20 h-20 rounded-full bg-[#005CA3]/10 border border-[#005CA3]/20 flex items-center justify-center mx-auto mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12 text-[#005CA3]"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 11.25a6.75 6.75 0 1113.5 0v.75a.75.75 0 001.5 0v-.75a8.25 8.25 0 10-16.5 0v.75a.75.75 0 001.5 0v-.75zm3.75 6a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm.75-3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <blockquote>
                  <p className="text-[#0F172A] text-lg sm:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
                    &ldquo;In the end, we offer our semi-manufactured stainless
                    steel products in various specifications to meet the
                    divergent demands of our clients. Along with this, several
                    factors have enabled us to meet client expectations,
                    including{" "}
                    <strong className="text-[#005CA3]">
                      prompt delivery, high-quality products, transparent
                      business policies, and cost-effective solutions
                    </strong>
                    &nbsp;— all supported by our reliable stainless steel
                    logistics as a leading stainless steel supplier.&rdquo;
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-[#005CA3] flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm">SX</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[#0F172A] font-bold text-sm">
                      SWEDINOX AB
                    </p>
                    <p className="text-slate-500 text-xs">Management Team</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── CTA SECTION ── */}
        <section
          aria-label="Contact call to action"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0F9FF]"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(219,234,254,0.7) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase mb-6">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
                  aria-hidden="true"
                />
                Ready to Partner With Us?
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Let&apos;s Build a Long-Term Relationship
              </h2>
              <p className="mt-4 text-[#64748B] leading-relaxed">
                Contact our team to discuss your stainless steel requirements.
                We&apos;ll find the exact grade, dimension, and finish for your
                application.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact-us-1"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(3,105,161,0.3)] hover:shadow-[0_8px_32px_rgba(3,105,161,0.4)] hover:-translate-y-0.5 cursor-pointer group"
                  aria-label="Contact SWEDINOX AB"
                >
                  <span>Contact Us Now</span>
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#E2E8F0] hover:border-[#005CA3] text-[#334155] hover:text-[#005CA3] text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer"
                  aria-label="Browse our product catalog"
                >
                  Browse Products
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUsClient;
