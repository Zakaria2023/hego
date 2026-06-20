import { businessHours, seoImages, site } from "./site";

export const organizationId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;
export const localBusinessId = `${site.url}/#localbusiness`;

export const organizationLogo = {
  "@type": "ImageObject",
  url: `${site.url}/logo.png`,
  width: 200,
  height: 60,
} as const;

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  postalCode: site.address.postalCode,
  addressRegion: site.address.region,
  addressCountry: site.address.countryCode,
} as const;

export const openingHoursSpecification = businessHours
  .filter((item) => item.opens && item.closes)
  .map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: item.day,
    opens: item.opens,
    closes: item.closes,
  }));

export const contactPoints = [
  {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.emails[0],
    telephone: site.phoneNumbers[0],
    areaServed: "Worldwide",
    availableLanguage: ["English", "Swedish"],
  },
  {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: site.emails[1],
    telephone: site.phoneNumbers[1],
    areaServed: "Worldwide",
    availableLanguage: ["English", "Swedish"],
  },
] as const;

export const organizationReference = {
  "@id": organizationId,
  "@type": "Organization",
  name: site.name,
  url: site.url,
} as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  ...organizationReference,
  legalName: site.legalName,
  description:
    "SWEDINOX AB is a family-owned global B2B supplier of prime, ex-prime, and second-choice semi-manufactured stainless steel products including coils, sheets, strips, circles, baby coils, and head and tail sheets.",
  foundingDate: "1999",
  logo: organizationLogo,
  address: postalAddress,
  email: site.emails[0],
  telephone: site.phoneNumbers[0],
  contactPoint: contactPoints,
  areaServed: "Worldwide",
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  description:
    "Prime, ex-prime, and second-choice stainless steel products supplier for global B2B trade",
  publisher: { "@id": organizationId },
  inLanguage: "en-US",
} as const;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": localBusinessId,
  name: site.name,
  description: site.description,
  image: `${site.url}${seoImages.default.url}`,
  url: site.url,
  logo: `${site.url}/logo.png`,
  telephone: site.phoneNumbers[0],
  email: site.emails[0],
  priceRange: "$$",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification,
  parentOrganization: { "@id": organizationId },
} as const;
