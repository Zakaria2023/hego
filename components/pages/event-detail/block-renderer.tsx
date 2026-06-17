"use client";

import { type Block, type Post } from "@/app/events/data";
import EventThumbnail from "@/components/pages/events/event-thumbnails";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import FaqAccordion from "./faq-accordion";

const revealEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: revealEase } },
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

const renderBlock = (block: Block, i: number) => {
  switch (block.t) {
    case "h2":
      return (
        <Reveal key={i} className="mt-12 mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight tracking-tight relative pl-4 border-l-4 border-[#005CA3]">
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
            <li key={j} className="flex items-start gap-3 text-[#374151] text-base leading-relaxed">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#005CA3] shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ulb":
      return (
        <ul key={i} className="my-5 space-y-3 pl-4">
          {block.v.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[#374151] text-base leading-relaxed">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#005CA3] shrink-0" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-[#0F172A]">{item.b}</strong>
                {item.rest}
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="my-6 space-y-4 pl-0">
          {block.v.map((item, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: j * 0.05, duration: 0.4, ease: revealEase }}
              className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.04)]"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#005CA3] text-white text-sm font-bold flex items-center justify-center">
                {j + 1}
              </span>
              <div>
                <strong className="block text-[#0F172A] font-semibold text-sm mb-1">
                  {item.title}
                </strong>
                <span className="text-[#475569] text-sm leading-relaxed">{item.body}</span>
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

type Props = { post: Post; slug: string };

const ArticleBody = ({ post, slug }: Props) => (
  <>
    {/* Featured illustration */}
    <Reveal className="mb-10">
      <div
        className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.09)]"
        style={{ aspectRatio: "16/9" }}
      >
        <EventThumbnail
          slug={slug}
          sizes="(max-width: 1024px) 100vw, 66vw"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </Reveal>

    {/* Article body */}
    <div>{post.body.map((block, i) => renderBlock(block, i))}</div>
  </>
);

export default ArticleBody;
