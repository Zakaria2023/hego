import StructuredData from "@/components/shared/structured-data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { websiteId } from "@/lib/structured-data";
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
        "@type": "ItemPage",
        name: product.name,
        description: `${product.description} Prime, ex-prime, and second-choice stainless steel supply options are available from SWEDINOX AB.`,
        url: `${site.url}/products/${product.slug}`,
        primaryImageOfPage: `${site.url}${product.image}`,
        keywords: [
          product.name,
          ...product.grades.map((grade) => `grade ${grade}`),
          ...product.finishes.map((finish) => `${finish} finish`),
          "second choice stainless steel",
          "ex-prime stainless steel",
        ].join(", "),
        isPartOf: { "@id": websiteId },
        mainEntity: {
          "@type": "Thing",
          name: product.name,
          description: product.longDescription,
          image: `${site.url}${product.image}`,
          url: `${site.url}/products/${product.slug}`,
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
