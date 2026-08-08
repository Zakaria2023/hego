import EventsPage from "@/components/pages/events/events-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Stainless Steel News & Trade Shows",
  description:
    "Read stainless steel industry guides, SWEDINOX AB company news, and details of upcoming and past international trade show appearances.",
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
