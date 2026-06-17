import { products } from "@/app/products/data";

const productBadges: Record<string, string> = {
  coils: "Industrial Coil Supply",
  "baby-coils": "From 500 KG",
  sheets: "Cold & Hot Rolled",
  strips: "From 10 mm Width",
  circles: "From 150 mm Diameter",
  "head-and-tail": "Variable-Length Sheets",
};

const productPreviewSpecs: Record<string, string[]> = {
  coils: ["304 / 316L / 430", "Cold & hot rolled", "BA / 2B / 1D finishes"],
  "baby-coils": ["From 500 KG", "Custom slit widths", "2B / BA / polished"],
  sheets: ["Standard or custom sizes", "Cold & hot rolled", "1D / 2B / BA"],
  strips: ["From 10 mm width", "Slit edge options", "Precision slit supply"],
  circles: ["From 150 mm diameter", "Laser-cut options", "304 / 316L / 430"],
  "head-and-tail": ["700+ mm width", "Up to 3000 mm", "0.4-6 mm thickness"],
};

const productCardImages: Record<string, string> = {
  coils: "/coils-card.webp",
  "baby-coils": "/baby-coils-card.webp",
  sheets: "/sheets-card.webp",
  strips: "/strips-card.webp",
  circles: "/circles-card.webp",
  "head-and-tail": "/head-and-tail-card.webp",
};

export type ProductCardData = {
  id: string;
  slug: string;
  image: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  previewSpecs: string[];
  accent: string;
};

export const productCatalog: ProductCardData[] = products.map((product) => ({
  id: product.id,
  slug: product.slug,
  image: productCardImages[product.slug] ?? product.image,
  name: product.name,
  tagline: product.tagline,
  badge: productBadges[product.slug] ?? product.tagline,
  description: product.description,
  previewSpecs: productPreviewSpecs[product.slug] ?? product.specs.slice(0, 3),
  accent: product.accent,
}));

export const getRelatedProductCards = (slug: string, limit = 3) =>
  productCatalog.filter((product) => product.slug !== slug).slice(0, limit);
