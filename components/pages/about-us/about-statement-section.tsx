import Reveal from "@/components/shared/reveal";
import { ShieldCheck } from "lucide-react";

const AboutStatementSection = () => (
  <section
    aria-label="Our promise"
    className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
  >
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,#F0F9FF 0%,#E0F2FE 50%,#F0F9FF 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005CA3] via-[#00AADD] to-[#005CA3]"
        />

        <div className="relative px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#005CA3]/20 bg-[#005CA3]/10"
          >
            <ShieldCheck className="h-12 w-12 text-[#005CA3]" />
          </div>
          <blockquote>
            <p className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-[#0F172A] sm:text-2xl">
              &ldquo;In the end, we offer our semi-manufactured stainless steel
              products in various specifications to meet the divergent demands
              of our clients. Along with this, several factors enable us to
              meet expectations, including{" "}
              <strong className="text-[#005CA3]">
                prompt delivery, high-quality products, transparent business
                policies, and cost-effective solutions
              </strong>
              .&rdquo;
            </p>
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#005CA3]"
            >
              <span className="text-sm font-bold text-white">SX</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#0F172A]">SWEDINOX AB</p>
              <p className="text-xs text-slate-500">Management Team</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

export default AboutStatementSection;
