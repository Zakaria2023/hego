"use client";

import { ShaderAnimation } from "@/app/components/ui/shader-lines";
import { GlowCard } from "@/app/components/ui/spotlight-card";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

/* ─── Shared variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
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

/* ─── Product data ─── */
const products = [
  {
    id: "coils",
    image: "/coils.webp",
    name: "Coils",
    tagline: "Prime, Ex-Prime & 2nd Choice",
    description:
      "Prime, ex-prime and 2nd choice quality in stainless steel coils, stainless steel sheets, and stainless steel strips. Available in a wide range of widths, thicknesses, and surface finishes.",
    specs: [
      "Grades: 304 / 316L / 430",
      "Cold & Hot Rolled",
      "BA, 2B, No.1 Finish",
    ],
    accent: "#0369A1",
    svg: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="cg1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>
          <radialGradient id="cg2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#334155" />
          </radialGradient>
          <linearGradient id="floorC" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2D3748" />
            <stop offset="100%" stopColor="#1A202C" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="260" fill="#1E293B" />
        <rect x="0" y="175" width="400" height="85" fill="url(#floorC)" />
        {/* Big coil left */}
        <ellipse cx="100" cy="170" rx="60" ry="75" fill="url(#cg1)" />
        {[8, 16, 24, 32, 40, 48].map((i) => (
          <ellipse
            key={i}
            cx="100"
            cy="170"
            rx={60 - i}
            ry={75 - i * 1.1}
            fill="none"
            stroke="rgba(148,163,184,0.4)"
            strokeWidth="1.5"
          />
        ))}
        <ellipse cx="100" cy="170" rx="10" ry="13" fill="#0F172A" />
        {/* Mid coil */}
        <ellipse cx="220" cy="178" rx="48" ry="60" fill="url(#cg2)" />
        {[7, 14, 21, 28, 35].map((i) => (
          <ellipse
            key={i}
            cx="220"
            cy="178"
            rx={48 - i}
            ry={60 - i * 1.1}
            fill="none"
            stroke="rgba(203,213,225,0.35)"
            strokeWidth="1.5"
          />
        ))}
        <ellipse cx="220" cy="178" rx="8" ry="10" fill="#0F172A" />
        {/* Small coil right */}
        <ellipse cx="330" cy="185" rx="38" ry="48" fill="url(#cg1)" />
        {[6, 12, 18, 24].map((i) => (
          <ellipse
            key={i}
            cx="330"
            cy="185"
            rx={38 - i}
            ry={48 - i * 1.1}
            fill="none"
            stroke="rgba(148,163,184,0.35)"
            strokeWidth="1.5"
          />
        ))}
        <ellipse cx="330" cy="185" rx="7" ry="9" fill="#0F172A" />
        <rect
          x="0"
          y="175"
          width="400"
          height="2"
          fill="rgba(148,163,184,0.15)"
        />
        {/* Ambient light */}
        <ellipse
          cx="200"
          cy="30"
          rx="150"
          ry="60"
          fill="rgba(56,189,248,0.06)"
        />
      </svg>
    ),
  },
  {
    id: "baby-coils",
    image: "/baby-cols.webp",
    name: "Baby Coils",
    tagline: "From 500 KG",
    description:
      "Weight beginning from 500 KG, applicable to stainless steel coils, stainless steel sheets, and stainless steel strips. Ideal for smaller processing operations.",
    specs: [
      "Min. Weight: 500 KG",
      "Multiple Widths",
      "Custom Slitting Available",
    ],
    accent: "#0284C7",
    svg: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="bcg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="60%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>
          <linearGradient id="floorBC" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1F2937" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="260" fill="#1E293B" />
        <rect x="0" y="180" width="400" height="80" fill="url(#floorBC)" />
        {/* Row of baby coils */}
        {[60, 120, 180, 240, 300, 350].map((cx, i) => (
          <g key={i}>
            <ellipse
              cx={cx}
              cy={195}
              rx={28 - (i % 2) * 4}
              ry={38 - (i % 2) * 5}
              fill="url(#bcg)"
              opacity="0.9"
            />
            {[5, 10, 15].map((j) => (
              <ellipse
                key={j}
                cx={cx}
                cy={195}
                rx={28 - (i % 2) * 4 - j}
                ry={38 - (i % 2) * 5 - j * 1.2}
                fill="none"
                stroke="rgba(148,163,184,0.4)"
                strokeWidth="1.2"
              />
            ))}
            <ellipse cx={cx} cy={195} rx={5} ry={6} fill="#0F172A" />
          </g>
        ))}
        {/* Forklift silhouette hint */}
        <rect
          x="300"
          y="130"
          width="70"
          height="50"
          rx="4"
          fill="rgba(220,38,38,0.7)"
        />
        <rect x="296" y="155" width="14" height="6" rx="1" fill="#B91C1C" />
        <rect x="366" y="140" width="8" height="40" rx="2" fill="#374151" />
        <ellipse
          cx="320"
          cy="182"
          rx="10"
          ry="10"
          fill="#1F2937"
          stroke="#4B5563"
          strokeWidth="2"
        />
        <ellipse
          cx="355"
          cy="182"
          rx="10"
          ry="10"
          fill="#1F2937"
          stroke="#4B5563"
          strokeWidth="2"
        />
        <ellipse
          cx="200"
          cy="30"
          rx="140"
          ry="50"
          fill="rgba(56,189,248,0.05)"
        />
      </svg>
    ),
  },
  {
    id: "sheets",
    image: "/sheets.webp",
    name: "Sheets",
    tagline: "Cold & Hot Rolled",
    description:
      "Cold rolled and hot rolled options available in standard and non-standard sizes, including various types of stainless steel coils, sheets, and stainless steel strips.",
    specs: [
      "Standard & Custom Sizes",
      "BA, 2B, No.1, SB Finish",
      "Grades: 304 / 316L / 430",
    ],
    accent: "#0369A1",
    svg: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sheetG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="sheetG2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="floorS" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="260" fill="#1E293B" />
        <rect x="0" y="185" width="400" height="75" fill="url(#floorS)" />
        {/* Left stack of sheets */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={30}
            y={130 + i * 9}
            width={140}
            height={8}
            rx={1}
            fill={i % 2 === 0 ? "url(#sheetG)" : "url(#sheetG2)"}
            opacity={0.88}
          />
        ))}
        {/* Pallet left */}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={30 + i * 20}
            y={202}
            width={12}
            height={18}
            rx={1}
            fill="#92400E"
            opacity="0.7"
          />
        ))}
        <rect
          x="25"
          y="198"
          width="150"
          height="6"
          rx="1"
          fill="#78350F"
          opacity="0.8"
        />
        {/* Right stack angled */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect
            key={i}
            x={225}
            y={120 + i * 9}
            width={150}
            height={8}
            rx={1}
            fill={i % 2 === 0 ? "url(#sheetG2)" : "url(#sheetG)"}
            opacity={0.88}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={225 + i * 22}
            y={202}
            width={12}
            height={18}
            rx={1}
            fill="#92400E"
            opacity="0.7"
          />
        ))}
        <rect
          x="220"
          y="198"
          width="160"
          height="6"
          rx="1"
          fill="#78350F"
          opacity="0.8"
        />
        <ellipse
          cx="200"
          cy="40"
          rx="160"
          ry="55"
          fill="rgba(56,189,248,0.05)"
        />
      </svg>
    ),
  },
  {
    id: "strips",
    image: "/strips.webp",
    name: "Strips",
    tagline: "From 10 mm Width",
    description:
      "Width beginning from 10 mm for stainless steel coils, stainless steel sheets, and stainless steel strips. Precision-slit to your exact specification.",
    specs: ["Min. Width: 10 mm", "Custom Lengths", "Precision Slitting"],
    accent: "#0C4A6E",
    svg: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="stripG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="floorST" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="260" fill="#1E293B" />
        <rect x="0" y="190" width="400" height="70" fill="url(#floorST)" />
        {/* Bundled strips on pallets */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <rect
            key={i}
            x={40}
            y={120 + i * 6}
            width={120}
            height={5}
            rx={1}
            fill="url(#stripG)"
            opacity={0.8 + i * 0.015}
          />
        ))}
        <rect
          x="35"
          y="193"
          width="130"
          height="6"
          rx="1"
          fill="#78350F"
          opacity="0.8"
        />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={40 + i * 18}
            y={197}
            width={10}
            height={14}
            rx={1}
            fill="#92400E"
            opacity="0.7"
          />
        ))}
        {/* Second bundle */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <rect
            key={i}
            x={230}
            y={128 + i * 6}
            width={130}
            height={5}
            rx={1}
            fill="url(#stripG)"
            opacity={0.8 + i * 0.018}
          />
        ))}
        <rect
          x="225"
          y="193"
          width="140"
          height="6"
          rx="1"
          fill="#78350F"
          opacity="0.8"
        />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={230 + i * 20}
            y={197}
            width={10}
            height={14}
            rx={1}
            fill="#92400E"
            opacity="0.7"
          />
        ))}
        {/* Plastic wrapping hint */}
        <rect
          x="38"
          y="118"
          width="124"
          height="76"
          rx="3"
          fill="none"
          stroke="rgba(148,163,184,0.3)"
          strokeWidth="2"
          strokeDasharray="4,3"
        />
        <rect
          x="228"
          y="126"
          width="134"
          height="68"
          rx="3"
          fill="none"
          stroke="rgba(148,163,184,0.3)"
          strokeWidth="2"
          strokeDasharray="4,3"
        />
        <ellipse
          cx="200"
          cy="40"
          rx="160"
          ry="50"
          fill="rgba(56,189,248,0.04)"
        />
      </svg>
    ),
  },
  {
    id: "circles",
    image: "/circles.webp",
    name: "Circles",
    tagline: "Laser-Cut from 150 mm",
    description:
      "Diameter beginning from 150 mm, cut by laser, available in stainless steel coils, stainless steel sheets, and 430 and 304 grades of stainless steel strips.",
    specs: [
      "Min. Diameter: 150 mm",
      "Laser Cut Precision",
      "Grades: 430 / 304",
    ],
    accent: "#0369A1",
    svg: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="circG" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="60%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>
          <linearGradient id="floorCI" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="260" fill="#1E293B" />
        <rect x="0" y="190" width="400" height="70" fill="url(#floorCI)" />
        {/* Stack of circles on pallets */}
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={i}
            cx="110"
            cy={175 - i * 12}
            rx={55}
            ry={8}
            fill="url(#circG)"
            stroke="rgba(148,163,184,0.3)"
            strokeWidth="1"
          />
        ))}
        {/* Side view circle stack */}
        {[0, 1, 2, 3].map((i) => (
          <ellipse
            key={i}
            cx="280"
            cy={180 - i * 13}
            rx={60}
            ry={9}
            fill="url(#circG)"
            stroke="rgba(148,163,184,0.25)"
            strokeWidth="1"
          />
        ))}
        {/* Flat circle top */}
        <circle
          cx="110"
          cy="115"
          r="55"
          fill="url(#circG)"
          stroke="rgba(203,213,225,0.4)"
          strokeWidth="1.5"
        />
        <circle
          cx="110"
          cy="115"
          r="38"
          fill="none"
          stroke="rgba(148,163,184,0.3)"
          strokeWidth="1"
        />
        <circle
          cx="110"
          cy="115"
          r="20"
          fill="none"
          stroke="rgba(148,163,184,0.25)"
          strokeWidth="1"
        />
        <circle
          cx="280"
          cy="110"
          r="60"
          fill="url(#circG)"
          stroke="rgba(203,213,225,0.35)"
          strokeWidth="1.5"
        />
        <circle
          cx="280"
          cy="110"
          r="42"
          fill="none"
          stroke="rgba(148,163,184,0.3)"
          strokeWidth="1"
        />
        {/* Laser line hint */}
        <line
          x1="50"
          y1="190"
          x2="170"
          y2="190"
          stroke="rgba(56,189,248,0.4)"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <ellipse
          cx="200"
          cy="30"
          rx="150"
          ry="45"
          fill="rgba(56,189,248,0.05)"
        />
      </svg>
    ),
  },
  {
    id: "head-and-tail",
    image: "/head-and-tail.webp",
    name: "Head & Tail",
    tagline: "700–3000 mm · 0.4–6 mm",
    description:
      "Width beginning from 700 mm, length reaching up to 3000 mm, and thickness between 0.4 and 6 mm. Finishes include BA, 2B and S.B. Available in stainless steel coils and sheets.",
    specs: [
      "Width: 700 mm+",
      "Length: up to 3000 mm",
      "Thickness: 0.4–6 mm",
      "BA / 2B / S.B Finish",
    ],
    accent: "#075985",
    svg: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="htG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="htG2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="floorHT" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="260" fill="#1E293B" />
        <rect x="0" y="188" width="400" height="72" fill="url(#floorHT)" />
        {/* Irregular stacked sheets — head and tail pieces */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={20 + i * 3}
            y={120 + i * 9}
            width={160 - i * 6}
            height={7}
            rx={1}
            fill={i % 2 === 0 ? "url(#htG)" : "url(#htG2)"}
            opacity={0.88}
          />
        ))}
        {/* Blue-wrapped piece hint */}
        <rect
          x="210"
          y="100"
          width="170"
          height="90"
          rx="3"
          fill="rgba(37,99,235,0.25)"
          stroke="rgba(56,189,248,0.4)"
          strokeWidth="1.5"
        />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={215}
            y={105 + i * 9}
            width={160}
            height={7}
            rx={1}
            fill={i % 2 === 0 ? "url(#htG2)" : "url(#htG)"}
            opacity={0.85}
          />
        ))}
        {/* Rack/shelf uprights */}
        <rect
          x="16"
          y="90"
          width="6"
          height="100"
          rx="2"
          fill="#4B5563"
          opacity="0.6"
        />
        <rect
          x="190"
          y="90"
          width="6"
          height="100"
          rx="2"
          fill="#4B5563"
          opacity="0.6"
        />
        <rect
          x="16"
          y="88"
          width="180"
          height="6"
          rx="2"
          fill="#6B7280"
          opacity="0.5"
        />
        <rect
          x="16"
          y="148"
          width="180"
          height="4"
          rx="2"
          fill="#6B7280"
          opacity="0.4"
        />
        <ellipse
          cx="200"
          cy="35"
          rx="160"
          ry="50"
          fill="rgba(56,189,248,0.04)"
        />
      </svg>
    ),
  },
];

/* ─── Product Card ─── */
const ProductCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <GlowCard
      customSize
      className="overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.06)] cursor-default"
    >
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{
          duration: 0.7,
          delay: (index % 3) * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative rounded-2xl overflow-hidden cursor-default h-full"
        whileHover={{
          y: -8,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        }}
        aria-label={`${product.name} – ${product.tagline}`}
      >
        {/* ── IMAGE AREA ── */}
        <div className="relative overflow-hidden h-52 bg-[#0F172A]">
          {/* Product image */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={hovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          {/* Hover overlay: specs reveal */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-5"
            style={{
              background: `linear-gradient(to top, ${product.accent}ee 0%, ${product.accent}99 40%, transparent 100%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden={!hovered}
          >
            <motion.ul
              className="flex flex-col gap-1.5"
              initial="hidden"
              animate={hovered ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.05 },
                },
              }}
            >
              {product.specs.map((spec) => (
                <motion.li
                  key={spec}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="flex items-center gap-2 text-white text-xs font-semibold"
                >
                  <span
                    className="w-1 h-1 rounded-full bg-white/80 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {spec}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Tag pill */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0F172A]/70 backdrop-blur-sm border border-white/10 text-[10px] text-slate-300 font-semibold tracking-wide">
            {product.tagline}
          </div>

          {/* Shine sweep on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.12) 50%,transparent 60%)",
              backgroundSize: "200% 100%",
            }}
            animate={
              hovered
                ? { backgroundPosition: ["200% center", "-200% center"] }
                : { backgroundPosition: "200% center" }
            }
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>

        {/* ── CONTENT ── */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: product.accent }}
              >
                Product
              </span>
              <h3 className="mt-0.5 text-xl font-extrabold text-[#0F172A] leading-tight">
                {product.name}
              </h3>
            </div>
            {/* Icon circle */}
            <motion.div
              className="flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center"
              style={{
                borderColor: `${product.accent}33`,
                backgroundColor: `${product.accent}0D`,
              }}
              animate={
                hovered
                  ? { scale: 1.15, borderColor: product.accent }
                  : { scale: 1 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45"
                style={{ color: product.accent }}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>

          {/* Animated underline */}
          <div className="mt-3 h-0.5 rounded-full bg-slate-100 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${product.accent}, ${product.accent}88)`,
              }}
              animate={hovered ? { width: "100%" } : { width: "30%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <p className="mt-4 text-[#475569] text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Request quote link */}
          <motion.div className="mt-5">
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold cursor-pointer group/link"
              style={{ color: product.accent }}
              aria-label={`View details for ${product.name}`}
            >
              <span>Request Quote</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
                animate={hovered ? { x: 4 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </motion.article>
    </GlowCard>
  );
};

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
const ProductsClient = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Products – SWEDINOX AB",
            url: "https://swedinox.se/products",
            description:
              "Full catalog of semi-manufactured stainless steel products by SWEDINOX AB.",
            hasPart: products.map((p) => ({
              "@type": "Product",
              name: p.name,
              description: p.description,
              brand: { "@type": "Brand", name: "SWEDINOX AB" },
            })),
          }),
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        aria-label="Products catalog hero"
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
          className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
          }}
        />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36"
        >
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0369A1] transition-colors duration-150 cursor-pointer"
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
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="text-[#0F172A] font-medium" aria-current="page">
                Products
              </li>
            </ol>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold tracking-widest uppercase mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"
                aria-hidden="true"
              />
              6 Product Categories
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-3xl">
              Our <span className="steel-text">Stainless Steel</span>
              <br />
              Product Catalog
            </h1>
            <p className="mt-5 text-[#64748B] text-lg max-w-xl leading-relaxed">
              Semi-manufactured stainless steel in every form your operation
              requires — prime, ex-prime and 2nd choice quality, hot &amp; cold
              rolled, globally delivered.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <main className="bg-[#F8FAFC]">
        <section
          aria-labelledby="products-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-[#0369A1] text-xs font-bold tracking-widest uppercase">
                What We Offer
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="products-heading"
                className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight"
              >
                All Products
              </h2>
              <div
                aria-hidden="true"
                className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-[#0369A1] to-[#38BDF8] mx-auto"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[#334155] max-w-xl mx-auto leading-relaxed">
                Hover over any product to reveal specifications. Click
                &ldquo;Request Quote&rdquo; to get in touch with our team.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        {/* ── GRADES STRIP ── */}
        <section
          aria-label="Available steel grades"
          className="bg-[#F8FAFC] relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-10">
              <Reveal>
                <span className="text-[#0369A1] text-xs font-bold tracking-widest uppercase">
                  Specifications
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  Available Grades &amp; Finishes
                </h2>
              </Reveal>
            </div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {[
                "Grade 304",
                "Grade 316L",
                "Grade 430",
                "BA Finish",
                "2B Finish",
                "S.B Finish",
              ].map((grade) => (
                <motion.div
                  key={grade}
                  variants={fadeUp}
                  className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-[0_8px_30px_rgba(3,105,161,0.08)] transition-all duration-250 cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 text-[#0369A1]"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[#334155] text-xs font-semibold text-center leading-tight">
                    {grade}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          aria-label="Request a quote"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
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
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0369A1] via-[#38BDF8] to-[#0369A1]"
              />
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-[60px]"
                style={{
                  background: "radial-gradient(circle,#0369A1,transparent)",
                }}
              />

              <div className="relative text-center px-8 sm:px-16 py-16">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0369A1]/30 bg-[#0369A1]/8 text-[#0369A1] text-xs font-semibold tracking-widest uppercase mb-5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#0369A1] animate-pulse"
                    aria-hidden="true"
                  />
                  Need a Custom Specification?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight max-w-xl mx-auto leading-tight">
                  Can&apos;t Find What You&apos;re Looking For?
                </h2>
                <p className="mt-4 text-[#334155] max-w-lg mx-auto leading-relaxed">
                  We accommodate special alloy requirements and specific
                  dimension needs beyond our standard listings. Contact our team
                  — we&apos;ll source it for you.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact-us-1"
                    className="cta-glow relative inline-flex items-center gap-2 px-8 py-4 bg-[#0369A1] hover:bg-[#0284C7] text-white text-sm font-bold tracking-widest uppercase rounded-sm transition-colors duration-200 cursor-pointer overflow-hidden group"
                    aria-label="Contact us for custom stainless steel specifications"
                  >
                    <span className="relative z-10">
                      Request a Custom Quote
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </Link>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-[#CBD5E1] hover:border-[#0369A1] text-[#334155] hover:text-[#0369A1] text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-200 cursor-pointer"
                    aria-label="Learn more about SWEDINOX AB"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
};

export default ProductsClient;
