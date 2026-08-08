import ProductsPage from "@/components/pages/products/products-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Stainless Steel Products Catalog",
  description:
    "Explore stainless steel coils, sheets, strips, circles, baby coils, and head and tail sheets in multiple grades and finishes from SWEDINOX AB.",
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
