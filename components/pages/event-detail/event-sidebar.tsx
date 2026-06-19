import { categoryMeta, type Post } from "@/app/events/data";
import EventThumbnail from "@/components/pages/events/event-thumbnails";
import { site } from "@/lib/site";
import Link from "next/link";

const SidebarPost = ({ post }: { post: Post }) => (
  <Link
    href={`/events/${post.slug}`}
    className="group flex gap-3 items-start p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
    aria-label={post.title}
  >
    <div className="relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-slate-200">
      <EventThumbnail slug={post.slug} sizes="64px" />
    </div>
    <div className="flex-1 min-w-0">
      <span className="block text-[#0F172A] text-xs font-semibold leading-snug group-hover:text-[#005CA3] transition-colors duration-200 line-clamp-2">
        {post.title}
      </span>
      <time
        dateTime={post.dateISO}
        className="mt-1 block text-[#475569] text-[10px]"
      >
        {post.date}
      </time>
    </div>
  </Link>
);

type Props = {
  post: Post;
  recentPosts: Post[];
};

const EventSidebar = ({ post, recentPosts }: Props) => {
  const meta = categoryMeta[post.category];
  const shareUrl = `${site.url}/events/${post.slug}`;

  return (
    <aside className="lg:w-80 shrink-0" aria-label="Sidebar">
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
          style={{ backgroundColor: meta.bg, borderColor: meta.border }}
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
        <div className="bg-[#FFF7ED] rounded-2xl p-5 relative overflow-hidden border border-[#FCD34D]">
          <div
            aria-hidden="true"
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30 blur-2xl bg-[#93C5FD]"
          />
          <span className="text-[#005CA3] text-[10px] font-bold tracking-widest uppercase">
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
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#005CA3] hover:bg-[#0077BB] px-4 py-2.5 rounded-lg transition-colors duration-200"
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

        {/* Share shortcuts */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
          <p className="text-xs font-bold text-[#0F172A] mb-3">Share</p>
          <div className="flex gap-2">
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg border border-slate-200 text-[#475569] hover:border-[#005CA3] hover:text-[#005CA3] text-xs font-semibold transition-all duration-200"
              aria-label="Share on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg border border-slate-200 text-[#475569] hover:border-[#005CA3] hover:text-[#005CA3] text-xs font-semibold transition-all duration-200"
              aria-label="Share on X"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default EventSidebar;
