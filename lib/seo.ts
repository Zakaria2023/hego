import type { Metadata } from "next";
import {
  alternateOpenGraphLocales,
  defaultKeywords,
  seoImages,
  site,
  type SeoImage,
} from "./site";

type BuildMetadataInput = {
  authors?: Metadata["authors"];
  category?: string;
  description: string;
  image?: SeoImage;
  keywords?: readonly string[];
  modifiedTime?: string;
  noIndex?: boolean;
  path: string;
  publishedTime?: string;
  section?: string;
  tags?: string[];
  title: string;
  type?: "article" | "website";
};

const toAbsoluteUrl = (value: string) => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return new URL(value, site.url).toString();
};

const withBrand = (title: string) =>
  title.includes(site.name) ? title : `${title} | ${site.name}`;

export const absoluteUrl = toAbsoluteUrl;

export const buildPageMetadata = ({
  authors,
  category,
  description,
  image = seoImages.default,
  keywords = [],
  modifiedTime,
  noIndex = false,
  path,
  publishedTime,
  section,
  tags,
  title,
  type = "website",
}: BuildMetadataInput): Metadata => {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const imageUrl = toAbsoluteUrl(image.url);
  const dedupedKeywords = Array.from(
    new Set([...defaultKeywords, ...keywords, site.name]),
  );
  const resolvedAuthors = authors ?? [{ name: site.name, url: site.url }];
  const authorList = Array.isArray(resolvedAuthors)
    ? resolvedAuthors
    : [resolvedAuthors];
  const authorNames = authorList
    .map((author) => (typeof author === "string" ? author : author.name))
    .filter(Boolean) as string[];

  return {
    title: title.includes(site.name) ? { absolute: title } : title,
    description,
    keywords: dedupedKeywords,
    authors: authorList,
    creator: site.name,
    publisher: site.name,
    category,
    classification: "B2B Manufacturing & Stainless Steel Supply",
    alternates: {
      canonical,
    },
    openGraph: {
      title: withBrand(title),
      description,
      url: toAbsoluteUrl(canonical),
      siteName: site.name,
      locale: site.locale,
      alternateLocale: alternateOpenGraphLocales,
      type,
      images: [
        {
          url: imageUrl,
          width: image.width,
          height: image.height,
          alt: image.alt,
          type: image.type,
        },
      ],
      ...(type === "article"
        ? {
            authors: authorNames,
            publishedTime,
            modifiedTime,
            section,
            tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: withBrand(title),
      description,
      site: site.twitterHandle,
      creator: site.twitterHandle,
      images: [{ url: imageUrl, alt: image.alt }],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    referrer: "origin-when-cross-origin",
    other: {
      "geo.region": `${site.address.countryCode}-${site.address.region}`,
      "geo.placename": site.address.locality,
      "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
      ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
      "business:contact_data:street_address": site.address.street,
      "business:contact_data:locality": site.address.locality,
      "business:contact_data:postal_code": site.address.postalCode,
      "business:contact_data:country_name": site.address.countryName,
      "business:contact_data:email": site.emails[0],
      "business:contact_data:phone_number": site.phoneNumbers[0],
    },
  };
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});
