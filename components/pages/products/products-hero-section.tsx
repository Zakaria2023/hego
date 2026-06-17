import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ProductsHeroSection = () => (
  <section
    aria-label="Products catalog hero"
    className="relative flex min-h-[52vh] items-end overflow-hidden bg-white"
  >
    <div
      aria-hidden="true"
      className="absolute top-[-15%] right-[-5%] w-150 h-150 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(219,234,254,0.55) 0%, transparent 70%)",
      }}
    />
    <div
      aria-hidden="true"
      className="absolute bottom-[-10%] left-[-8%] w-105 h-105 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(186,230,253,0.3) 0%, transparent 70%)",
      }}
    />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-36 pb-16 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-xs text-[#475569]">
          <li>
            <Link
              href="/"
              className="transition-colors duration-150 hover:text-[#005CA3]"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li className="font-medium text-[#0F172A]" aria-current="page">
            Products
          </li>
        </ol>
      </nav>

      <div className="animate-slide-up">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#005CA3]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#F5A623] animate-pulse"
            aria-hidden="true"
          />
          6 Product Categories
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl animate-slide-in">
          Our <span className="steel-text">Stainless Steel</span>
          <br />
          Product Catalog
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#64748B]">
          Semi-manufactured stainless steel in every form your operation
          requires — prime, ex-prime and 2nd choice quality, hot and cold
          rolled, globally delivered.
        </p>
      </div>
    </div>
  </section>
);

export default ProductsHeroSection;
