import Reveal from "@/components/shared/reveal";
import { site } from "@/lib/site";
import { MapPinned, Navigation } from "lucide-react";

const mapQuery = "Pilevallen+77,+Arlov,+232+35,+Sweden";
const mapHref = `https://maps.google.com/?q=${mapQuery}`;

const ContactMapSection = () => (
  <section aria-label="Office location map" className="relative">
    <div
      aria-hidden="true"
      className="absolute top-0 right-0 left-0 z-10 h-12 bg-gradient-to-b from-[#F8FAFC] to-transparent"
    />

    <Reveal className="overflow-hidden">
      <div className="relative">
        <div className="absolute top-6 left-6 z-20">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.12)]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#005CA3]">
              <MapPinned className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-[#0F172A]">
                {site.name}
              </p>
              <p className="text-[11px] text-[#64748B]">
                {site.address.street}, {site.address.locality}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-6 right-6 z-20">
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-[#005CA3] shadow-[0_4px_16px_rgba(15,23,42,0.1)] transition-all duration-200 hover:border-[#005CA3] hover:bg-[#005CA3] hover:text-white"
          >
            <Navigation className="h-3.5 w-3.5" />
            Get Directions
          </a>
        </div>

        <iframe
          title={`${site.name} location - ${site.address.street}, ${site.address.locality}, ${site.address.countryName}`}
          src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="480"
          className="block w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={`Google Map showing ${site.name} office location`}
        />
      </div>
    </Reveal>

    <div
      aria-hidden="true"
      className="absolute bottom-0 right-0 left-0 z-10 h-12 bg-gradient-to-t from-[#0F172A] to-transparent"
    />
  </section>
);

export default ContactMapSection;
