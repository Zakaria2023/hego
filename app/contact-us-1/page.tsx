import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us – Get a Stainless Steel Quote from Our Team",
  description:
    "Contact SWEDINOX AB for stainless steel quotes, product inquiries, and technical questions. Reach us by contact form, email (sales@swedinox.se), phone (+46 73 248 88 80), or WhatsApp. Located in Arlöv, Sweden.",
  keywords: [
    "contact SWEDINOX AB",
    "stainless steel quote Sweden",
    "sales@swedinox.se",
    "Pilevallen 77 Arlöv",
    "stainless steel supplier contact",
    "request stainless steel price",
    "WhatsApp stainless steel supplier",
    "steel inquiry form",
    "B2B steel quote Europe",
  ],
  authors: [{ name: "SWEDINOX AB", url: "https://swedinox.se" }],
  alternates: { canonical: "/contact-us-1" },
  openGraph: {
    title: "Contact SWEDINOX AB – Get a Stainless Steel Quote",
    description:
      "Request a quote or send a product inquiry to SWEDINOX AB. Reach us by form, email, phone or WhatsApp. Based in Arlöv, Sweden. Fast response guaranteed.",
    url: "https://swedinox.se/contact-us-1",
    siteName: "SWEDINOX AB",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SWEDINOX AB – stainless steel supplier Sweden",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SWEDINOX AB – Get a Stainless Steel Quote",
    description:
      "Reach us by form, email, phone or WhatsApp. Stainless steel coils, sheets, strips — fast response from Arlöv, Sweden.",
    images: [{ url: "/og-contact.jpg", alt: "Contact SWEDINOX AB" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ContactPage = () => <ContactClient />;

export default ContactPage;
