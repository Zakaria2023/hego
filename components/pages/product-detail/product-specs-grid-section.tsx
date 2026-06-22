import Reveal from "@/components/shared/reveal";
import type { Product } from "@/app/products/data";

type Props = { product: Product };

const ProductSpecsGridSection = ({ product }: Props) => {
  if (!product.specsGridItems?.length) return null;

  return (
    <section className="border-b border-[#E2E8F0] bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
            Available Options
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
            Circle Specifications
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.specsGridItems.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <div className="rounded-xl border border-[#E2E8F0] p-5">
                <p
                  className="mb-1 text-xs font-extrabold uppercase tracking-widest"
                  style={{ color: product.accent }}
                >
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-[#334155]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {product.specsNote && (
          <Reveal delay={0.15}>
            <p className="mt-6 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4 text-xs leading-relaxed text-[#64748B]">
              <span className="font-bold text-[#334155]">Technical Note: </span>
              {product.specsNote}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default ProductSpecsGridSection;
