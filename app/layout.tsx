import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import StructuredData from "@/components/shared/structured-data";
import { businessHours, defaultKeywords, seoImages, site } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "optional",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
    { media: "(prefers-color-scheme: light)", color: "#005CA3" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  title: {
    default:
      "SWEDINOX AB - Premium Stainless Steel Products | Global B2B Supplier",
    template: "%s | SWEDINOX AB",
  },
  description:
    "SWEDINOX AB is a trusted global B2B supplier of stainless steel coils, sheets, strips, circles, baby coils, and head and tail sheets for industrial buyers and distributors.",
  keywords: [...defaultKeywords, "SWEDINOX AB", "stainless steel Sweden"],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Industrial Metals & Materials",
  classification: "B2B Manufacturing & Supply",
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "sv-SE": "/",
    },
  },
  openGraph: {
    title:
      "SWEDINOX AB - Premium Stainless Steel Products | Global B2B Supplier",
    description:
      "Premium stainless steel products for industrial buyers worldwide. SWEDINOX AB supports sourcing, stock availability, and responsive delivery coordination.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: seoImages.default.url,
        width: seoImages.default.width,
        height: seoImages.default.height,
        alt: seoImages.default.alt,
        type: seoImages.default.type,
      },
    ],
    locale: site.locale,
    type: "website",
    countryName: site.address.countryName,
    emails: [...site.emails],
    phoneNumbers: [...site.phoneNumbers],
  },
  twitter: {
    card: "summary_large_image",
    title: "SWEDINOX AB - Premium Stainless Steel Products",
    description:
      "Premium stainless steel products, sourcing support, and responsive delivery coordination for global B2B buyers.",
    images: [{ url: seoImages.default.url, alt: seoImages.default.alt }],
    site: site.twitterHandle,
    creator: site.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    title: site.name,
    statusBarStyle: "black-translucent",
    capable: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/logo.png`,
    width: 200,
    height: 60,
  },
  description:
    "SWEDINOX AB is a family-owned global B2B supplier of premium semi-manufactured stainless steel products including coils, sheets, strips, circles, and head and tail sheets.",
  foundingDate: "1999",
  legalName: site.legalName,
  vatID: "SE-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
    addressRegion: site.address.region,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+46-732-488-880",
      contactType: "sales",
      availableLanguage: ["English", "Swedish"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      telephone: "+46-406-860-186",
      contactType: "customer service",
      availableLanguage: ["English", "Swedish"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      email: site.emails[0],
      contactType: "sales",
      availableLanguage: ["English", "Swedish"],
      areaServed: "Worldwide",
    },
  ],
  email: [...site.emails],
  telephone: "+46-732-488-880",
  openingHoursSpecification: businessHours
    .filter((item) => item.opens && item.closes)
    .map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.day,
      opens: item.opens,
      closes: item.closes,
    })),
  sameAs: [site.url],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Stainless Steel Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Stainless Steel Coils" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Baby Coils" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Stainless Steel Sheets" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Stainless Steel Strips" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Stainless Steel Circles" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Head & Tail Sheets" },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: "Premium stainless steel products supplier for global B2B trade",
  publisher: { "@id": `${site.url}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/faq?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  image: `${site.url}${seoImages.default.url}`,
  url: site.url,
  telephone: "+46-732-488-880",
  email: site.emails[0],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification: businessHours
    .filter((item) => item.opens && item.closes)
    .map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.day,
      opens: item.opens,
      closes: item.closes,
    })),
  sameAs: [site.url],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-plus-jakarta)">
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <StructuredData data={localBusinessSchema} />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
