import { allFaqItems } from "@/app/faq/data";
import StructuredData from "@/components/shared/structured-data";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import FaqBody from "./faq-body";
import FaqCta from "./faq-cta";
import FaqHero from "./faq-hero";

const FaqPage = () => (
  <>
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        name: "SWEDINOX AB Stainless Steel FAQ",
        url: `${site.url}/faq`,
        description:
          "Answers about prime, ex-prime, and second-choice stainless steel grades, ordering, logistics, and sourcing from SWEDINOX AB.",
        mainEntity: allFaqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }}
    />
    <StructuredData
      data={buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ])}
    />

    <FaqHero />
    <FaqBody />
    <FaqCta />
  </>
);

export default FaqPage;
