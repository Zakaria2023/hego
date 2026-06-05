import HeroSection from "@/app/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Stainless Steel Products – Global B2B Supplier",
  description:
    "SWEDINOX AB supplies premium-grade stainless steel coils, sheets, strips, circles and more to 80+ countries. ISO 9001:2015 certified. 25+ years of experience. Request a quote today.",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "sv-SE": "/" },
  },
  openGraph: {
    title:
      "SWEDINOX AB – Premium Stainless Steel Products | Global B2B Supplier",
    description:
      "Your gateway to international stainless steel trade. Premium-grade steel products supplied to 80+ countries. ISO 9001:2015 certified. Request a quote.",
    url: "https://swedinox.se",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SWEDINOX AB – Stainless steel coils warehouse",
      },
    ],
    type: "website",
  },
};

const Home = () => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default Home;
