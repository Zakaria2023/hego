import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import {
  alternateOpenGraphLocales,
  defaultKeywords,
  seoImages,
  site,
} from "@/lib/site";
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
    default: "SWEDINOX AB | Stainless Steel Supplier",
    template: "%s | SWEDINOX AB",
  },
  description: site.description,
  keywords: [
    ...defaultKeywords,
    "SWEDINOX AB",
    "stainless steel Sweden",
    "second choice stainless steel Sweden",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Industrial Metals & Materials",
  classification: "B2B Manufacturing & Supply",
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SWEDINOX AB | Stainless Steel Supplier",
    description: site.description,
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
    alternateLocale: alternateOpenGraphLocales,
    type: "website",
    countryName: site.address.countryName,
    emails: [...site.emails],
    phoneNumbers: [...site.phoneNumbers],
  },
  twitter: {
    card: "summary_large_image",
    title: "SWEDINOX AB | Stainless Steel Supplier",
    description: site.description,
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
        <Navbar />
        <main className="flex-1 min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
