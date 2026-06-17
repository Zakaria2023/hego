import Reveal from "@/components/shared/reveal";
import { Mail, MessageCircle, Phone } from "lucide-react";

const quickLinks = [
  {
    label: "Email",
    value: "sales@swedinox.se",
    href: "mailto:sales@swedinox.se",
    ariaLabel: "Send email to sales@swedinox.se",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+46 732 488 880",
    href: "tel:+46732488880",
    ariaLabel: "Call SWEDINOX AB at +46 732 488 880",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Message us directly",
    href: "https://wa.me/46732488880",
    ariaLabel: "Message SWEDINOX AB on WhatsApp",
    icon: MessageCircle,
  },
] as const;

const ContactQuickLinksSection = () => (
  <section
    aria-label="Quick contact options"
    className="relative overflow-hidden"
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-linear-to-br from-[#EFF6FF] via-white to-[#F0F9FF]"
    />
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 h-100 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, rgba(219,234,254,0.7) 0%, transparent 70%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {quickLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.label} delay={index * 0.08}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-all duration-200 hover:border-[#FCD34D] hover:shadow-[0_8px_30px_rgba(3,105,161,0.08)]"
                aria-label={item.ariaLabel}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] transition-colors duration-200 group-hover:bg-[#005CA3] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-[#475569]">
                    {item.label}
                  </span>
                  <span className="block text-sm font-semibold text-[#0F172A] transition-colors duration-200 group-hover:text-[#005CA3]">
                    {item.value}
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContactQuickLinksSection;
