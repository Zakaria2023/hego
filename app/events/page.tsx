import EventsPage from "@/components/pages/events/events-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Stainless Steel News & Trade Shows",
  description:
    "Explore SWEDINOX AB news, stainless steel industry guides, trade show participation, and market insights for buyers, engineers, and procurement teams sourcing prime, ex-prime, and second-choice stainless steel.",
  path: "/events",
  image: seoImages.events,
  category: "News and Events",
  keywords: [
    "stainless steel industry news",
    "second choice stainless steel market insights",
    "stainless steel trade show",
    "stainless steel guides",
    "SWEDINOX AB events",
    "metal industry insights",
  ],
});

export default EventsPage;
