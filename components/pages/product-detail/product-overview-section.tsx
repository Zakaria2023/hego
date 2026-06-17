import Reveal from "@/components/shared/reveal";
import { Check, FolderOpen, Sparkles, Wrench } from "lucide-react";
import type { Product } from "@/app/products/data";

type ProductOverviewSectionProps = {
  product: Product;
};

const CheckIcon = ({ accent }: { accent: string }) => (
  <Check
    className="mt-0.5 h-4 w-4 shrink-0"
    style={{ color: accent }}
    aria-hidden="true"
  />
);

const ProductOverviewSection = ({ product }: ProductOverviewSectionProps) => (
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Reveal>
        <div className="h-full rounded-3xl bg-[#F8FAFC] p-8">
          <div
            className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${product.accent}15` }}
          >
            <FolderOpen
              className="h-5 w-5"
              style={{ color: product.accent }}
              aria-hidden="true"
            />
          </div>
          <h2 className="mb-5 text-lg font-extrabold text-[#0F172A]">
            Key Specifications
          </h2>
          <ul className="space-y-3">
            {product.specs.map((spec) => (
              <li key={spec} className="flex items-start gap-3">
                <CheckIcon accent={product.accent} />
                <span className="text-sm leading-relaxed text-[#334155]">
                  {spec}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="h-full rounded-3xl bg-[#F8FAFC] p-8">
          <div
            className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${product.accent}15` }}
          >
            <Sparkles
              className="h-5 w-5"
              style={{ color: product.accent }}
              aria-hidden="true"
            />
          </div>
          <h2 className="mb-5 text-lg font-extrabold text-[#0F172A]">
            Surface Finishes
          </h2>
          <div className="flex flex-wrap gap-2">
            {product.finishes.map((finish) => (
              <span
                key={finish}
                className="rounded-full border-2 px-4 py-2 text-sm font-bold"
                style={{
                  borderColor: `${product.accent}30`,
                  color: product.accent,
                  backgroundColor: `${product.accent}08`,
                }}
              >
                {finish}
              </span>
            ))}
          </div>
          <div className="mt-6 border-t border-[#E2E8F0] pt-5">
            <p className="text-xs leading-relaxed text-[#64748B]">
              Other finishes may be available on request. Contact our sales
              team for special requirements.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="h-full rounded-3xl bg-[#F8FAFC] p-8">
          <div
            className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${product.accent}15` }}
          >
            <Wrench
              className="h-5 w-5"
              style={{ color: product.accent }}
              aria-hidden="true"
            />
          </div>
          <h2 className="mb-5 text-lg font-extrabold text-[#0F172A]">
            Common Applications
          </h2>
          <ul className="space-y-3">
            {product.applications.map((application) => (
              <li key={application} className="flex items-start gap-3">
                <CheckIcon accent={product.accent} />
                <span className="text-sm leading-relaxed text-[#334155]">
                  {application}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </div>
);

export default ProductOverviewSection;
