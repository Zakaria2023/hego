import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "News & Events – Industry Guides, Trade Shows & Company Updates",
  description:
    "Read the latest from SWEDINOX AB: stainless steel industry guides, trade fair appearances (Metal & Steel Egypt, Stainless Steel World Maastricht), and company news. Expert insights since 1999.",
  keywords: [
    "SWEDINOX AB news",
    "stainless steel industry news",
    "stainless steel guide",
    "Metal Steel Egypt trade show",
    "Stainless Steel World Maastricht",
    "stainless steel sheets applications",
    "stainless steel trade fair",
    "steel industry events",
    "B2B steel news",
  ],
  authors: [{ name: "SWEDINOX AB", url: "https://swedinox.se" }],
  alternates: { canonical: "/events" },
  openGraph: {
    title: "News & Events – SWEDINOX AB | Industry Guides & Trade Shows",
    description:
      "Expert guides on stainless steel applications, trade show appearances, and company updates from SWEDINOX AB — your trusted B2B steel partner.",
    url: "https://swedinox.se/events",
    siteName: "SWEDINOX AB",
    images: [
      {
        url: "/og-events.jpg",
        width: 1200,
        height: 630,
        alt: "SWEDINOX AB – News and events",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events – SWEDINOX AB",
    description:
      "Stainless steel industry guides, trade show news and company updates from SWEDINOX AB.",
    images: [{ url: "/og-events.jpg", alt: "SWEDINOX AB news and events" }],
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

const EventsPage = () => <EventsClient />;

export default EventsPage;
