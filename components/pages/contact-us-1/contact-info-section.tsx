"use client";

import Reveal from "@/components/shared/reveal";
import { site } from "@/lib/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactHoursDropdown from "./contact-hours-dropdown";
import ContactInfoRow from "./contact-info-row";

const mapHref =
  "https://maps.google.com/?q=Pilevallen+77,+Arlov,+232+35,+Sweden";

const ContactInfoSection = () => (
  <Reveal delay={0.08}>
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_40px_rgba(15,23,42,0.08)] sm:p-10">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#475569]">
          Direct Contact
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A]">
          Talk to Our Team
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
          Reach out by email, phone, WhatsApp, or visit our office in Sweden.
        </p>
      </div>

      <a
        href={`https://wa.me/${site.phoneNumbers[0].replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl border border-[#FCD34D] bg-[#FFF7ED] px-5 py-4 text-sm font-bold text-[#0F172A] transition-all duration-200 hover:bg-[#DBEAFE]"
        aria-label="Message SWEDINOX AB on WhatsApp"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-[0_0_12px_rgba(37,211,102,0.4)]">
          <MessageCircle className="h-5 w-5 text-white" />
        </div>
        <span>Message us on WhatsApp</span>
        <span
          className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden="true"
        />
      </a>

      <div className="h-px bg-slate-100" aria-hidden="true" />

      <ContactInfoRow
        icon={<MapPin className="h-5 w-5 text-[#005CA3]" />}
        label="Address"
      >
        <a
          href={mapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-150 hover:text-[#005CA3]"
        >
          {site.address.street}, {site.address.locality}
          <br />
          {site.address.postalCode} {site.address.countryName.toUpperCase()}
        </a>
      </ContactInfoRow>

      <ContactInfoRow
        icon={<Mail className="h-5 w-5 text-[#005CA3]" />}
        label="Email"
      >
        <a
          href={`mailto:${site.emails[0]}`}
          className="block transition-colors duration-150 hover:text-[#005CA3]"
        >
          {site.emails[0]}
        </a>
        <a
          href={`mailto:${site.emails[1]}`}
          className="block transition-colors duration-150 hover:text-[#005CA3]"
        >
          {site.emails[1]}
        </a>
      </ContactInfoRow>

      <ContactInfoRow
        icon={<Phone className="h-5 w-5 text-[#005CA3]" />}
        label="Phone"
      >
        <a
          href={`tel:${site.phoneNumbers[0]}`}
          className="block transition-colors duration-150 hover:text-[#005CA3]"
        >
          +46 732 488 880
        </a>
        <a
          href={`tel:${site.phoneNumbers[1]}`}
          className="block transition-colors duration-150 hover:text-[#005CA3]"
        >
          +46 406 860 186
        </a>
      </ContactInfoRow>

      <div className="h-px bg-slate-100" aria-hidden="true" />

      <ContactInfoRow
        icon={<MessageCircle className="h-5 w-5 text-emerald-500" />}
        label="Business Hours"
      >
        <ContactHoursDropdown />
      </ContactInfoRow>
    </section>
  </Reveal>
);

export default ContactInfoSection;
