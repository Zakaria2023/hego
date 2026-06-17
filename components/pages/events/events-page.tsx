import { posts } from "@/app/events/data";
import EventsHero from "./events-hero";
import FeaturedCard from "./featured-card";
import PostCard from "./post-card";
import EventsCtaStrip from "./events-cta-strip";

const EventsPage = () => {
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

      <EventsHero />

      <main className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Featured post */}
          <div className="mb-16">
            <FeaturedCard post={featured} />
          </div>

          {/* Posts grid */}
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
