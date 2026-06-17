import FaqPage from "@/components/pages/faq/faq-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ - Stainless Steel Products, Grades, Ordering and Delivery",
  description:
    "Get answers to common SWEDINOX AB questions about stainless steel grades, product formats, lead times, shipping, fabrication, and sourcing decisions for industrial buyers.",
  path: "/faq",
  image: seoImages.faq,
  category: "FAQ",
  keywords: [
    "stainless steel FAQ",
    "304 vs 316L stainless steel",
    "stainless steel buying guide",
    "stainless steel delivery questions",
    "stainless steel surface finish FAQ",
  ],
});

export default FaqPage;
