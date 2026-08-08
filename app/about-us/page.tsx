import AboutPage from "@/components/pages/about-us/about-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "About SWEDINOX AB Since 1999",
  description:
    "Meet SWEDINOX AB, a family-owned stainless steel supplier serving global buyers with responsible sourcing and responsive logistics since 1999.",
  path: "/about-us",
  image: seoImages.about,
  category: "Company Profile",
  keywords: [
    "about SWEDINOX AB",
    "second choice stainless steel supplier",
    "family owned stainless steel supplier",
    "stainless steel company Sweden",
    "industrial metals sourcing company",
    "stainless steel logistics Europe",
  ],
});

const AboutUsPage = () => <AboutPage />;

export default AboutUsPage;
