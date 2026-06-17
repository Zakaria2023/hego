"use client";

import { categoryMeta, type Post } from "@/app/events/data";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import CategoryBadge from "./category-badge";
import EventThumbnail from "./event-thumbnails";

const FeaturedCard = ({ post }: { post: Post }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const meta = categoryMeta[post.category];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.08)] flex flex-col lg:flex-row"
      whileHover={{
        y: -5,
        boxShadow: "0 28px 64px rgba(15,23,42,0.12)",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Thumbnail */}
      <Link
        href={`/events/${post.slug}`}
        className="relative overflow-hidden lg:w-[55%] aspect-video lg:aspect-auto shrink-0 block"
        aria-label={`Read ${post.title}`}
      >
        <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <EventThumbnail
            slug={post.slug}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#005CA3] text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
          Featured
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 lg:p-10 lg:w-[45%]">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={post.category} />
          <span className="text-slate-500 text-xs">{post.readTime}</span>
        </div>

        <time
          dateTime={post.dateISO}
          className="text-[#64748B] text-xs font-medium tracking-wide mb-3"
        >
          {post.date}
        </time>

        <Link href={`/events/${post.slug}`} aria-label={post.title}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-4 group-hover:text-[#005CA3] transition-colors duration-200 cursor-pointer">
            {post.title}
          </h2>
        </Link>

        <div className="mb-5 h-0.5 rounded-full overflow-hidden bg-slate-100">
          <motion.div
            className="h-full rounded-full bg-linear-to-r from-[#005CA3] to-[#00AADD]"
            initial={{ width: "20%" }}
            animate={inView ? { width: "100%" } : { width: "20%" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <p className="text-[#475569] text-sm leading-relaxed mb-8 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/events/${post.slug}`}
          className="inline-flex items-center gap-2 text-[#005CA3] font-bold text-sm group/link"
          aria-label={`Read article: ${post.title}`}
          style={{ color: meta.color }}
        >
          <span>Read Article</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
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
    </motion.article>
  );
};

export default FeaturedCard;
