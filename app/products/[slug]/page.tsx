import ProductDetailPage from "@/components/pages/product-detail/product-detail-page";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "../data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return buildPageMetadata({
    title: product.seoTitle ?? product.name,
    description: `${product.description} Source prime, ex-prime, and second-choice stainless steel supply options from SWEDINOX AB.`,
    path: `/products/${product.slug}`,
    image: {
      url: product.image,
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
