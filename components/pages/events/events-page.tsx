import { posts } from "@/app/events/data";
import StructuredData from "@/components/shared/structured-data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import EventsCtaStrip from "./events-cta-strip";
import EventsHero from "./events-hero";
import FeaturedCard from "./featured-card";
import PostCard from "./post-card";

const EventsPage = () => {
  const [featured, ...rest] = posts;

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "SWEDINOX AB News and Events",
          url: `${site.url}/events`,
          description:
            "SWEDINOX AB news, trade show updates, industry guides, and market insights for prime, ex-prime, and second-choice stainless steel sourcing.",
          keywords:
            "second choice stainless steel, ex-prime stainless steel, stainless steel news, trade show updates, stainless steel industry guides",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.dateISO,
            url: `${site.url}/events/${post.slug}`,
            description: post.excerpt,
            keywords: [
              "second choice stainless steel",
              "stainless steel industry article",
              post.category,
            ].join(", "),
            author: { "@type": "Organization", name: "SWEDINOX AB" },
          })),
        }}
      />
      <StructuredData
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "News and Events", path: "/events" },
        ])}
      />

      <EventsHero />

      <main className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-16">
            <FeaturedCard post={featured} />
          </div>

          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {rest.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>

        <EventsCtaStrip />
      </main>
    </>
  );
};

export default EventsPage;
