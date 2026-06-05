import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "../data";
import EventDetailClient from "./EventDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category,
      "SWEDINOX AB",
      "stainless steel",
      "stainless steel industry",
      post.title,
    ],
    authors: [{ name: "SWEDINOX AB", url: "https://swedinox.se" }],
    alternates: { canonical: `/events/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://swedinox.se/events/${post.slug}`,
      siteName: "SWEDINOX AB",
      images: [
        {
          url: "/og-events.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/jpeg",
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.dateISO,
      authors: ["SWEDINOX AB"],
      section: post.category,
      tags: ["stainless steel", post.category, "SWEDINOX AB"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [{ url: "/og-events.jpg", alt: post.title }],
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
}

const EventDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <EventDetailClient slug={slug} />;
};

export default EventDetailPage;
