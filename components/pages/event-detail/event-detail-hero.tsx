import { categoryMeta, type Post } from "@/app/events/data";
import Link from "next/link";

type Props = { post: Post };

const EventDetailHero = ({ post }: Props) => {
  const meta = categoryMeta[post.category];

  return (
    <section
      aria-label={`Article: ${post.title}`}
      className="relative min-h-[55vh] flex items-end overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-15%] right-[-5%] w-150 h-150 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${meta.color}1A 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[-8%] w-100 h-100 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(186,230,253,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex items-center gap-2 text-xs text-[#475569]">
            <li>
              <Link
                href="/"
                className="hover:text-[#005CA3] transition-colors duration-150"
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
                className="hover:text-[#005CA3] transition-colors duration-150"
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
              className="text-[#0F172A] truncate max-w-50"
              aria-current="page"
            >
              {post.title}
            </li>
          </ol>
        </nav>

        <div className="animate-slide-up">
          {/* Category + read time badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border"
              style={{
                color: meta.color,
                backgroundColor: `${meta.color}1A`,
                borderColor: `${meta.color}44`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: meta.color }}
                aria-hidden="true"
              />
              {meta.label}
            </span>
            <span className="text-[#64748B] text-xs border border-[#E2E8F0] rounded-full px-2.5 py-1 bg-[#F8FAFC]">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-3xl mb-5">
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
            <span className="text-[#CBD5E1]" aria-hidden="true">·</span>
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
        </div>
      </div>
    </section>
  );
};

export default EventDetailHero;
