import ProductSection from "@/components/products/product-section";
import { productCatalog } from "@/components/products/product-catalog";

const ProductsCatalogSection = () => (
  <ProductSection
    id="products-heading"
    badge="What We Offer"
    title="All Products"
    description="Browse the stainless steel forms we supply for fabricators, wholesalers, processors, and industrial buyers worldwide."
    products={productCatalog}
    cardCtaLabel="Request Quote"
    className="px-4 py-20 sm:px-6 lg:px-8"
  />
);

export default ProductsCatalogSection;
