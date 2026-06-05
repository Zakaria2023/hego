"use client";

import { ShaderAnimation } from "@/app/components/ui/shader-lines";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { categoryMeta, posts, type Post } from "./data";
import { thumbnails } from "./thumbnails";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

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
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Category badge ─── */
const CategoryBadge = ({ category }: { category: Post["category"] }) => {
  const meta = categoryMeta[category];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide border"
      style={{
        color: meta.color,
        backgroundColor: meta.bg,
        borderColor: meta.border,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: meta.color }}
        aria-hidden="true"
      />
      {meta.label}
    </span>
  );
};

/* ─── Featured Post Card (horizontal) ─── */
const FeaturedCard = ({ post }: { post: Post }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.08)] flex flex-col lg:flex-row"
      whileHover={{
        y: -6,
        boxShadow: "0 30px 70px rgba(15,23,42,0.13)",
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Thumbnail */}
      <Link
        href={`/events/${post.slug}`}
        className="relative overflow-hidden lg:w-[55%] aspect-video lg:aspect-auto flex-shrink-0 block"
        aria-label={`Read ${post.title}`}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {thumbnails[post.slug]}
        </motion.div>
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Featured badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#0369A1] text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
          Featured
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 lg:p-10 lg:w-[45%]">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={post.category} />
          <span className="text-slate-400 text-xs">{post.readTime}</span>
        </div>

        <time
          dateTime={post.dateISO}
          className="text-[#64748B] text-xs font-medium tracking-wide mb-2"
        >
          {post.date}
        </time>

        <Link href={`/events/${post.slug}`} aria-label={post.title}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-4 group-hover:text-[#0369A1] transition-colors duration-250 cursor-pointer">
            {post.title}
          </h2>
        </Link>

        {/* Animated underline */}
        <div className="mb-5 h-0.5 rounded-full bg-slate-100 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#0369A1] to-[#38BDF8]"
            initial={{ width: "20%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <p className="text-[#475569] text-sm leading-relaxed mb-8 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/events/${post.slug}`}
          className="inline-flex items-center gap-2 text-[#0369A1] font-bold text-sm group/link"
          aria-label={`Read article: ${post.title}`}
        >
          <span>Read Article</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </motion.svg>
        </Link>
      </div>
    </motion.article>
  );
};

/* ─── Regular Post Card (vertical) ─── */
const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const meta = categoryMeta[post.category];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 44, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)] flex flex-col"
      whileHover={{
        y: -8,
        boxShadow: "0 28px 60px rgba(15,23,42,0.13)",
        borderColor: meta.border,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Category accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 origin-left transition-transform duration-500"
        style={{ backgroundColor: meta.color }}
        aria-hidden="true"
      />

      {/* Thumbnail */}
      <Link
        href={`/events/${post.slug}`}
        className="relative overflow-hidden aspect-video block flex-shrink-0"
        aria-label={`Read ${post.title}`}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {thumbnails[post.slug]}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={post.category} />
          <span className="text-slate-400 text-[11px]">{post.readTime}</span>
        </div>

        <time
          dateTime={post.dateISO}
          className="text-[#64748B] text-xs font-medium tracking-wide mb-2"
        >
          {post.date}
        </time>

        <Link href={`/events/${post.slug}`} aria-label={post.title}>
          <h3
            className="text-xl font-extrabold text-[#0F172A] leading-snug tracking-tight mb-3 transition-colors duration-200 cursor-pointer"
            style={{ ["--hover-color" as string]: meta.color }}
          >
            <span className="group-hover:text-[#0369A1] transition-colors duration-200">
              {post.title}
            </span>
          </h3>
        </Link>

        <p className="text-[#475569] text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
          {post.excerpt}
        </p>

        <Link
          href={`/events/${post.slug}`}
          className="inline-flex items-center gap-1.5 font-semibold text-sm transition-colors duration-200"
          style={{ color: meta.color }}
          aria-label={`Continue reading: ${post.title}`}
        >
          <span>Continue Reading</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3.5 h-3.5"
            aria-hidden="true"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </motion.svg>
        </Link>
      </div>
    </motion.article>
  );
};

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */
const EventsClient = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [featured, ...rest] = posts;

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "SWEDINOX AB – News & Events",
            url: "https://swedinox.se/events",
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              datePublished: p.dateISO,
              url: `https://swedinox.se/events/${p.slug}`,
              description: p.excerpt,
              author: { "@type": "Organization", name: "SWEDINOX AB" },
            })),
          }),
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        aria-label="News and events hero"
        className="relative min-h-[52vh] flex items-end overflow-hidden bg-white"
      >
        {/* Shader animation background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ opacity: 0.18 }}
        >
          <ShaderAnimation />
        </div>

        <div
          aria-hidden="true"
          className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
          }}
        />
        <motion.div
          style={{ y: heroY }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40"
        >
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0369A1] transition-colors duration-150"
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
                News &amp; Events
              </li>
            </ol>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold tracking-widest uppercase mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"
                aria-hidden="true"
              />
              {posts.length} Posts Published
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-3xl">
              News &amp; <span className="steel-text">Events</span>
            </h1>
            <p className="mt-5 text-[#64748B] text-lg max-w-xl leading-relaxed">
              Industry guides, trade show updates, and company news from
              SWEDINOX AB — your trusted partner in stainless steel.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── POSTS ── */}
      <main className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Featured post */}
          <Reveal className="mb-16">
            <FeaturedCard post={featured} />
          </Reveal>

          {/* Divider with label */}
          {rest.length > 0 && (
            <Reveal className="mb-10">
              <div className="flex items-center gap-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-200" />
                <span className="text-[#64748B] text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                  More Posts
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-200" />
              </div>
            </Reveal>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {rest.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>

        {/* ── CTA STRIP ── */}
        <section aria-label="Get in touch" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0F9FF]"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(219,234,254,0.7) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold tracking-widest uppercase mb-5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"
                  aria-hidden="true"
                />
                Stay Connected
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight max-w-xl mx-auto leading-tight">
                Ready to Discuss Your Requirements?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[#64748B] max-w-md mx-auto leading-relaxed">
                Whether you read about a specific grade or saw us at a trade
                show — our team is ready to help you source the right stainless
                steel.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact-us-1"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0369A1] hover:bg-[#0284C7] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(3,105,161,0.3)] hover:shadow-[0_8px_32px_rgba(3,105,161,0.4)] hover:-translate-y-0.5 group"
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#E2E8F0] hover:border-[#0369A1] text-[#334155] hover:text-[#0369A1] text-sm font-bold tracking-wide transition-all duration-200"
                  aria-label="View SWEDINOX AB products"
                >
                  View Products
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventsClient;
