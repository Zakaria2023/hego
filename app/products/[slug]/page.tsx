import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "../data";
import ProductDetailClient from "./ProductDetailClient";

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

  return {
    title: `${product.name} - ${product.tagline}`,
    description: product.description,
    keywords: [
      product.name.toLowerCase(),
      ...product.grades.map((grade) => `grade ${grade} stainless steel`),
      "SWEDINOX AB",
      "semi manufactured stainless steel",
      "stainless steel supplier Sweden",
    ],
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} - SWEDINOX AB`,
      description: product.description,
      url: `https://swedinox.se/products/${product.slug}`,
      siteName: "SWEDINOX AB",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `SWEDINOX AB - ${product.name}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - SWEDINOX AB`,
      description: product.description,
      images: [product.image],
    },
  };
}

const ProductDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return <ProductDetailClient slug={slug} />;
};

export default ProductDetailPage;
