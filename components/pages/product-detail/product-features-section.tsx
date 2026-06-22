import Reveal from "@/components/shared/reveal";
import type { Product } from "@/app/products/data";

type Props = { product: Product };

const ProductFeaturesSection = ({ product }: Props) => {
  if (!product.features?.length) return null;

  return (
    <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
            {product.overviewSubtitle}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-3xl">
            {product.overviewTitle}
          </h2>
        </Reveal>
        {product.overviewDescription && (
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#334155]">
              {product.overviewDescription}
            </p>
          </Reveal>
        )}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <div
                  className="mb-4 h-2 w-10 rounded-full"
                  style={{ backgroundColor: product.accent }}
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-sm font-extrabold text-[#0F172A]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeaturesSection;
