import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProductCardData } from "./product-catalog";

type ProductCardProps = {
  product: ProductCardData;
  index?: number;
  ctaLabel?: string;
  compact?: boolean;
};

const ProductCard = ({
  product,
  ctaLabel = "View Details",
  compact = false,
}: ProductCardProps) => {
  const imageHeight = compact ? "h-48" : "h-52";

  return (
    <Link href={`/products/${product.slug}`} prefetch={false} className="block h-full">
      <article
        className="group h-full overflow-hidden rounded-2xl border border-[#D9E3EE] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FCD34D] hover:shadow-[0_12px_36px_rgba(15,23,42,0.12)]"
        aria-label={`View ${product.name} - ${product.tagline}`}
      >
        <div className={`relative overflow-hidden bg-[#0F172A] ${imageHeight}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            quality={60}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to top, ${product.accent}ee 0%, ${product.accent}99 40%, transparent 100%)`,
            }}
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ul className="flex flex-col gap-1.5">
              {product.previewSpecs.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-2 text-xs font-semibold text-white"
                >
                  <span
                    className="h-1 w-1 shrink-0 rounded-full bg-white/80"
                    aria-hidden="true"
                  />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute top-3 left-3 rounded-full border border-white/10 bg-[#0F172A]/70 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-300 backdrop-blur-sm">
            {product.badge}
          </div>
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

            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-transform duration-300 group-hover:scale-110"
              style={{
                borderColor: `${product.accent}33`,
                backgroundColor: `${product.accent}0D`,
              }}
            >
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                style={{ color: product.accent }}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full w-[30%] rounded-full transition-[width] duration-300 group-hover:w-full"
              style={{
                background: `linear-gradient(90deg, ${product.accent}, ${product.accent}88)`,
              }}
            />
          </div>

          <p
            className={`mt-4 leading-relaxed text-[#475569] ${
              compact ? "line-clamp-2 text-sm" : "line-clamp-3 text-sm"
            }`}
          >
            {product.description}
          </p>

          <div className="mt-5">
            <span
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: product.accent }}
            >
              <span>{ctaLabel}</span>
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
