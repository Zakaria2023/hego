import { getPost, getRecentPosts } from "@/app/events/data";
import StructuredData from "@/components/shared/structured-data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { seoImages, site } from "@/lib/site";
import ArticleBody from "./block-renderer";
import EventDetailHero from "./event-detail-hero";
import EventSidebar from "./event-sidebar";
import ReadingProgress from "./reading-progress";
import ShareRow from "./share-row";

const EventDetailPage = ({ slug }: { slug: string }) => {
  const post = getPost(slug);
  const recentPosts = getRecentPosts(slug, 2);

  if (!post) return null;

  const shareUrl = `${site.url}/events/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);
  const schemaImage =
    post.category === "Industry Guide"
      ? `${site.url}${seoImages.products.url}`
      : `${site.url}${seoImages.events.url}`;

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: shareUrl,
          mainEntityOfPage: shareUrl,
          image: schemaImage,
          datePublished: post.dateISO,
          dateModified: post.dateISO,
          articleSection: post.category,
          keywords: [
            "stainless steel",
            "second choice stainless steel",
            post.category,
            "SWEDINOX AB",
          ].join(", "),
          author: {
            "@type": "Organization",
            name: "SWEDINOX AB",
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: "SWEDINOX AB",
            url: site.url,
            logo: {
              "@type": "ImageObject",
              url: `${site.url}/logo.png`,
            },
          },
        }}
      />
      <StructuredData
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "News and Events", path: "/events" },
          { name: post.title, path: `/events/${post.slug}` },
        ])}
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
