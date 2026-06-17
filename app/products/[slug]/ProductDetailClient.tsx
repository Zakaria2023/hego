"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { getProduct, products } from "../data";

const Reveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 text-[#005CA3] flex-shrink-0 mt-0.5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const ProductDetailClient = ({ slug }: { slug: string }) => {
  const product = getProduct(slug);
  if (!product) return null;

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: `https://swedinox.se${product.image}`,
            brand: { "@type": "Brand", name: "SWEDINOX AB" },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "EUR",
              seller: { "@type": "Organization", name: "SWEDINOX AB" },
            },
          }),
        }}
      />

      <section
        aria-label={`${product.name} product detail`}
        className="relative min-h-[90vh] flex overflow-hidden bg-white"
      >
        <div
          aria-hidden="true"
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex items-center w-full lg:w-[55%] px-6 sm:px-10 lg:pl-16 xl:pl-24 pt-28 pb-20">
          <div className="max-w-lg w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-[#94A3B8]">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#005CA3] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-[#005CA3] transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#0F172A] font-medium" aria-current="page">
                  {product.name}
                </li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  backgroundColor: `${product.accent}15`,
                  color: product.accent,
                  border: `1px solid ${product.accent}30`,
                }}
              >
                Stainless Steel
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.05]">
                {product.name}
              </h1>
              <p
                className="mt-2 text-lg font-semibold"
                style={{ color: product.accent }}
              >
                {product.tagline}
              </p>
            </motion.div>

            <motion.p
              className="mt-5 text-[#475569] text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
            >
              {product.longDescription}
            </motion.p>

            <motion.div
              className="mt-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xs font-bold text-[#94A3B8] tracking-widest uppercase mb-3">
                Available Grades
              </p>
              <div className="flex flex-wrap gap-2">
                {product.grades.map((grade) => (
                  <span
                    key={grade}
                    className="px-3 py-1.5 rounded-full text-xs font-bold border"
                    style={{
                      borderColor: `${product.accent}40`,
                      color: product.accent,
                      backgroundColor: `${product.accent}08`,
                    }}
                  >
                    {grade}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
            >
              <Link
                href="/contact-us-1"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-bold tracking-wide shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 cursor-pointer group"
                style={{ backgroundColor: product.accent }}
                aria-label={`Request a quote for ${product.name}`}
              >
                Request a Quote
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                href={product.secondaryCtaHref ?? "/products"}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#E2E8F0] hover:border-[#005CA3] text-[#334155] hover:text-[#005CA3] text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer"
              >
                {product.secondaryCtaLabel ?? "View All Products"}
              </Link>
            </motion.div>

            {product.heroNote ? (
              <motion.p
                className="mt-4 text-sm text-[#64748B] leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
              >
                {product.heroNote}
              </motion.p>
            ) : null}
          </div>
        </div>

        <div
          className="hidden lg:block absolute right-0 top-0 w-[47%] h-full pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src={product.image}
            alt={`${product.name} - SWEDINOX AB`}
            fill
            priority
            sizes="47vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-white via-white/60 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Reveal>
              <div className="bg-[#F8FAFC] rounded-3xl p-8 h-full">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${product.accent}15` }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                    style={{ color: product.accent }}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 3A1.75 1.75 0 002 4.75v3.26a3.235 3.235 0 011.75-.51h12.5c.644 0 1.245.188 1.75.51V6.75A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75zM3.75 9A1.75 1.75 0 002 10.75v4.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-4.5A1.75 1.75 0 0016.25 9H3.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-extrabold text-[#0F172A] mb-5">
                  Key Specifications
                </h2>
                <ul className="space-y-3">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <Check />
                      <span className="text-sm text-[#334155] leading-relaxed">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-[#F8FAFC] rounded-3xl p-8 h-full">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${product.accent}15` }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                    style={{ color: product.accent }}
                    aria-hidden="true"
                  >
                    <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" />
                  </svg>
                </div>
                <h2 className="text-lg font-extrabold text-[#0F172A] mb-5">
                  Surface Finishes
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.finishes.map((finish) => (
                    <span
                      key={finish}
                      className="px-4 py-2 rounded-full text-sm font-bold border-2"
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
                <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Other finishes may be available on request. Contact our
                    sales team for special requirements.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#F8FAFC] rounded-3xl p-8 h-full">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${product.accent}15` }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                    style={{ color: product.accent }}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-extrabold text-[#0F172A] mb-5">
                  Common Applications
                </h2>
                <ul className="space-y-3">
                  {product.applications.map((application) => (
                    <li key={application} className="flex items-start gap-3">
                      <Check />
                      <span className="text-sm text-[#334155] leading-relaxed">
                        {application}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mx-4 sm:mx-6 lg:mx-8 mb-20 rounded-3xl bg-gradient-to-r from-[#005CA3] to-[#0077BB] p-10 lg:p-14 text-center overflow-hidden relative">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, white 0%, transparent 70%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, white 0%, transparent 70%)",
              }}
            />
            <p className="relative text-blue-100 text-xs font-bold tracking-widest uppercase mb-3">
              Ready to order?
            </p>
            <h2 className="relative text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Get a Quote for {product.name}
            </h2>
            <p className="relative text-blue-100 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us your grade, finish, dimensions and quantity. Our team
              responds within one business day.
            </p>
            <Link
              href="/contact-us-1"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#005CA3] text-sm font-extrabold tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
            >
              Contact Our Sales Team
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </Reveal>

        <section
          aria-labelledby="related-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        >
          <Reveal>
            <h2
              id="related-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-10 tracking-tight"
            >
              More Products
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((relatedProduct, index) => (
              <Reveal key={relatedProduct.slug} delay={index * 0.1}>
                <Link
                  href={`/products/${relatedProduct.slug}`}
                  className="group block rounded-3xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  aria-label={`View ${relatedProduct.name}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase"
                      style={{ color: relatedProduct.accent }}
                    >
                      {relatedProduct.tagline}
                    </span>
                    <h3 className="mt-0.5 text-lg font-extrabold text-[#0F172A]">
                      {relatedProduct.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#64748B] line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <span
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: relatedProduct.accent }}
                    >
                      View details
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailClient;
