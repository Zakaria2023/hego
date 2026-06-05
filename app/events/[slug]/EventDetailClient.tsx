"use client";

import { ShaderAnimation } from "@/app/components/ui/shader-lines";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  categoryMeta,
  getPost,
  getRecentPosts,
  type Block,
  type Post,
} from "../data";
import { thumbnails } from "../thumbnails";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
  const inView = useInView(ref, { once: true, margin: "-60px" });
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

/* ─── FAQ Accordion ─── */
const FaqAccordion = ({ items }: { items: { q: string; a: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      className="space-y-3 my-8"
      role="list"
      aria-label="Frequently asked questions"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.06,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-[0_2px_12px_rgba(15,23,42,0.05)]"
          role="listitem"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-start gap-4 px-6 py-5 text-left group"
            aria-expanded={openIndex === i}
            aria-controls={`faq-${i}`}
          >
            <motion.div
              className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center"
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 text-[#1D4ED8]"
                aria-hidden="true"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </motion.div>
            <span className="font-semibold text-[#0F172A] text-sm leading-relaxed group-hover:text-[#0369A1] transition-colors duration-200">
              {item.q}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                id={`faq-${i}`}
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pl-16 text-[#475569] text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Body block renderer ─── */
const renderBlock = (block: Block, i: number) => {
  switch (block.t) {
    case "h2":
      return (
        <Reveal key={i} className="mt-12 mb-4" delay={0}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight tracking-tight relative pl-4 border-l-4 border-[#0369A1]">
            {block.v}
          </h2>
        </Reveal>
      );

    case "p":
      return (
        <p key={i} className="text-[#374151] text-base leading-[1.85] mb-5">
          {block.v}
        </p>
      );

    case "ul":
      return (
        <ul key={i} className="my-5 space-y-2 pl-4">
          {block.v.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[#374151] text-base leading-relaxed"
            >
              <span
                className="mt-2 w-2 h-2 rounded-full bg-[#0369A1] flex-shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "ulb":
      return (
        <ul key={i} className="my-5 space-y-3 pl-4">
          {block.v.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[#374151] text-base leading-relaxed"
            >
              <span
                className="mt-2 w-2 h-2 rounded-full bg-[#0369A1] flex-shrink-0"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-[#0F172A]">
                  {item.b}
                </strong>
                {item.rest}
              </span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol key={i} className="my-6 space-y-5 pl-0">
          {block.v.map((item, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: j * 0.05,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.04)]"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0369A1] text-white text-sm font-bold flex items-center justify-center">
                {j + 1}
              </span>
              <div>
                <strong className="block text-[#0F172A] font-semibold text-sm mb-1">
                  {item.title}
                </strong>
                <span className="text-[#475569] text-sm leading-relaxed">
                  {item.body}
                </span>
              </div>
            </motion.li>
          ))}
        </ol>
      );

    case "faq":
      return <FaqAccordion key={i} items={block.v} />;

    default:
      return null;
  }
};

/* ─── Sidebar: Recent Post row ─── */
const SidebarPost = ({ post }: { post: Post }) => (
  <Link
    href={`/events/${post.slug}`}
    className="group flex gap-3 items-start p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
    aria-label={post.title}
  >
    <div className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-slate-200">
      {thumbnails[post.slug]}
    </div>
    <div className="flex-1 min-w-0">
      <span className="block text-[#0F172A] text-xs font-semibold leading-snug group-hover:text-[#0369A1] transition-colors duration-200 line-clamp-2">
        {post.title}
      </span>
      <time
        dateTime={post.dateISO}
        className="mt-1 block text-[#94A3B8] text-[10px]"
      >
        {post.date}
      </time>
    </div>
  </Link>
);

/* ─── Share button ─── */
const ShareButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#0369A1] hover:text-[#0369A1] text-[#475569] text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
    aria-label={label}
  >
    {children}
  </a>
);

/* ═══════════════════════════ MAIN COMPONENT ═══════════════════════════ */
const EventDetailClient = ({ slug }: { slug: string }) => {
  const post = getPost(slug);
  const recentPosts = getRecentPosts(slug, 2);

  // Reading progress
  const { scrollYProgress } = useScroll();

  // Hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "28%"]);

  if (!post) return null;

  const meta = categoryMeta[post.category];
  const shareUrl = `https://swedinox.se/events/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.dateISO,
            author: {
              "@type": "Organization",
              name: "SWEDINOX AB",
              url: "https://swedinox.se",
            },
            publisher: {
              "@type": "Organization",
              name: "SWEDINOX AB",
              url: "https://swedinox.se",
            },
            description: post.excerpt,
            url: shareUrl,
          }),
        }}
      />

      {/* ── Reading Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #0369A1, #38BDF8, #0369A1)",
        }}
        aria-hidden="true"
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        aria-label={`Article: ${post.title}`}
        className="relative min-h-[55vh] flex items-end overflow-hidden bg-white"
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
            background: `radial-gradient(circle, ${meta.color}22 0%, transparent 70%)`,
          }}
        />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40"
        >
          {/* Back link */}
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
              <li>
                <Link
                  href="/events"
                  className="hover:text-[#0369A1] transition-colors duration-150"
                >
                  News &amp; Events
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
              <li
                className="text-[#0F172A] truncate max-w-[200px]"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border"
                style={{
                  color: meta.color,
                  backgroundColor: `${meta.color}22`,
                  borderColor: `${meta.color}44`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: meta.color }}
                  aria-hidden="true"
                />
                {meta.label}
              </span>
              <span className="text-[#64748B] text-xs border border-[#E2E8F0] rounded-full px-2.5 py-1 bg-[#F8FAFC]">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-3xl mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <time
                dateTime={post.dateISO}
                className="text-[#64748B] text-sm flex items-center gap-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.date}
              </time>
              <span className="text-[#CBD5E1] text-sm">·</span>
              <span className="text-[#64748B] text-sm flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CONTENT ── */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-14">
            {/* ─ ARTICLE ─ */}
            <article
              className="flex-1 min-w-0"
              aria-label={`Article content: ${post.title}`}
            >
              {/* Featured illustration */}
              <Reveal className="mb-10">
                <div
                  className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.09)]"
                  style={{ aspectRatio: "16/9" }}
                >
                  {thumbnails[slug]}
                </div>
              </Reveal>

              {/* Article body */}
              <div className="prose-container">
                {post.body.map((block, i) => renderBlock(block, i))}
              </div>

              {/* Divider */}
              <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* Share row */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-[#0F172A] text-sm font-semibold">
                  Share this post:
                </span>
                <ShareButton
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  label="Share on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </ShareButton>
                <ShareButton
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                  label="Share on X (Twitter)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Share on X
                </ShareButton>
                <ShareButton
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareTitle}`}
                  label="Share on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </ShareButton>
              </div>

              {/* Back link */}
              <div className="mt-12">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 text-[#0369A1] text-sm font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
                  aria-label="Back to all posts"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All Posts
                </Link>
              </div>
            </article>

            {/* ─ SIDEBAR ─ */}
            <aside className="lg:w-80 flex-shrink-0" aria-label="Sidebar">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)] overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100">
                      <h2 className="text-sm font-bold text-[#0F172A] tracking-wide">
                        Recent Posts
                      </h2>
                    </div>
                    <div className="p-3 space-y-1">
                      {recentPosts.map((p) => (
                        <SidebarPost key={p.slug} post={p} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Category info card */}
                <div
                  className="rounded-2xl border p-5 overflow-hidden"
                  style={{
                    backgroundColor: meta.bg,
                    borderColor: meta.border,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: meta.color }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-xs font-bold tracking-wide uppercase"
                      style={{ color: meta.color }}
                    >
                      {meta.label}
                    </span>
                  </div>
                  <p className="text-[#475569] text-xs leading-relaxed">
                    {post.category === "Industry Guide"
                      ? "Our expert guides help procurement teams, engineers, and fabricators make confident decisions when sourcing stainless steel."
                      : "SWEDINOX AB regularly participates in global trade shows to connect with partners and showcase our product range."}
                  </p>
                </div>

                {/* CTA card */}
                <div className="bg-[#EFF6FF] rounded-2xl p-5 relative overflow-hidden border border-[#BFDBFE]">
                  <div
                    aria-hidden="true"
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30 blur-2xl bg-[#93C5FD]"
                  />
                  <span className="text-[#0369A1] text-[10px] font-bold tracking-widest uppercase">
                    Need Help?
                  </span>
                  <h3 className="mt-2 text-[#0F172A] text-sm font-extrabold leading-snug mb-3">
                    Talk to a Stainless Steel Expert
                  </h3>
                  <p className="text-[#64748B] text-xs leading-relaxed mb-4">
                    Get fast answers on grades, finishes, and availability.
                  </p>
                  <Link
                    href="/contact-us-1"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0369A1] hover:bg-[#0284C7] px-4 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer"
                    aria-label="Contact SWEDINOX AB"
                  >
                    Request a Quote
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
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
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailClient;
