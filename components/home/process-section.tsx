import Link from "next/link";
import { ArrowRight, FileText, Search, Truck } from "lucide-react";
import Reveal from "../shared/reveal";

const steps = [
  {
    number: "01",
    title: "Browse & Inquire",
    description:
      "Explore our catalog and submit an inquiry with your grade, finish, and dimension requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Receive Your Quote",
    description:
      "Our team reviews your specifications and sends a competitive, fully detailed quote within 24 hours.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Global Delivery",
    description:
      "Confirmed orders are dispatched from our European port warehouses directly to your facility worldwide.",
    icon: Truck,
  },
];

const ProcessSection = () => (
  <section
    aria-labelledby="process-heading"
    className="relative overflow-hidden bg-[#0C2340] px-4 py-24 sm:px-6 lg:px-8"
  >
    <div className="relative mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#FCD34D]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#F5A623] animate-pulse"
              aria-hidden="true"
            />
            How We Work
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            id="process-heading"
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Source Steel in <span className="steel-text">Three Simple Steps</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Our streamlined B2B process means less back-and-forth and faster
            delivery from first contact to warehouse.
          </p>
        </Reveal>
      </div>

      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-4">
        <div
          aria-hidden="true"
          className="absolute top-13 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)",
          }}
        />

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
          <Reveal key={step.number} delay={index * 0.15}>
            <div className="relative flex cursor-default flex-col items-center rounded-2xl border border-white/15 bg-white/8 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/12">
              <div className="relative z-10 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5A623] shadow-[0_4px_20px_rgba(245,166,35,0.4)]">
                  <span className="text-lg font-black tracking-tight text-white">
                    {step.number}
                  </span>
                </div>
                <div className="absolute inset-0 scale-125 rounded-full border-2 border-[#F5A623]/40 animate-pulse-ring" />
              </div>

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#F5A623]">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-extrabold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
            </div>
          </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-14 text-center">
        <Link
          href="/contact-us-1"
          className="cta-glow group inline-flex items-center gap-2 rounded-full bg-[#005CA3] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-[0_4px_20px_rgba(0,92,163,0.3)] transition-colors duration-200 hover:bg-[#0077BB]"
          aria-label="Start the sourcing process with SWEDINOX AB"
        >
          <span>Start Your Inquiry</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default ProcessSection;
