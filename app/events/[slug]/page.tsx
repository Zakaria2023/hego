import EventDetailPage from "@/components/pages/event-detail/event-detail-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "../data";

type Props = { params: Promise<{ slug: string }> };

const eventSeo: Record<string, { title: string; description: string }> = {
  "stainless-steel-sheets-guide-applications": {
    title: "Stainless Steel Sheets Guide & Applications",
    description:
      "Learn how to select stainless steel sheets by grade, finish, thickness, and application for reliable performance in industrial projects.",
  },
  "pleasure-to-visit-egypt": {
    title: "SWEDINOX AB at Metal & Steel Egypt 2023",
    description:
      "Meet SWEDINOX AB at Metal & Steel Egypt 2023 in Cairo, 2–4 September, at Stand C17 to discuss stainless steel sourcing and supply.",
  },
  "mecc-maastricht": {
    title: "SWEDINOX AB at Stainless Steel World 2023",
    description:
      "Meet SWEDINOX AB at Stainless Steel World Conference & Expo 2023 in Maastricht, 26–28 September, at Stand J39 to discuss your requirements.",
  },
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const seo = eventSeo[post.slug];

  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
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
