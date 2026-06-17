import Image from "next/image";
import React from "react";

export const thumbnails: Record<string, React.ReactNode> = {
  "stainless-steel-sheets-guide-applications": (
    <Image
      src="/steal-stel-event.webp"
      alt="Stainless steel sheets stacked in warehouse"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  ),
  "pleasure-to-visit-egypt": (
    <Image
      src="/invitation.webp"
      alt="Metal & Steel Egypt trade show invitation"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  ),
  "mecc-maastricht": (
    <Image
      src="/mecc.webp"
      alt="Stainless Steel World Maastricht trade show"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  ),
};
