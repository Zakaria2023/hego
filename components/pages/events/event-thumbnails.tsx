import Image, { type ImageProps } from "next/image";
import { eventThumbnailMap } from "@/components/pages/events/data";

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
