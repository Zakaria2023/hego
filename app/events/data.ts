export type Block =
  | { t: "p"; v: string }
  | { t: "h2"; v: string }
  | { t: "ul"; v: string[] }
  | { t: "ulb"; v: Array<{ b: string; rest: string }> }
  | { t: "ol"; v: Array<{ title: string; body: string }> }
  | { t: "faq"; v: Array<{ q: string; a: string }> };

export interface Post {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  excerpt: string;
  category: "Industry Guide" | "Trade Show" | "News";
  readTime: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "stainless-steel-sheets-guide-applications",
    title: "Stainless Steel Sheets: Guide & Applications",
    date: "27 May 2026",
    dateISO: "2026-05-27",
    excerpt:
      "Why Stainless Steel Sheets Are a Cornerstone of Modern Industry — from alloy grades to surface finishes and industrial applications across Europe.",
    category: "Industry Guide",
    readTime: "8 min read",
    body: [
      {
        t: "h2",
        v: "Why Stainless Steel Sheets Are a Cornerstone of Modern Industry",
      },
      {
        t: "p",
        v: "Stainless steel sheets are ubiquitous in industrial manufacturing, construction, and engineering—playing a vital role in everything from food processing equipment to structural building components across Europe and beyond. Known for their corrosion resistance, durability, and cleanability, these sheets offer unmatched performance in demanding environments. With over half of all industrial-grade metal fabrication projects incorporating some form of stainless steel sheet material, understanding their properties and applications is essential for engineers, fabricators, and procurement teams alike.",
      },
      {
        t: "p",
        v: "This guide explores the core characteristics that make stainless steel sheets indispensable, including their alloy compositions, surface finishes, and load-bearing capabilities. You'll learn how to select the right grade—such as 304, 316, or 430—based on exposure conditions, required strength, and fabrication methods like cutting, bending, or welding. We'll also examine common challenges like galvanic corrosion and thermal expansion, offering practical tips to avoid costly mistakes during installation.",
      },
      {
        t: "p",
        v: "Whether you're sourcing materials in Scandinavia or specifying components for a pan-European project, this section sets the foundation for smarter, more informed decision-making when working with stainless metal sheeting.",
      },
      {
        t: "h2",
        v: "Unlocking Durability: The Core Benefits of Stainless Steel Sheets",
      },
      {
        t: "p",
        v: "Stainless steel sheets are a cornerstone in modern industrial and architectural applications, prized for their unmatched resilience and versatility. These sheets deliver superior corrosion resistance, making them ideal for environments exposed to moisture, chemicals, or extreme temperatures—such as commercial kitchens in Stockholm, industrial processing plants across Scandinavia, or coastal construction projects in Gothenburg.",
      },
      {
        t: "p",
        v: "One of the most valued properties is high tensile strength, allowing stainless sheets to maintain structural integrity under heavy loads without deformation. This makes them a preferred choice for load-bearing components in both machinery and building frameworks. Additionally, their aesthetic appeal—offering a clean, polished finish—means they serve dual functional and visual roles in everything from kitchen backsplashes to elevator cladding in Malmö high-rises.",
      },
      { t: "p", v: "Other key advantages include:" },
      {
        t: "ulb",
        v: [
          {
            b: "Hygienic surfaces",
            rest: "that resist bacterial growth, critical in food processing and healthcare facilities",
          },
          {
            b: "Heat resistance",
            rest: "for use in high-temperature environments like furnaces and exhaust systems",
          },
          {
            b: "Low maintenance requirements",
            rest: ", reducing long-term operational costs",
          },
        ],
      },
      {
        t: "p",
        v: "Their 100% recyclability also supports sustainable building practices, aligning with environmental standards across EU markets. When selecting material for durability, cleanliness, and longevity—especially in demanding Nordic climates—stainless steel sheets consistently deliver performance.",
      },
      {
        t: "h2",
        v: "7 Common Types and Grades of Stainless Steel Sheets",
      },
      {
        t: "p",
        v: "Understanding the most widely used stainless steel sheet grades helps professionals select the right material for performance, longevity, and cost-efficiency. Each grade offers unique properties tailored to specific environments and applications.",
      },
      {
        t: "ol",
        v: [
          {
            title: "304 / 304L – The Workhorse of Stainless Steel",
            body: "Ideal for indoor and mild outdoor environments, 304 stainless steel resists corrosion from water, food, and many chemicals. Its superior formability makes it a top choice for kitchen equipment, architectural trim, and storage tanks across Europe.",
          },
          {
            title: "316 / 316L – Marine-Grade Resistance",
            body: "With added molybdenum, 316 offers enhanced protection against chlorides and saltwater. Frequently used in coastal construction, pharmaceutical processing, and marine fittings, it's a reliable option for Scandinavian coastal projects.",
          },
          {
            title: "430 – Cost-Effective Magnetic Alternative",
            body: "While less corrosion-resistant than 300-series, 430 provides good ductility and aesthetic appeal at a lower cost. Commonly used in appliance trim and interior panels where extreme durability isn't critical.",
          },
          {
            title: "2205 Duplex – High Strength & Corrosion Resistance",
            body: "Combining austenitic and ferritic structures, this grade delivers exceptional strength and chloride resistance. Often selected for chemical processing and offshore platforms in harsh Nordic climates.",
          },
          {
            title: "410 – Martensitic for High Hardness",
            body: "Known for its heat-treatable properties, 410 is used in cutlery and industrial blades. Requires protective coating in humid environments to prevent surface rust.",
          },
          {
            title: "904L – Superior Acid Resistance",
            body: "Excellent for aggressive chemical environments, this high-alloy grade resists pitting and stress corrosion cracking in industrial processing plants.",
          },
          {
            title: "321 – Heat-Resistant Stability",
            body: "Stabilized with titanium, 321 performs well in high-temperature applications like exhaust systems and aerospace components, minimizing carbide precipitation during welding.",
          },
        ],
      },
      {
        t: "h2",
        v: "Industries Leading the Demand for Stainless Steel Sheets",
      },
      {
        t: "p",
        v: "Stainless steel sheets are integral across multiple high-performance industries due to their corrosion resistance, durability, and clean finish. From Stockholm to Malmö and beyond, industrial fabricators, construction firms, and food processing plants rely on these sheets to meet strict operational standards. One of the most prominent sectors is food and beverage manufacturing, where hygiene is non-negotiable. 304 and 316-grade stainless steel sheets are widely used for countertops, conveyor systems, and storage tanks because they resist contamination and withstand frequent sanitation.",
      },
      {
        t: "p",
        v: "The architectural and construction industry in Sweden increasingly specifies stainless steel for both structural and aesthetic applications. Building facades, handrails, and roofing in commercial developments in Gothenburg and Uppsala leverage the material's longevity and modern appearance. In healthcare, surgical instruments, medical cabinets, and facility surfaces are commonly fabricated from antimicrobial stainless steel sheets to maintain sterile environments.",
      },
      {
        t: "p",
        v: "Marine and offshore engineering also depend heavily on corrosion-resistant grades, especially in coastal regions where saltwater exposure accelerates material degradation. For manufacturers and engineers selecting the right grade and finish, understanding application-specific demands—such as temperature resistance, weldability, or surface polish—is essential. Always consult material specifications and consider environmental exposure when sourcing sheets for industrial use.",
      },
      {
        t: "h2",
        v: "Common Questions About Stainless Steel Sheets Answered",
      },
      {
        t: "faq",
        v: [
          {
            q: "What are the most common stainless steel sheet grades used in industrial applications?",
            a: "Grades 304 and 316 dominate industrial use due to their corrosion resistance and strength. Grade 304 is ideal for indoor applications and food processing equipment, while 316—enhanced with molybdenum—offers superior performance in marine environments and coastal areas like those in Sweden and Norway.",
          },
          {
            q: "How do I determine the right thickness and tolerance for my project?",
            a: "Sheet thickness, measured in millimeters, depends on structural demands. Thin gauges (0.5–1.0 mm) suit cladding and ventilation, while thicker sheets (2.0+ mm) are standard for heavy machinery. Always verify dimensional tolerances comply with EN 10051 standards for precision fabrication.",
          },
          {
            q: "Can stainless steel sheets be welded or machined easily in-house?",
            a: "Yes, most grades are weldable using TIG or MIG methods. Ensure proper post-weld annealing and pickling to restore corrosion resistance, especially when working in high-humidity locations.",
          },
          {
            q: "Are custom finishes available for architectural projects?",
            a: "Absolutely. Brushed, satin, mirror, and matte finishes enhance aesthetic performance in building facades and interior design across commercial properties.",
          },
          {
            q: "Where can I source certified stainless steel sheets locally?",
            a: "Many regional suppliers in Sweden and neighboring countries stock mill-certified sheets, ensuring traceability and compliance with EU material standards.",
          },
        ],
      },
      {
        t: "h2",
        v: "Final Recommendations: Choosing the Right Stainless Steel Sheet for Your Project",
      },
      {
        t: "p",
        v: "Selecting the right stainless steel sheet comes down to understanding your project's specific demands. Across industries—from food processing in Malmö to construction in Stockholm—material performance hinges on proper grade selection, surface finish, and thickness. Key considerations include corrosion resistance, particularly in coastal or high-humidity environments, mechanical strength for structural applications, and finish quality for architectural or aesthetic uses. Grades like 304 offer versatility for indoor applications, while 316 excels in harsher, salt-exposed areas common in Scandinavia's marine environments.",
      },
      {
        t: "p",
        v: "Start by assessing environmental exposure, load requirements, and fabrication methods. Will the sheet be welded, bent, or exposed to cleaning chemicals? Match the material properties accordingly. For hygienic environments such as commercial kitchens or medical facilities, a smooth, polished finish like 2B or BA ensures cleanability and compliance. In exterior architectural projects, consider both durability and visual appeal, opting for brushed or directional finishes that resist scratching and fingerprinting.",
      },
      {
        t: "p",
        v: "Always source sheets with certified material test reports to verify composition and quality. Work with trusted suppliers who offer technical guidance and material traceability. When in doubt, consult product specifications and application guidelines available through industry resources or your supplier's technical team.",
      },
      {
        t: "p",
        v: "Take the next step: evaluate your current or upcoming project requirements with these criteria in mind, and make an informed decision that ensures longevity, safety, and cost-efficiency. Your success starts with the right material choice.",
      },
    ],
  },
  {
    slug: "pleasure-to-visit-egypt",
    title: "It's a pleasure to visit Egypt.",
    date: "3 July 2023",
    dateISO: "2023-07-03",
    excerpt:
      "Looking forward to meet all our customers between 02/09 and 04/09 at Metal & Steel Egypt 2023, Cairo — Stand C17.",
    category: "Trade Show",
    readTime: "1 min read",
    body: [
      {
        t: "p",
        v: "Looking forward to meet all our customers between 02/09 and 04/09.",
      },
      {
        t: "p",
        v: "SWEDINOX AB will be exhibiting at Metal & Steel Egypt 2023 at the Egypt International Exhibitions Centre, Cairo. Visit us at Stand C17 in Hall 3 & 4. The event runs from 2–4 September 2023, with visiting hours from 11:00 am to 8:00 pm.",
      },
      {
        t: "p",
        v: "Metal & Steel Egypt is one of the region's premier trade exhibitions, held in conjunction with GIFA, METEC, wire, and Tube Middle East Africa. It brings together steel producers, distributors, processors, and buyers from across the Middle East and Africa — and we look forward to connecting with our valued partners and discovering new business opportunities.",
      },
      {
        t: "p",
        v: "If you plan to attend, don't hesitate to reach out to our team ahead of time to schedule a meeting. We'd love to discuss your stainless steel requirements, showcase our product range, and explore how SWEDINOX AB can support your operations.",
      },
    ],
  },
  {
    slug: "mecc-maastricht",
    title: "MECC – MAASTRICHT",
    date: "4 May 2023",
    dateISO: "2023-05-04",
    excerpt:
      "Looking forward to meet you all between 26/09 and 28/09 at the Stainless Steel World Conference & Expo 2023, MECC Maastricht — Stand J39.",
    category: "Trade Show",
    readTime: "1 min read",
    body: [
      {
        t: "p",
        v: "Looking forward to meet you all between 26/09 and 28/09.",
      },
      {
        t: "p",
        v: "SWEDINOX AB will be attending the Stainless Steel World Conference & Expo 2023 at MECC Maastricht, The Netherlands. The event runs from 26–28 September 2023. Be sure to join us at Stand J39.",
      },
      {
        t: "p",
        v: "Stainless Steel World is the global meeting place for stainless steel professionals — an international platform connecting producers, processors, distributors, engineers, and end-users. This is one of the most important events in the stainless steel industry calendar and we are proud to be participating again.",
      },
      {
        t: "p",
        v: "Whether you're looking to discuss procurement, explore new product lines, or simply connect with our team, we'd be glad to meet you at our stand. Reach out ahead of the event to schedule a dedicated meeting slot.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const getRecentPosts = (excludeSlug: string, count = 3) =>
  posts.filter((p) => p.slug !== excludeSlug).slice(0, count);

export const categoryMeta: Record<
  Post["category"],
  { label: string; color: string; bg: string; border: string }
> = {
  "Industry Guide": {
    label: "Industry Guide",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  "Trade Show": {
    label: "Trade Show",
    color: "#059669",
    bg: "#F0FDF4",
    border: "#BBF7D0",
  },
  News: {
    label: "News",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
};
