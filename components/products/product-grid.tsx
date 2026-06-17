import ProductCard from "./product-card";
import type { ProductCardData } from "./product-catalog";

type ProductGridProps = {
  products: ProductCardData[];
  ctaLabel?: string;
  compact?: boolean;
  className?: string;
};

const ProductGrid = ({
  products,
  ctaLabel,
  compact = false,
  className = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
}: ProductGridProps) => (
  <div className={className}>
    {products.map((product, index) => (
      <ProductCard
        key={product.slug}
        product={product}
        index={index}
        ctaLabel={ctaLabel}
        compact={compact}
      />
    ))}
  </div>
);

export default ProductGrid;
