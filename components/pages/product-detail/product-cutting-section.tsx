import Reveal from "@/components/shared/reveal";
import type { Product } from "@/app/products/data";

type Props = { product: Product };

const ProductCuttingSection = ({ product }: Props) => {
  if (!product.cuttingOptions?.length) return null;

  return (
    <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
            {product.cuttingSubtitle}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
            {product.cuttingTitle}
          </h2>
        </Reveal>
        {product.cuttingDescription && (
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#334155]">
              {product.cuttingDescription}
            </p>
          </Reveal>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {product.cuttingOptions.map((option, i) => (
            <Reveal key={option.title} delay={0.07 * i}>
              <div className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl text-white text-sm font-extrabold"
                  style={{ backgroundColor: product.accent }}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <h3 className="mb-2 text-sm font-extrabold text-[#0F172A]">
                  {option.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {option.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {product.cuttingNote && (
          <Reveal delay={0.15}>
            <p className="mt-6 rounded-lg border border-[#E2E8F0] bg-white px-5 py-4 text-xs leading-relaxed text-[#64748B]">
              <span className="font-bold text-[#334155]">Important Note: </span>
              {product.cuttingNote}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default ProductCuttingSection;
