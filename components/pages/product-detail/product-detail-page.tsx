import StructuredData from "@/components/shared/structured-data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import type { Product } from "@/app/products/data";
import ProductHeroSection from "./product-hero-section";
import ProductInquiryBanner from "./product-inquiry-banner";
import ProductOverviewSection from "./product-overview-section";
import RelatedProductsSection from "./related-products-section";

type ProductDetailPageProps = {
  product: Product;
};

const ProductDetailPage = ({
  product,
}: ProductDetailPageProps) => (
  <>
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `https://swedinox.se${product.image}`,
        brand: { "@type": "Brand", name: "SWEDINOX AB" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          seller: { "@type": "Organization", name: "SWEDINOX AB" },
        },
      }}
    />
    <StructuredData
      data={buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.name, path: `/products/${product.slug}` },
      ])}
    />

    <ProductHeroSection product={product} />

    <main className="bg-white">
      <ProductOverviewSection product={product} />
      <ProductInquiryBanner product={product} />
      <RelatedProductsSection slug={product.slug} />
    </main>
  </>
);

export default ProductDetailPage;
