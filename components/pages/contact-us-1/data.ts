import { Mail, MessageCircle, Phone } from "lucide-react";

import { site } from "@/lib/site";
import {
  contactPoints,
  openingHoursSpecification,
  organizationId,
  organizationLogo,
  postalAddress,
} from "@/lib/structured-data";

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

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.name}`,
  url: `${site.url}/contact-us-1`,
  description:
    "Contact SWEDINOX AB for prime, ex-prime, and second-choice stainless steel quotes, sourcing support, delivery questions, and technical inquiries.",
  mainEntity: {
    "@id": organizationId,
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: organizationLogo,
    email: site.emails[0],
    telephone: site.phoneNumbers[0],
    address: postalAddress,
    openingHoursSpecification,
    contactPoint: contactPoints,
  },
};
