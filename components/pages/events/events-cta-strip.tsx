import Link from "next/link";

const EventsCtaStrip = () => (
  <section
    aria-label="Get in touch"
    className="relative overflow-hidden border-t border-slate-100"
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-linear-to-br from-[#EFF6FF] via-white to-[#F0F9FF]"
    />
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, rgba(219,234,254,0.7) 0%, transparent 70%)",
      }}
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase mb-5">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse"
          aria-hidden="true"
        />
        Stay Connected
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight max-w-xl mx-auto leading-tight mt-2">
        Ready to Discuss Your Requirements?
      </h2>
      <p className="mt-4 text-[#64748B] max-w-md mx-auto leading-relaxed">
        Whether you read about a specific grade or saw us at a trade show — our
        team is ready to help you source the right stainless steel.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/contact-us-1"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(3,105,161,0.3)] hover:shadow-[0_8px_32px_rgba(3,105,161,0.4)] hover:-translate-y-0.5 group"
          aria-label="Contact SWEDINOX AB"
        >
          <span>Contact Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#E2E8F0] hover:border-[#005CA3] text-[#334155] hover:text-[#005CA3] text-sm font-bold tracking-wide transition-all duration-200"
          aria-label="View SWEDINOX AB products"
        >
          View Products
        </Link>
      </div>
    </div>
  </section>
);

export default EventsCtaStrip;
