import StructuredData from "@/components/shared/structured-data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import AboutCompanySection from "./about-company-section";
import AboutCtaSection from "./about-cta-section";
import AboutHeroSection from "./about-hero-section";
import AboutPillarsSection from "./about-pillars-section";
import AboutStatementSection from "./about-statement-section";
import AboutStatsSection from "./about-stats-section";
import AboutValuesSection from "./about-values-section";

const AboutPage = () => (
  <>
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About SWEDINOX AB",
        url: "https://swedinox.se/about-us",
        description:
          "SWEDINOX AB is a family-owned global supplier of semi-manufactured stainless steel products with over 25 years of experience.",
        mainEntity: {
          "@type": "Organization",
          name: "SWEDINOX AB",
          foundingDate: "1999",
          description:
            "Premium stainless steel supplier serving industrial buyers worldwide.",
          address: { "@type": "PostalAddress", addressCountry: "SE" },
        },
      }}
    />
    <StructuredData
      data={buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
      ])}
    />

    <AboutHeroSection />

    <main className="bg-[#F8FAFC]">
      <AboutCompanySection />
      <AboutStatsSection />
      <AboutPillarsSection />
      <AboutValuesSection />
      <AboutStatementSection />
      <AboutCtaSection />
    </main>
  </>
);

export default AboutPage;
