import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import PageTransition from "@/app/components/PageTransition";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/* ─── Viewport & theme-color (separate export per Next.js 14+) ─── */
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

/* ─── Root metadata (inherited / overridden by each page) ─── */
export const metadata: Metadata = {
  /* Title template – pages export `title: "Page Title"` and get "Page Title | SWEDINOX AB" */
  title: {
    default:
      "SWEDINOX AB – Premium Stainless Steel Products | Global B2B Supplier",
    template: "%s | SWEDINOX AB",
  },
  description:
    "SWEDINOX AB is your trusted gateway to international stainless steel trade. We supply premium-grade stainless steel products worldwide — coils, sheets, tubes and more. ISO 9001:2015 certified. Request a quote today.",
  keywords: [
    "stainless steel products",
    "stainless steel supplier",
    "B2B steel trade",
    "SWEDINOX AB",
    "steel coils",
    "stainless steel sheets",
    "stainless steel strips",
    "steel circles",
    "baby coils",
    "head and tail stainless",
    "304 stainless steel",
    "316L stainless steel",
    "430 stainless steel",
    "international steel supplier",
    "Sweden steel export",
    "semi manufactured stainless steel",
    "cold rolled stainless",
    "hot rolled stainless",
    "ISO 9001 stainless steel",
    "stainless steel Arlöv Sweden",
  ],
  authors: [{ name: "SWEDINOX AB", url: "https://swedinox.se" }],
  creator: "SWEDINOX AB",
  publisher: "SWEDINOX AB",
  category: "Industrial Metals & Materials",
  classification: "B2B Manufacturing & Supply",
  metadataBase: new URL("https://swedinox.se"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "sv-SE": "/",
    },
  },

  /* Open Graph */
  openGraph: {
    title:
      "SWEDINOX AB – Premium Stainless Steel Products | Global B2B Supplier",
    description:
      "Your gateway to international stainless steel business and trade. Premium-grade steel products supplied to 80+ countries. ISO 9001:2015 certified.",
    url: "https://swedinox.se",
    siteName: "SWEDINOX AB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SWEDINOX AB – Premium Stainless Steel Products",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Sweden",
    emails: ["sales@swedinox.se", "sales@swedinox.eu"],
    phoneNumbers: ["+46732488880", "+46406860186"],
  },

  /* Twitter / X */
  twitter: {
    card: "summary_large_image",
    title: "SWEDINOX AB – Premium Stainless Steel Products",
    description:
      "Your gateway to international stainless steel trade. Premium-grade products, 80+ countries, ISO 9001:2015 certified.",
    images: [
      { url: "/og-image.jpg", alt: "SWEDINOX AB stainless steel products" },
    ],
    site: "@swedinoxab",
    creator: "@swedinoxab",
  },

  /* Robots */
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

  /* Icons */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  /* PWA manifest */
  manifest: "/site.webmanifest",

  /* Search engine verification */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION_TOKEN",
    yandex: "REPLACE_WITH_YANDEX_VERIFICATION_TOKEN",
    other: {
      "msvalidate.01": "REPLACE_WITH_BING_VERIFICATION_TOKEN",
    },
  },

  /* App links */
  appleWebApp: {
    title: "SWEDINOX AB",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  /* Format detection */
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  /* Referrer */
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://swedinox.se/#organization",
    name: "SWEDINOX AB",
    url: "https://swedinox.se",
    logo: {
      "@type": "ImageObject",
      url: "https://swedinox.se/logo.png",
      width: 200,
      height: 60,
    },
    description:
      "SWEDINOX AB is a family-owned global B2B supplier of premium semi-manufactured stainless steel products including coils, sheets, strips, circles, and head & tail. ISO 9001:2015 certified, serving 80+ countries since 1999.",
    foundingDate: "1999",
    legalName: "SWEDINOX AB",
    vatID: "SE-XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pilevallen 77",
      addressLocality: "Arlöv",
      postalCode: "232 35",
      addressCountry: "SE",
      addressRegion: "Skåne",
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
        email: "sales@swedinox.se",
        contactType: "sales",
        availableLanguage: ["English", "Swedish"],
        areaServed: "Worldwide",
      },
    ],
    email: ["sales@swedinox.se", "sales@swedinox.eu"],
    telephone: "+46-732-488-880",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://swedinox.se"],
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
          itemOffered: { "@type": "Product", name: "Head & Tail" },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://swedinox.se/#website",
    url: "https://swedinox.se",
    name: "SWEDINOX AB",
    description: "Premium stainless steel products supplier — global B2B trade",
    publisher: { "@id": "https://swedinox.se/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://swedinox.se/faq?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://swedinox.se/#localbusiness",
    name: "SWEDINOX AB",
    image: "https://swedinox.se/og-image.jpg",
    url: "https://swedinox.se",
    telephone: "+46-732-488-880",
    email: "sales@swedinox.se",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pilevallen 77",
      addressLocality: "Arlöv",
      postalCode: "232 35",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.6325,
      longitude: 13.0768,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://swedinox.se"],
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-plus-jakarta)]">
        {/* Global structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
