import Reveal from "@/components/shared/reveal";
import type { Product } from "@/app/products/data";

type Props = { product: Product };

const ProductBenefitsSection = ({ product }: Props) => {
  if (!product.benefits?.length) return null;

  return (
    <section className="border-b border-[#E2E8F0] bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
            Why Choose Us
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
            Material Ready for the Next Production Step
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-[#E2E8F0] p-6">
                <div
                  className="mb-4 h-1 w-8 rounded-full"
                  style={{ backgroundColor: product.accent }}
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-sm font-extrabold text-[#0F172A]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefitsSection;
