import AboutPage from "@/components/pages/about-us/about-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us - Family-Owned Stainless Steel Supplier Since 1999",
  description:
    "Learn about SWEDINOX AB, a family-owned B2B stainless steel supplier combining global sourcing, inventory support, and responsive logistics from Sweden.",
  path: "/about-us",
  image: seoImages.about,
  category: "Company Profile",
  keywords: [
    "about SWEDINOX AB",
    "family owned stainless steel supplier",
    "stainless steel company Sweden",
    "industrial metals sourcing company",
    "stainless steel logistics Europe",
  ],
});

const AboutUsPage = () => <AboutPage />;

export default AboutUsPage;
