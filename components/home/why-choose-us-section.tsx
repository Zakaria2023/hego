import { Check } from "lucide-react";

import {
  checklistItems,
  featureCards,
  highlightStats,
} from "@/components/home/data";

const WhyChooseUsSection = () => (
  <section
    aria-labelledby="why-heading"
    className="relative overflow-hidden bg-[#F8FAFC] px-4 py-24 sm:px-6 lg:px-8"
  >
    <div
      aria-hidden="true"
      className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#005CA3]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#F5A623] animate-pulse"
            aria-hidden="true"
          />
          Why SWEDINOX AB
        </span>
        <h2
          id="why-heading"
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
        >
          Trusted by Buyers Who Need
          <br />
          <span className="steel-text">Reliable Stainless Supply</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#64748B] sm:text-lg">
          From Stockholm to Singapore, we deliver the quality and consistency
          global B2B buyers depend on.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FCD34D] hover:shadow-[0_12px_40px_rgba(245,166,35,0.12)]"
            >
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, #F5A623, ${feature.color})`,
                }}
              />

              <div className="p-6">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${feature.color}12`,
                    border: `1.5px solid ${feature.color}35`,
                    color: feature.color,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div
                  className="mb-1 text-4xl font-black leading-none tracking-tight"
                  style={{ color: feature.color }}
                >
                  {feature.stat}
                </div>

                <h3 className="mb-2 mt-2 text-base font-bold leading-snug text-[#0F172A]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#64748B]">
                  {feature.description}
                </p>

                <div
                  className="mt-5 flex items-center gap-2 text-xs font-semibold"
                  style={{ color: feature.color }}
                >
                  <Check className="h-4 w-4 shrink-0" />
                  Verified
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {checklistItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-[#E2E8F0] bg-white p-4 transition-all duration-200 hover:border-[#FCD34D] hover:shadow-sm"
          >
            <h3 className="text-lg font-bold leading-snug text-[#0F172A]">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 border-t border-[#E2E8F0] pt-10 text-center sm:grid-cols-4">
        {highlightStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 rounded-xl border border-[#E2E8F0] bg-white p-4"
          >
            <span className="text-3xl font-black text-[#005CA3] sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-[#475569]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
