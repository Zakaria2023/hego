import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "./product-grid";
import type { ProductCardData } from "./product-catalog";

type ProductSectionProps = {
  id: string;
  badge: string;
  title: ReactNode;
  description: string;
  products: ProductCardData[];
  cardCtaLabel?: string;
  className?: string;
  theme?: "light" | "dark";
  eagerImageSlugs?: string[];
  cta?: {
    href: string;
    label: string;
    ariaLabel: string;
  };
};

const ProductSection = ({
  id,
  badge,
  title,
  description,
  products,
  cardCtaLabel,
  className,
  theme = "light",
  eagerImageSlugs,
  cta,
}: ProductSectionProps) => {
  const sectionClassName =
    className ??
    (theme === "dark"
      ? "relative overflow-hidden bg-[#0F172A] px-4 py-24 sm:px-6 lg:px-8"
      : "bg-[#F8FAFC] px-4 py-24 sm:px-6 lg:px-8");
  const badgeClassName =
    theme === "dark"
      ? "inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#FCD34D]"
      : "inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#005CA3]";
  const titleClassName =
    theme === "dark"
      ? "mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
      : "mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl";
  const descriptionClassName =
    theme === "dark"
      ? "mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
      : "mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#64748B] sm:text-lg";
  const ctaClassName =
    theme === "dark"
      ? "group inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:border-[#F5A623] hover:bg-white/10"
      : "group inline-flex items-center gap-2 rounded-full border-2 border-[#005CA3] px-8 py-3.5 text-sm font-bold tracking-wide text-[#005CA3] transition-all duration-200 hover:bg-[#005CA3] hover:text-white";

  return (
    <section aria-labelledby={id} className={sectionClassName}>
      {theme === "dark" ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(0,170,221,0.18) 0%, transparent 32%), radial-gradient(circle at bottom right, rgba(245,166,35,0.12) 0%, transparent 28%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-white/10"
          />
        </>
      ) : null}

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className={badgeClassName}>
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#F5A623] animate-pulse"
              aria-hidden="true"
            />
            {badge}
          </span>
          <h2 id={id} className={titleClassName}>
            {title}
          </h2>
          <p className={descriptionClassName}>{description}</p>
        </div>

        <ProductGrid
          products={products}
          ctaLabel={cardCtaLabel}
          eagerImageSlugs={eagerImageSlugs}
        />

        {cta ? (
          <div className="mt-12 text-center">
            <Link
              href={cta.href}
              className={ctaClassName}
              aria-label={cta.ariaLabel}
            >
              <span>{cta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ProductSection;
