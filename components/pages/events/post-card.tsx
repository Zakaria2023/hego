"use client";

import { categoryMeta, type Post } from "@/app/events/data";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import CategoryBadge from "./category-badge";
import EventThumbnail from "./event-thumbnails";

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const meta = categoryMeta[post.category];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)] flex flex-col"
      whileHover={{
        y: -6,
        boxShadow: "0 24px 56px rgba(15,23,42,0.12)",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Category accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: meta.color }}
        aria-hidden="true"
      />

      {/* Thumbnail */}
      <Link
        href={`/events/${post.slug}`}
        className="relative overflow-hidden aspect-video block shrink-0"
        aria-label={`Read ${post.title}`}
      >
        <div className="absolute inset-0 w-full h-full transition-transform duration-600 ease-out group-hover:scale-[1.05]">
          <EventThumbnail
            slug={post.slug}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
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
          <h3 className="text-xl font-extrabold text-[#0F172A] leading-snug tracking-tight mb-3 group-hover:text-[#005CA3] transition-colors duration-200 cursor-pointer">
            {post.title}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
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

export default PostCard;
