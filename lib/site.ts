export const site = {
  name: "SWEDINOX AB",
  legalName: "SWEDINOX AB",
  url: "https://swedinox.se",
  locale: "en_US",
  languages: ["en-US", "en-GB", "sv-SE"] as const,
  twitterHandle: "@swedinoxab",
  description:
    "SWEDINOX AB is a global B2B supplier of premium stainless steel coils, sheets, strips, circles, baby coils, and head and tail sheets.",
  emails: ["sales@swedinox.se", "sales@swedinox.eu"],
  phoneNumbers: ["+46732488880", "+46406860186"],
  address: {
    street: "Pilevallen 77",
    locality: "Arlov",
    postalCode: "232 35",
    region: "Skane",
    countryCode: "SE",
    countryName: "Sweden",
  },
  geo: {
    latitude: 55.6325,
    longitude: 13.0768,
  },
} as const;

export const defaultKeywords = [
  "stainless steel supplier",
  "stainless steel products",
  "stainless steel coils",
  "stainless steel sheets",
  "stainless steel strips",
  "stainless steel circles",
  "baby coils",
  "head and tail sheets",
  "semi manufactured stainless steel",
  "B2B stainless steel supplier",
  "Sweden stainless steel exporter",
  "European stainless steel supply",
  "industrial stainless steel sourcing",
  "ISO 9001 stainless steel supplier",
  "stainless steel stocklot supplier",
] as const;

export type SeoImage = {
  alt: string;
  height?: number;
  type?: string;
  url: string;
  width?: number;
};

export const seoImages = {
  about: {
    url: "/about-us.jpg",
    width: 1200,
    height: 630,
    alt: "SWEDINOX AB warehouse and stainless steel supply operations",
    type: "image/jpeg",
  },
  contact: {
    url: "/about-us.jpg",
    width: 1200,
    height: 630,
    alt: "Contact SWEDINOX AB for stainless steel inquiries and quotes",
    type: "image/jpeg",
  },
  default: {
    url: "/about-us.jpg",
    width: 1200,
    height: 630,
    alt: "SWEDINOX AB premium stainless steel products supplier",
    type: "image/jpeg",
  },
  events: {
    url: "/about-us.jpg",
    width: 1200,
    height: 630,
    alt: "SWEDINOX AB news, events, and stainless steel industry updates",
    type: "image/jpeg",
  },
  faq: {
    url: "/about-us.jpg",
    width: 1200,
    height: 630,
    alt: "SWEDINOX AB frequently asked questions about stainless steel products",
    type: "image/jpeg",
  },
  home: {
    url: "/about-us.jpg",
    width: 1200,
    height: 630,
    alt: "SWEDINOX AB stainless steel products for global B2B buyers",
    type: "image/jpeg",
  },
  products: {
    url: "/sheets.jpg",
    width: 1200,
    height: 630,
    alt: "SWEDINOX AB stainless steel products catalog",
    type: "image/jpeg",
  },
} satisfies Record<string, SeoImage>;

export const businessHours = [
  { day: "Monday", opens: "09:00", closes: "17:00", label: "09:00 - 17:00" },
  { day: "Tuesday", opens: "09:00", closes: "17:00", label: "09:00 - 17:00" },
  {
    day: "Wednesday",
    opens: "09:00",
    closes: "17:00",
    label: "09:00 - 17:00",
  },
  { day: "Thursday", opens: "09:00", closes: "17:00", label: "09:00 - 17:00" },
  { day: "Friday", opens: "09:00", closes: "17:00", label: "09:00 - 17:00" },
  { day: "Saturday", opens: "", closes: "", label: "Closed" },
  { day: "Sunday", opens: "", closes: "", label: "Closed" },
] as const;

export const weekdayNames = businessHours.map((item) => item.day);
