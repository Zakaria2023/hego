import { allFaqItems } from "@/app/faq/data";
import FaqHero from "./faq-hero";
import FaqBody from "./faq-body";
import FaqCta from "./faq-cta";

const FaqPage = () => (
  <>
    {/* JSON-LD FAQPage */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }),
      }}
    />

    <FaqHero />
    <FaqBody />
    <FaqCta />
  </>
);

export default FaqPage;
