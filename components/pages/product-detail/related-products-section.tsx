import ProductGrid from "@/components/products/product-grid";
import { getRelatedProductCards } from "@/components/products/product-catalog";
import Reveal from "@/components/shared/reveal";

type RelatedProductsSectionProps = {
  slug: string;
};

const RelatedProductsSection = ({ slug }: RelatedProductsSectionProps) => {
  const relatedProducts = getRelatedProductCards(slug);

  return (
    <section
      aria-labelledby="related-heading"
      className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <h2
          id="related-heading"
          className="mb-10 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl"
        >
          More Products
        </h2>
      </Reveal>
      <ProductGrid
        products={relatedProducts}
        ctaLabel="View Details"
        compact
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      />
    </section>
  );
};

export default RelatedProductsSection;
