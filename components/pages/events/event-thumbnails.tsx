import Image, { type ImageProps } from "next/image";

const eventThumbnailMap = {
  "stainless-steel-sheets-guide-applications": {
    src: "/steal-stel-event.webp",
    alt: "Stainless steel sheets stacked in warehouse",
  },
  "pleasure-to-visit-egypt": {
    src: "/invitation.webp",
    alt: "Metal & Steel Egypt trade show invitation",
  },
  "mecc-maastricht": {
    src: "/mecc.webp",
    alt: "Stainless Steel World Maastricht trade show",
  },
} as const;

type EventThumbnailProps = Omit<ImageProps, "src" | "alt" | "fill"> & {
  slug: string;
};

const EventThumbnail = ({
  slug,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "object-cover",
  ...imageProps
}: EventThumbnailProps) => {
  const thumbnail =
    eventThumbnailMap[slug as keyof typeof eventThumbnailMap];

  if (!thumbnail) {
    return null;
  }

  return (
    <Image
      src={thumbnail.src}
      alt={thumbnail.alt}
      fill
      sizes={sizes}
      className={className}
      {...imageProps}
    />
  );
};

export default EventThumbnail;
