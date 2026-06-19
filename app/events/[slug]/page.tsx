import EventDetailPage from "@/components/pages/event-detail/event-detail-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/events/${post.slug}`,
    image:
      post.category === "Industry Guide"
        ? seoImages.products
        : seoImages.events,
    category: post.category,
    keywords: [
      post.category,
      post.title,
      "second choice stainless steel",
      "stainless steel industry article",
      "SWEDINOX AB insights",
    ],
    type: "article",
    section: post.category,
    publishedTime: post.dateISO,
    modifiedTime: post.dateISO,
    tags: [
      "stainless steel",
      "second choice stainless steel",
      post.category,
      "SWEDINOX AB",
    ],
  });
}

const EventPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return <EventDetailPage slug={slug} />;
};

export default EventPage;
