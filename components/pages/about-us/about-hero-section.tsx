const AboutHeroSection = () => (
  <section
    aria-label="About SWEDINOX AB"
    className="relative flex min-h-[52vh] items-end overflow-hidden bg-white"
  >
    <div
      aria-hidden="true"
      className="absolute top-[-20%] right-[-5%] h-150 w-150 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
      }}
    />
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-[-10%] h-100 w-100 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(186,230,253,0.3) 0%, transparent 70%)",
      }}
    />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-36 pb-16 sm:px-6 lg:px-8">
      <div className="animate-slide-up">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF7ED] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#005CA3]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#F5A623] animate-pulse"
            aria-hidden="true"
          />
          Family-Owned Since 1999
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
          Built on <span className="steel-text">Trust</span>,
          <br />
          Driven by{" "}
          <span className="relative inline-block text-[#0F172A]">
            Excellence
            <span
              aria-hidden="true"
              className="absolute left-0 -bottom-1 h-1 w-full rounded-full bg-linear-to-r from-[#005CA3] to-[#00AADD]"
            />
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#64748B]">
          SWEDINOX AB is the destination for semi-manufactured stainless steel
          products and a trusted partner for industrial clients across the globe.
        </p>
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
