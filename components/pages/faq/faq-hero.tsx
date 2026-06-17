import { faqData } from "@/app/faq/data";
import Link from "next/link";

const FaqHero = () => {
  const totalQuestions = faqData.reduce((acc, cat) => acc + cat.items.length, 0);

  const stats = [
    { value: String(totalQuestions), label: "Questions answered" },
    { value: String(faqData.length), label: "Categories" },
    { value: "12+", label: "Years of expertise" },
    { value: "10+", label: "Countries served" },
  ];

  return (
    <section
      aria-label="FAQ hero"
      className="relative min-h-[55vh] flex items-end overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-15%] right-[-5%] w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(219,234,254,0.55) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] left-[-8%] w-105 h-105 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(186,230,253,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-36">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#475569]">
            <li>
              <Link
                href="/"
                className="hover:text-[#005CA3] transition-colors duration-150"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-[#0F172A] font-medium" aria-current="page">
              FAQ
            </li>
          </ol>
        </nav>

        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase mb-5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
              aria-hidden="true"
            />
            Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-3xl animate-slide-in">
            Frequently Asked <span className="steel-text">Questions</span>
          </h1>
          <p className="mt-5 text-[#64748B] text-lg max-w-xl leading-relaxed">
            Everything you need to know about our stainless steel products,
            ordering, delivery, and more. Can&apos;t find your answer?{" "}
            <Link
              href="/contact-us-1"
              className="text-[#005CA3] hover:text-[#0077BB] underline underline-offset-4 transition-colors duration-150"
            >
              Reach out to us directly.
            </Link>
          </p>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-slide-up"
              style={{ animationDelay: `${0.15 + i * 0.06}s` }}
            >
              <div className="h-full flex flex-col justify-center text-center p-6 rounded-2xl bg-[#FFF7ED] border border-[#FCD34D]">
                <div className="text-3xl font-black text-[#0F172A] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-[#475569] text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
