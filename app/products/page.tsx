import ProductsPage from "@/components/pages/products/products-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Stainless Steel Products - Coils, Sheets, Strips, Circles and More",
  description:
    "Browse the SWEDINOX AB catalog of prime, ex-prime, and second-choice stainless steel coils, baby coils, sheets, strips, circles, and head and tail sheets in grades including 304, 316L, and 430.",
  path: "/products",
  image: seoImages.products,
  category: "Products Catalog",
  keywords: [
    "stainless steel product catalog",
    "second choice stainless steel products",
    "buy stainless steel coils",
    "buy stainless steel sheets",
    "industrial stainless steel grades",
    "stainless steel stocklot products",
  ],
});

const ProductsRoute = () => <ProductsPage />;

export default ProductsRoute;
