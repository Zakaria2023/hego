import StructuredData from "@/components/shared/structured-data";
import { contactPageSchema } from "@/components/pages/contact-us-1/data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import ContactHeroSection from "./contact-hero-section";
import ContactMainSection from "./contact-main-section";
import ContactMapSection from "./contact-map-section";
import ContactQuickLinksSection from "./contact-quick-links-section";

const ContactPage = () => (
  <>
    <StructuredData data={contactPageSchema} />
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
