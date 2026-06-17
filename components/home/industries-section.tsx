import {
  Building2,
  Car,
  FlaskConical,
  HeartPulse,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

const industries = [
  {
    name: "Automotive",
    description: "Body panels, exhaust systems and precision stampings",
    icon: Car,
  },
  {
    name: "Construction",
    description: "Cladding, facades and architectural elements",
    icon: Building2,
  },
  {
    name: "Food & Beverage",
    description: "Hygienic equipment, tanks and processing lines",
    icon: UtensilsCrossed,
  },
  {
    name: "Chemical Industry",
    description: "Corrosion-resistant vessels, pipes and reactors",
    icon: FlaskConical,
  },
  {
    name: "Medical & Pharma",
    description: "Surgical instruments, implants and sterile equipment",
    icon: HeartPulse,
  },
  {
    name: "Energy & Utilities",
    description: "Heat exchangers, turbine components and pipelines",
    icon: Zap,
  },
];

const IndustriesSection = () => (
  <section
    aria-labelledby="industries-heading"
    className="relative overflow-hidden bg-[#0F172A] px-4 py-24 sm:px-6 lg:px-8"
  >
    <div className="relative mx-auto max-w-7xl">
      <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#FCD34D]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#F5A623] animate-pulse"
              aria-hidden="true"
            />
            Industries Served
          </span>
          <h2
            id="industries-heading"
            className="mt-4 max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Steel That Powers
            <br />
            <span className="steel-text">Every Industry</span>
          </h2>
        </div>

        <p className="max-w-sm text-base leading-relaxed text-slate-300 lg:pb-2">
          From cookware to chemical reactors, our stainless steel products serve
          demanding applications across every major sector.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;

          return (
            <div
              key={industry.name}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F5A623]/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#F5A623] transition-all duration-300 group-hover:border-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold leading-snug text-white">
                  {industry.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {industry.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
