import { Mail, MessageCircle, Phone } from "lucide-react";

import { businessHours, site } from "@/lib/site";

export const contactQuickLinks = [
  {
    label: "Email",
    value: "sales@swedinox.se",
    href: "mailto:sales@swedinox.se",
    ariaLabel: "Send email to sales@swedinox.se",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+46 732 488 880",
    href: "tel:+46732488880",
    ariaLabel: "Call SWEDINOX AB at +46 732 488 880",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Message us directly",
    href: "https://wa.me/46732488880",
    ariaLabel: "Message SWEDINOX AB on WhatsApp",
    icon: MessageCircle,
  },
] as const;

const openingHoursSpecification = businessHours
  .filter((item) => item.opens && item.closes)
  .map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: item.day,
    opens: item.opens,
    closes: item.closes,
  }));

export const contactPageSchema = {
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
