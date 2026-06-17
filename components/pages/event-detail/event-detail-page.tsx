import { getPost, getRecentPosts } from "@/app/events/data";
import ReadingProgress from "./reading-progress";
import EventDetailHero from "./event-detail-hero";
import ArticleBody from "./block-renderer";
import ShareRow from "./share-row";
import EventSidebar from "./event-sidebar";

const EventDetailPage = ({ slug }: { slug: string }) => {
  const post = getPost(slug);
  const recentPosts = getRecentPosts(slug, 2);

  if (!post) return null;

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

      <ReadingProgress />
      <EventDetailHero post={post} />

      <div className="bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-14">
            <article
              className="flex-1 min-w-0"
              aria-label={`Article content: ${post.title}`}
            >
              <ArticleBody post={post} slug={slug} />
              <ShareRow shareUrl={shareUrl} shareTitle={shareTitle} />
            </article>

            <EventSidebar post={post} recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailPage;
