import Link from "next/link";

const FaqCta = () => (
  <section
    aria-label="Still have questions"
    className="relative overflow-hidden border-t border-slate-100"
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0F9FF]"
    />
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, rgba(219,234,254,0.8) 0%, transparent 70%)",
      }}
    />

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FCD34D] bg-[#FFF7ED] text-[#005CA3] text-xs font-semibold tracking-widest uppercase mb-5">
        <span
          className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
          aria-hidden="true"
        />
        Still have questions?
      </span>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 mt-2">
        Our team is here to help
      </h2>
      <p className="text-[#64748B] text-base max-w-xl mx-auto leading-relaxed mb-10">
        Can&apos;t find the answer you&apos;re looking for? Get in touch with
        our stainless steel specialists directly.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/contact-us-1"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#005CA3] hover:bg-[#0077BB] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(3,105,161,0.3)] hover:shadow-[0_8px_32px_rgba(3,105,161,0.4)] hover:-translate-y-0.5 group"
        >
          Contact Us
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
        <a
          href="https://wa.me/46732488880"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-[#E2E8F0] hover:border-[#25D366] text-[#334155] hover:text-[#16a34a] text-sm font-semibold transition-all duration-200"
          aria-label="Contact SWEDINOX AB on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-[#25D366]"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);

export default FaqCta;
