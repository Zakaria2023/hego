import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Stainless Steel Products – Coils, Sheets, Strips, Circles & More",
  description:
    "Browse SWEDINOX AB's full catalog of semi-manufactured stainless steel: coils, baby coils, sheets, strips, circles and head & tail. Grades 304, 316L, 430. Prime, ex-prime & 2nd choice. Hot & cold rolled. Global delivery from Sweden.",
  keywords: [
    "stainless steel coils",
    "stainless steel sheets",
    "stainless steel strips",
    "baby coils stainless",
    "steel circles blanks",
    "head and tail stainless steel",
    "cold rolled stainless steel",
    "hot rolled stainless steel",
    "304 stainless steel",
    "316L stainless steel",
    "430 stainless steel",
    "semi manufactured stainless",
    "prime stainless steel",
    "ex-prime stainless steel",
    "2nd choice stainless steel",
    "stainless steel supplier Europe",
  ],
  authors: [{ name: "SWEDINOX AB", url: "https://swedinox.se" }],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Stainless Steel Products Catalog – SWEDINOX AB",
    description:
      "Coils, baby coils, sheets, strips, circles and head & tail. Grades 304, 316L, 430. Prime & 2nd choice quality. Hot & cold rolled. Delivered globally from Sweden.",
    url: "https://swedinox.se/products",
    siteName: "SWEDINOX AB",
    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "SWEDINOX AB stainless steel products catalog",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stainless Steel Products – SWEDINOX AB",
    description:
      "Full catalog: coils, sheets, strips, circles. Grades 304, 316L, 430. Prime & 2nd choice. Global delivery from Sweden.",
    images: [
      { url: "/og-products.jpg", alt: "SWEDINOX AB stainless steel catalog" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ProductsPage = () => <ProductsClient />;

export default ProductsPage;
