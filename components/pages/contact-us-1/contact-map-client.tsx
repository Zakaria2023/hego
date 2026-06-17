"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

type Props = {
  mapSrc: string;
  mapTitle: string;
  mapLabel: string;
};

const ContactMapClient = ({ mapSrc, mapTitle, mapLabel }: Props) => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div
        role="button"
        tabIndex={0}
        aria-label="Click to load interactive Google Map"
        className="flex h-[480px] w-full cursor-pointer flex-col items-center justify-center gap-3 bg-slate-100 transition-colors duration-200 hover:bg-slate-200"
        onClick={() => setLoaded(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setLoaded(true);
          }
        }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_4px_16px_rgba(15,23,42,0.1)]">
          <MapPin className="h-7 w-7 text-[#005CA3]" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold text-[#0F172A]">Click to load map</p>
        <p className="text-xs text-[#475569]">Connects to Google Maps</p>
      </div>
    );
  }

  return (
    <iframe
      title={mapTitle}
      src={mapSrc}
      width="100%"
      height="480"
      className="block w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      aria-label={mapLabel}
    />
  );
};

export default ContactMapClient;
