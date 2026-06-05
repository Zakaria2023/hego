import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us – Family-Owned Stainless Steel Supplier Since 1999",
  description:
    "SWEDINOX AB is a family-owned global B2B supplier of semi-manufactured stainless steel products. 25+ years experience, 80+ countries served, 500+ SKUs in stock. ISO 9001:2015 certified. Based in Arlöv, Sweden.",
  keywords: [
    "about SWEDINOX AB",
    "stainless steel supplier Sweden",
    "semi manufactured stainless steel",
    "family owned steel company",
    "stainless steel logistics",
    "B2B steel supplier Europe",
    "ISO 9001 stainless steel supplier",
    "stainless steel Arlöv",
    "stainless steel company Sweden",
  ],
  authors: [{ name: "SWEDINOX AB", url: "https://swedinox.se" }],
  alternates: { canonical: "/about-us" },
  openGraph: {
    title:
      "About SWEDINOX AB – Family-Owned Stainless Steel Supplier Since 1999",
    description:
      "A family-owned company prioritizing long-term relationships. 25+ years, 80+ countries, 500+ SKUs. ISO 9001:2015 certified stainless steel supplier based in Sweden.",
    url: "https://swedinox.se/about-us",
    siteName: "SWEDINOX AB",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "SWEDINOX AB – Stainless steel warehouse Arlöv Sweden",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SWEDINOX AB – Family-Owned Stainless Steel Supplier",
    description:
      "25+ years, 80+ countries, ISO 9001:2015 certified. Family-owned B2B stainless steel supplier based in Sweden.",
    images: [{ url: "/og-about.jpg", alt: "SWEDINOX AB warehouse" }],
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

const AboutPage = () => <AboutUsClient />;

export default AboutPage;
