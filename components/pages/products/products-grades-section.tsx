import { Check } from "lucide-react";
import { productGrades } from "@/components/pages/products/data";

const ProductsGradesSection = () => (
  <section
    aria-label="Available steel grades"
    className="relative overflow-hidden bg-[#F8FAFC]"
  >
    <div
      aria-hidden="true"
      className="absolute left-[-8%] top-1/2 w-100 h-100 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center animate-slide-up">
        <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
          Specifications
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
          Available Grades &amp; Finishes
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {productGrades.map((grade, i) => (
          <div
            key={grade}
            className="animate-slide-up group flex cursor-default flex-col items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white p-4 transition-all duration-300 hover:border-[#FCD34D] hover:shadow-[0_8px_30px_rgba(3,105,161,0.08)] hover:-translate-y-1"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#FCD34D] bg-[#FFF7ED]">
              <Check className="h-4 w-4 text-[#005CA3]" aria-hidden="true" />
            </div>
            <span className="text-center text-xs font-semibold leading-tight text-[#334155]">
              {grade}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsGradesSection;
