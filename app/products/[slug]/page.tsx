import ProductDetailPage from "@/components/pages/product-detail/product-detail-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "../data";

type Props = { params: Promise<{ slug: string }> };

const productSeoDescriptions: Record<string, string> = {
  coils:
    "Source stainless steel coils in prime, ex-prime, and second-choice quality, with multiple grades, finishes, widths, and thicknesses available.",
  "baby-coils":
    "Order stainless steel baby coils from 500 kg for flexible handling, smaller production runs, and efficient stock management in multiple grades.",
  sheets:
    "Source stainless steel sheets in standard or custom dimensions, with prime, ex-prime, and second-choice options across multiple grades and finishes.",
  strips:
    "Explore stainless steel strips from 10 mm wide, supplied in multiple grades, finishes, thicknesses, and edge options for industrial production.",
  circles:
    "Source precision-cut stainless steel circles from 150 mm diameter in multiple grades, thicknesses, finishes, and dimensions for fabrication.",
  "head-and-tail":
    "Source cost-effective stainless steel head and tail sheets in variable dimensions, grades, and finishes for fabrication and trial production.",
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  const imageUrl = product.image ?? seoImages.products.url;

  return buildPageMetadata({
    title: product.seoTitle ?? product.name,
    description: productSeoDescriptions[product.slug],
    path: `/products/${product.slug}`,
    image: {
      url: imageUrl,
      alt: `${product.name} stainless steel product supplied by SWEDINOX AB`,
    },
    category: "Product Detail",
    keywords: [
      product.name.toLowerCase(),
      product.tagline.toLowerCase(),
      "second choice stainless steel",
      `second choice ${product.name.toLowerCase()}`,
      `ex-prime ${product.name.toLowerCase()}`,
      ...product.grades.map((grade) => `grade ${grade} stainless steel`),
      ...product.finishes.map((finish) => `${finish} stainless steel`),
    ],
  });
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return <ProductDetailPage product={product} />;
};

export default ProductPage;
