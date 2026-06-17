import StructuredData from "@/components/shared/structured-data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { businessHours, site } from "@/lib/site";
import ContactHeroSection from "./contact-hero-section";
import ContactMainSection from "./contact-main-section";
import ContactMapSection from "./contact-map-section";
import ContactQuickLinksSection from "./contact-quick-links-section";

const openingHoursSpecification = businessHours
  .filter((item) => item.opens && item.closes)
  .map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: item.day,
    opens: item.opens,
    closes: item.closes,
  }));

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.name}`,
  url: `${site.url}/contact-us-1`,
  description:
    "Contact SWEDINOX AB for stainless steel quotes, sourcing support, delivery questions, and technical inquiries.",
  mainEntity: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.emails,
    telephone: site.phoneNumbers,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    openingHoursSpecification,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.emails[0],
        telephone: site.phoneNumbers[0],
        areaServed: "Worldwide",
        availableLanguage: ["English", "Swedish"],
      },
    ],
  },
};

const ContactPage = () => (
  <>
    <StructuredData data={contactSchema} />
    <StructuredData
      data={buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact-us-1" },
      ])}
    />

    <ContactHeroSection />

    <main className="bg-[#F8FAFC]">
      <ContactMainSection />
      <ContactMapSection />
      <ContactQuickLinksSection />
    </main>
  </>
);

export default ContactPage;
