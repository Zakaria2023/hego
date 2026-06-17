"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

/* ─── Products data ─── */
const products = [
  {
    id: "coils",
    image: "/coils.JPG",
    name: "Stainless Steel Coils",
    tagline: "Prime, Ex-Prime & 2nd Choice",
    description:
      "Wide range of widths, thicknesses, and surface finishes for industrial applications worldwide.",
    specs: [
      "Grades: 304 / 316L / 430",
      "Cold & Hot Rolled",
      "BA, 2B, No.1 Finish",
    ],
    accent: "#005CA3",
  },
  {
    id: "baby-coils",
    image: "/baby-cols.jpg",
    name: "Baby Coils",
    tagline: "From 500 KG",
    description:
      "Starting from 500 KG — ideal for smaller processing operations with custom slitting.",
    specs: ["Min. Weight: 500 KG", "Multiple Widths", "Custom Slitting"],
    accent: "#0077BB",
  },
  {
    id: "sheets",
    image: "/sheets.jpg",
    name: "Sheets",
    tagline: "Cold & Hot Rolled",
    description:
      "Standard and non-standard sizes in comprehensive grades and surface finishes.",
    specs: [
      "Standard & Custom Sizes",
      "BA, 2B, SB Finish",
      "Grades: 304 / 316L / 430",
    ],
    accent: "#005CA3",
  },
  {
    id: "strips",
    image: "/strips.jpg",
    name: "Strips",
    tagline: "From 10 mm Width",
    description:
      "Precision-slit to your exact specification in coil or cut-to-length format.",
    specs: ["Min. Width: 10 mm", "Custom Lengths", "Precision Slitting"],
    accent: "#0C4A6E",
  },
  {
    id: "circles",
    image: "/circles.jpeg",
    name: "Stainless Steel Circles",
    tagline: "Laser-Cut from 150 mm",
    description:
      "Laser-cut from 150 mm diameter in grades 304 and 430 with clean, burr-free edges.",
    specs: [
      "Min. Diameter: 150 mm",
      "Laser Cut Precision",
      "Grades: 430 / 304",
    ],
    accent: "#005CA3",
  },
  {
    id: "head-and-tail",
    image: "/head-and-tail.jpeg",
    name: "Head & Tail",
    tagline: "700–3000 mm · 0.4–6 mm",
    description:
      "Start and end sections of mother coils at competitive prices for cost-sensitive projects.",
    specs: ["Width: 700 mm+", "Length: up to 3000 mm", "BA / 2B / S.B Finish"],
    accent: "#075985",
  },
];

/* ─── Features data ─── */
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
    title: "ISO 9001:2015 Certified",
    desc: "Internationally recognized quality management standards applied across every product and process.",
    stat: "Certified",
    color: "#005CA3",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    title: "10+ Countries Delivered",
    desc: "A global logistics network ensuring on-time delivery to clients across the globe.",
    stat: "10+",
    color: "#0077BB",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "12+ Years of Experience",
    desc: "Backed by years of market expertise and reliable supplier relationships.",
    stat: "12+",
    color: "#005CA3",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Number of Clients",
    desc: "We serve over 100 clients across the globe.",
    stat: "100",
    color: "#0C4A6E",
  },
];

/* ─── Industries data ─── */
const industries = [
  {
    name: "Automotive",
    desc: "Body panels, exhaust systems & precision stampings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
  {
    name: "Construction",
    desc: "Cladding, facades & architectural elements",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    name: "Food & Beverage",
    desc: "Hygienic equipment, tanks & processing lines",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
        />
      </svg>
    ),
  },
  {
    name: "Chemical Industry",
    desc: "Corrosion-resistant vessels, pipes & reactors",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    name: "Medical & Pharma",
    desc: "Surgical instruments, implants & sterile equipment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    name: "Energy & Utilities",
    desc: "Heat exchangers, turbine components & pipelines",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
];

/* ─── Process steps ─── */
const steps = [
  {
    num: "01",
    title: "Browse & Inquire",
    desc: "Explore our catalog and submit an inquiry with your grade, finish, and dimension requirements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Receive Your Quote",
    desc: "Our team reviews your specifications and sends a competitive, fully detailed quote within 24 hours.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6z"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Global Delivery",
    desc: "Confirmed orders are dispatched from our European port warehouses directly to your facility worldwide.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
];

/* ═══ PRODUCTS SECTION ═══ */
const HomeProductCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/products/${product.id}`}
        className="group block rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-[#BFDBFE] shadow-sm hover:shadow-[0_16px_48px_rgba(3,105,161,0.12)] transition-all duration-350 bg-white"
        aria-label={`View ${product.name} – ${product.tagline}`}
        style={
          {
            "--card-accent": product.accent,
          } as React.CSSProperties
        }
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-[#0F172A]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.07] transition-transform duration-500 ease-out"
          />
          {/* Base gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

          {/* Hover specs overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to top, ${product.accent}f0 0%, ${product.accent}90 45%, transparent 100%)`,
            }}
          >
            <ul className="flex flex-col gap-1.5">
              {product.specs.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-2 text-white text-[11px] font-semibold tracking-wide"
                >
                  <span
                    className="w-1 h-1 rounded-full bg-white/90 shrink-0"
                    aria-hidden="true"
                  />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Tagline badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0F172A]/70 backdrop-blur-sm border border-white/10 text-[10px] text-slate-300 font-semibold tracking-wide">
            {product.tagline}
          </div>

          {/* Shine sweep */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)] bg-[length:200%_100%] bg-right group-hover:bg-left transition-[background-position] duration-700" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: product.accent }}
              >
                Product
              </span>
              <h3 className="mt-0.5 text-lg font-extrabold text-[#0F172A] leading-tight group-hover:text-[#005CA3] transition-colors duration-200">
                {product.name}
              </h3>
            </div>
            <div
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
              style={{
                backgroundColor: `${product.accent}12`,
                border: `1.5px solid ${product.accent}30`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300"
                style={{ color: product.accent }}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Accent underline */}
          <div className="mt-3 h-0.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full w-[28%] group-hover:w-full transition-[width] duration-500 ease-out"
              style={{
                background: `linear-gradient(90deg, ${product.accent}, ${product.accent}77)`,
              }}
            />
          </div>

          <p className="mt-3 text-[#64748B] text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>

          <div
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: product.accent }}
          >
            <span>View Details</span>
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
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductsSection = () => (
  <section
    aria-labelledby="home-products-heading"
    className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
              aria-hidden="true"
            />
            6 Product Categories
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            id="home-products-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
          >
            Our <span className="steel-text">Stainless Steel</span>
            <br />
            Products
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 text-[#64748B] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Semi-manufactured stainless steel in every form your operation
            requires — prime, ex-prime and 2nd choice quality, globally
            delivered.
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <HomeProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* CTA */}
      <Reveal delay={0.1} className="mt-12 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#005CA3] text-[#005CA3] hover:bg-[#005CA3] hover:text-white text-sm font-bold tracking-wide transition-all duration-200 group"
          aria-label="View all stainless steel products"
        >
          <span>View Full Catalog</span>
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
      </Reveal>
    </div>
  </section>
);

/* ═══ WHY SWEDINOX SECTION ═══ */
const WhySection = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <section
      aria-labelledby="why-heading"
      className="relative bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle decorative blob */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,170,221,0.15) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
                aria-hidden="true"
              />
              Why Choose Us
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="why-heading"
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
            >
              Trusted by Industry
              <br />
              <span className="steel-text">Leaders Worldwide</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-[#64748B] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              From Stockholm to Singapore — we deliver the quality and
              consistency global B2B buyers depend on.
            </p>
          </Reveal>
        </div>

        {/* ── Feature cards ── */}
        <motion.div
          ref={gridRef}
          variants={stagger}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group relative bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#FCD34D] hover:shadow-[0_12px_40px_rgba(245,166,35,0.12)] transition-all duration-300 cursor-default overflow-hidden"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Colored top bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, #F5A623, ${feature.color})`,
                }}
              />

              <div className="p-6">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: `${feature.color}12`,
                    border: `1.5px solid ${feature.color}35`,
                    color: feature.color,
                  }}
                >
                  {feature.icon}
                </div>

                {/* Big stat */}
                <div
                  className="mb-1 text-4xl font-black tracking-tight leading-none"
                  style={{ color: feature.color }}
                >
                  {feature.stat}
                </div>

                <h3 className="text-[#0F172A] font-bold text-base leading-snug mt-2 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Bottom tick */}
                <div
                  className="mt-5 flex items-center gap-2 text-xs font-semibold"
                  style={{ color: feature.color }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Checklist row ── */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Weekly Stock Availability",
              description:
                "Regular stock arrivals from European port warehouses.",
            },
            {
              title: "Flexible Coil Packaging Options",
              description:
                "Packaging configurations adapted to your handling and transport requirements.",
            },
            {
              title: "Custom Processing on Request",
              description:
                "Cut-to-length, slitting, and tailored dimensions to match your specifications.",
            },
            {
              title: "Certified Quality & Full Traceability",
              description:
                "Mill test certificates and full material traceability with every order.",
            },
            {
              title: "Competitive Supply Options",
              description:
                "Commercially competitive solutions across prime, ex-prime, and second-choice material.",
            },
            {
              title: "Dedicated B2B Account Support",
              description:
                "A single point of contact for quotations, order follow-up, and commercial coordination.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#FCD34D] hover:shadow-sm transition-all duration-200">
                <div>
                  <h3 className="text-[#0F172A] text-lg font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[#64748B] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div className="mt-14 pt-10 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Product Grades" },
            { value: "300", label: "Number of Clients" },
            { value: "Weekly", label: "Stock Updates" },
            { value: "48h", label: "Quote Turnaround" },
          ].map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-1 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-3xl sm:text-4xl font-black text-[#005CA3]">
                  {value}
                </span>
                <span className="text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mt-1">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══ INDUSTRIES SECTION ═══ */
const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="industries-heading"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F172A]"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED]/10 text-[#FCD34D] text-xs font-semibold tracking-widest uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
                  aria-hidden="true"
                />
                Industries Served
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                id="industries-heading"
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-lg"
              >
                Steel That Powers
                <br />
                <span className="steel-text">Every Industry</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:pb-2">
            <p className="text-slate-300 text-base leading-relaxed max-w-sm">
              From cookware to chemical reactors, our stainless steel products
              serve the most demanding applications across every major sector.
            </p>
          </Reveal>
        </div>

        {/* Industry grid */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-white/10 hover:border-[#F5A623]/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-default bg-white/5 backdrop-blur-sm"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white group-hover:border-[#F5A623] transition-all duration-300">
                {industry.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-snug mb-1">
                  {industry.name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ═══ PROCESS SECTION ═══ */
const ProcessSection = () => (
  <section
    aria-labelledby="process-heading"
    className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0C2340]"
  >
    <div className="relative max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED]/10 text-[#FCD34D] text-xs font-semibold tracking-widest uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
              aria-hidden="true"
            />
            How We Work
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            id="process-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Source Steel in{" "}
            <span className="steel-text">Three Simple Steps</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Our streamlined B2B process means less back-and-forth and faster
            delivery — from first contact to warehouse.
          </p>
        </Reveal>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 relative">
        {/* Connector line (desktop) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-13 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)",
          }}
        />

        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.15}>
            <div className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/15 hover:bg-white/12 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
              {/* Step number ring */}
              <div className="relative mb-6 z-10">
                <div className="w-14 h-14 rounded-full bg-[#F5A623] flex items-center justify-center shadow-[0_4px_20px_rgba(245,166,35,0.4)]">
                  <span className="text-white font-black text-lg tracking-tight">
                    {step.num}
                  </span>
                </div>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#F5A623]/40 scale-125 animate-pulse-ring" />
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F5A623] mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-extrabold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA below steps */}
      <Reveal delay={0.2} className="mt-14 text-center">
        <Link
          href="/contact-us-1"
          className="cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide transition-colors duration-200 shadow-[0_4px_20px_rgba(0,92,163,0.3)] group"
          aria-label="Start the sourcing process with SWEDINOX AB"
        >
          <span>Start Your Inquiry</span>
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
      </Reveal>
    </div>
  </section>
);

/* ═══ CTA BANNER ═══ */
const CTABanner = () => (
  <section
    aria-label="Final call to action"
    className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]"
  >
    {/* Background */}
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% 110%, rgba(3,105,161,0.4) 0%, transparent 60%)",
      }}
    />

    {/* Animated steel-stripe decoration */}
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.6) 20px, rgba(255,255,255,0.6) 21px)",
      }}
    />

    {/* Top accent line */}
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00AADD]/60 to-transparent"
    />

    <div className="relative max-w-4xl mx-auto text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00AADD]/30 bg-[#00AADD]/10 text-[#00AADD] text-xs font-semibold tracking-widest uppercase mb-6">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#00AADD] animate-pulse"
            aria-hidden="true"
          />
          Ready to Source Premium Steel?
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
          Let&apos;s Build Your
          <br />
          <span className="steel-text">Supply Chain</span>
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Join 500+ industrial clients across 10+ countries who trust SWEDINOX
          AB for reliable, certified stainless steel supply.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact-us-1"
            className="cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide transition-colors duration-200 shadow-[0_4px_24px_rgba(0,92,163,0.35)] group"
            aria-label="Contact SWEDINOX AB"
          >
            <span>Contact Our Team</span>
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 hover:border-white/50 text-white text-sm font-bold tracking-wide transition-all duration-200 group backdrop-blur-sm bg-white/5 hover:bg-white/10"
            aria-label="Browse our full product catalog"
          >
            <span>Browse Products</span>
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
      </Reveal>

      {/* Trust badges */}
      <Reveal delay={0.24}>
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            "ISO 9001:2015 CERTIFIED STAINLESS STEEL SUPPLIER",
            "EN 10088 Compliant",
            "ASTM Standards",
            "REACH Compliant",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-slate-500 text-xs font-semibold tracking-widest uppercase"
            >
              <span
                className="w-1 h-1 rounded-full bg-[#F5A623]"
                aria-hidden="true"
              />
              {badge}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ═══════════════════════════ MAIN EXPORT ═══════════════════════════ */
const HomeSections = () => (
  <>
    <ProductsSection />
    <WhySection />
    <IndustriesSection />
    <ProcessSection />
    <CTABanner />
  </>
);

export default HomeSections;
