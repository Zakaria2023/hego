import StructuredData from "@/components/shared/structured-data";
import HeroSection from "@/components/hero-section";
import HomeSections from "@/components/home-sections";
import { buildPageMetadata } from "@/lib/seo";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Keeping Your Business Stainless",
  description:
    "SWEDINOX AB supplies prime, ex-prime, and second-choice stainless steel coils, sheets, strips, circles, baby coils, and head and tail sheets to industrial buyers worldwide. Request a quote from our Sweden team.",
  path: "/",
  image: seoImages.home,
  category: "Industrial Materials Supplier",
  keywords: [
    "global stainless steel supplier",
    "second choice stainless steel supplier",
    "stainless steel exporter Sweden",
    "industrial stainless steel sourcing",
    "stainless steel quote",
    "B2B stainless steel supply",
  ],
});

const Home = () => {
  return (
    <main>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={localBusinessSchema} />
      <HeroSection />
      <HomeSections />
    </main>
  );
};

export default Home;
