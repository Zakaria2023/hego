import FaqPage from "@/components/pages/faq/faq-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Stainless Steel FAQ",
  description:
    "Find answers about stainless steel grades, product formats, lead times, shipping, fabrication, and ordering prime or second-choice material.",
  path: "/faq",
  image: seoImages.faq,
  category: "FAQ",
  keywords: [
    "stainless steel FAQ",
    "second choice stainless steel FAQ",
    "304 vs 316L stainless steel",
    "stainless steel buying guide",
    "stainless steel delivery questions",
    "stainless steel surface finish FAQ",
  ],
});

export default FaqPage;
