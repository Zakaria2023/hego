"use client";

import { GlowCard } from "@/components/ui/spotlight-card";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { revealEase } from "../shared/motion";
import type { ProductCardData } from "./product-catalog";

type ProductCardProps = {
  product: ProductCardData;
  index?: number;
  ctaLabel?: string;
  compact?: boolean;
};

const ProductCard = ({
  product,
  index = 0,
  ctaLabel = "View Details",
  compact = false,
}: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Link href={`/products/${product.slug}`} className="block h-full">
      <GlowCard
        customSize
        className="h-full overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
      >
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.7,
            delay: (index % 3) * 0.12,
            ease: revealEase,
          }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{
            y: -8,
            transition: { duration: 0.35, ease: revealEase },
          }}
          className="group h-full cursor-pointer overflow-hidden rounded-2xl bg-white"
          aria-label={`View ${product.name} - ${product.tagline}`}
        >
          <div
            className={`relative overflow-hidden bg-[#0F172A] ${
              compact ? "h-48" : "h-52"
            }`}
          >
            <motion.div
              className="absolute inset-0 h-full w-full"
              animate={hovered ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: revealEase }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>

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
                {product.previewSpecs.map((spec) => (
                  <motion.li
                    key={spec}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: revealEase },
                      },
                    }}
                    className="flex items-center gap-2 text-xs font-semibold text-white"
                  >
                    <span
                      className="h-1 w-1 flex-shrink-0 rounded-full bg-white/80"
                      aria-hidden="true"
                    />
                    {spec}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <div className="absolute top-3 left-3 rounded-full border border-white/10 bg-[#0F172A]/70 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-300 backdrop-blur-sm">
              {product.badge}
            </div>

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

          <div className={compact ? "p-5" : "p-6"}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: product.accent }}
                >
                  Product
                </span>
                <h3 className="mt-0.5 text-xl font-extrabold leading-tight text-[#0F172A]">
                  {product.name}
                </h3>
              </div>
              <motion.div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2"
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
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                  style={{ color: product.accent }}
                  aria-hidden="true"
                />
              </motion.div>
            </div>

            <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${product.accent}, ${product.accent}88)`,
                }}
                animate={hovered ? { width: "100%" } : { width: "30%" }}
                transition={{ duration: 0.4, ease: revealEase }}
              />
            </div>

            <p
              className={`mt-4 leading-relaxed text-[#475569] ${
                compact ? "line-clamp-2 text-sm" : "line-clamp-3 text-sm"
              }`}
            >
              {product.description}
            </p>

            <motion.div className="mt-5">
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: product.accent }}
              >
                <span>{ctaLabel}</span>
                <motion.span
                  className="h-4 w-4"
                  aria-hidden="true"
                  animate={hovered ? { x: 4 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </span>
            </motion.div>
          </div>
        </motion.article>
      </GlowCard>
    </Link>
  );
};

export default ProductCard;
