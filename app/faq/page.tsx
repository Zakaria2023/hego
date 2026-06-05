import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ – Stainless Steel Products, Grades, Ordering & Delivery",
  description:
    "35 frequently asked questions about SWEDINOX AB's stainless steel products, grades (304, 316L, 430), surface finishes, ordering process, delivery times, and fabrication tips. Get answers instantly.",
  keywords: [
    "stainless steel FAQ",
    "SWEDINOX frequently asked questions",
    "steel grades explained",
    "304 vs 316L stainless steel",
    "stainless steel surface finish",
    "how to order stainless steel",
    "stainless steel delivery time",
    "minimum order stainless steel",
    "stainless steel corrosion resistance",
    "stainless steel welding tips",
  ],
  authors: [{ name: "SWEDINOX AB", url: "https://swedinox.se" }],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ – Stainless Steel Questions Answered | SWEDINOX AB",
    description:
      "35 answers covering stainless steel products, grades 304/316L/430, surface finishes, ordering, delivery times and fabrication. From SWEDINOX AB — 25+ years of expertise.",
    url: "https://swedinox.se/faq",
    siteName: "SWEDINOX AB",
    images: [
      {
        url: "/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "SWEDINOX AB FAQ – Stainless steel questions answered",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ – Stainless Steel Questions Answered | SWEDINOX AB",
    description:
      "35 answers on grades, finishes, ordering and delivery. 25+ years of stainless steel expertise from SWEDINOX AB.",
    images: [{ url: "/og-faq.jpg", alt: "SWEDINOX AB FAQ" }],
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

const FaqPage = () => <FaqClient />;

export default FaqPage;
