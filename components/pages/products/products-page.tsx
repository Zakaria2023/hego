import { productCatalog } from "@/components/products/product-catalog";
import StructuredData from "@/components/shared/structured-data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import ProductsCatalogSection from "./products-catalog-section";
import ProductsGradesSection from "./products-grades-section";
import ProductsHeroSection from "./products-hero-section";
import ProductsInquirySection from "./products-inquiry-section";

const ProductsPage = () => (
  <>
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Products - SWEDINOX AB",
        url: `${site.url}/products`,
        description:
          "Full catalog of prime, ex-prime, and second-choice semi-manufactured stainless steel products by SWEDINOX AB.",
        keywords:
          "stainless steel products, second choice stainless steel, ex-prime stainless steel, stainless steel coils, stainless steel sheets, stainless steel strips, stainless steel circles",
        mainEntity: {
          "@type": "ItemList",
          name: "Stainless Steel Product Catalog",
          numberOfItems: productCatalog.length,
          itemListElement: productCatalog.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Thing",
              name: product.name,
              description: product.description,
              url: `${site.url}/products/${product.slug}`,
            },
          })),
        },
      }}
    />
    <StructuredData
      data={buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
      ])}
    />

    <ProductsHeroSection />

    <main className="bg-[#F8FAFC]">
      <ProductsCatalogSection />
      <ProductsGradesSection />
      <ProductsInquirySection />
    </main>
  </>
);

export default ProductsPage;
