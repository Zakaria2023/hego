export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  items: FaqItem[];
}

export const faqData: FaqCategory[] = [
  {
    id: "products",
    label: "Products",
    icon: "📦",
    description:
      "Questions about our product range, formats, and available options.",
    items: [
      {
        q: "What types of stainless steel products does SWEDINOX AB offer?",
        a: "We supply six main categories of semi-manufactured stainless steel: Coils (prime, ex-prime and 2nd choice quality), Baby Coils (from 500 KG), Sheets (cold and hot rolled, standard and non-standard sizes), Strips (width from 10 mm), Circles (diameter from 150 mm, laser cut), and Head & Tail (width 700 mm+, length up to 3000 mm, thickness 0.4–6 mm). All products are available in a wide range of grades and surface finishes.",
      },
      {
        q: "What is the difference between prime, ex-prime, and 2nd choice quality?",
        a: "Prime quality coils and sheets meet all original mill specifications with no surface or dimensional defects. Ex-prime material was originally produced to prime standards but has minor surface marks or cosmetic imperfections that do not affect mechanical or corrosion performance. 2nd choice material may have more visible surface variations but still meets structural requirements. Ex-prime and 2nd choice are often the right choice for applications where appearance is not critical, offering significant cost savings.",
      },
      {
        q: "What are Baby Coils and who are they suitable for?",
        a: "Baby Coils are smaller-weight coils starting from 500 KG. They are ideal for processing operations or fabricators that cannot handle full-size coils, for smaller production runs, or for warehouses with limited lifting capacity. They are available in the same grades and surface finishes as full coils and can be slit or cut to your required dimensions.",
      },
      {
        q: "Can I order stainless steel sheets in non-standard sizes?",
        a: "Yes. We supply sheets in both standard European sizes and non-standard dimensions to reduce waste in your production process. Cold rolled and hot rolled options are available. Please contact our sales team with your required width, length, and thickness and we will advise on the best available option.",
      },
      {
        q: "What is the minimum width for stainless steel strips?",
        a: "Our stainless steel strips are available from a minimum width of 10 mm. Strips are precision-slit to your required width from coil stock. Custom lengths and slit tolerances can be arranged — reach out to our team for a tailored quote.",
      },
      {
        q: "How are Circles produced and what sizes are available?",
        a: "Our stainless steel circles are laser-cut for precision and are available from 150 mm diameter upward. They are supplied in grades 304 and 430 and are suitable for applications such as tank end caps, pot bases, flanges, and architectural discs. Custom diameters are available on request.",
      },
      {
        q: "What is Head & Tail material?",
        a: "Head & Tail refers to the beginning and end sections of a coil that fall outside the standard tolerances of the main coil body. These pieces typically range from 700 mm to 3000 mm in length, 700 mm+ in width, and 0.4–6 mm in thickness. Available finishes include BA, 2B, and S.B. Head & Tail is a cost-effective option for applications where exact coil-to-coil consistency is not required.",
      },
    ],
  },
  {
    id: "grades",
    label: "Grades & Specs",
    icon: "🔬",
    description:
      "Technical questions about steel grades, properties, and surface finishes.",
    items: [
      {
        q: "Which stainless steel grades does SWEDINOX AB stock?",
        a: "We regularly stock grades 304 / 304L, 316 / 316L, and 430, which cover the large majority of industrial applications. We can also source 2205 Duplex, 410, 904L, 321, and other special alloys on request. Contact our sales team with your specification and we will advise on availability and lead time.",
      },
      {
        q: "What is the difference between grade 304 and 316L?",
        a: "Grade 304 is the most widely used austenitic stainless steel, offering excellent corrosion resistance against water, food, and many common chemicals. It is ideal for indoor environments, food processing equipment, kitchen surfaces, and architectural trim. Grade 316L adds molybdenum to the alloy, providing significantly enhanced resistance to chlorides, saltwater, and harsh chemical environments. It is the preferred choice for marine applications, coastal construction, pharmaceutical processing, and any environment with chloride exposure.",
      },
      {
        q: "When should I choose grade 430 instead of 304?",
        a: "Grade 430 is a ferritic (magnetic) stainless steel that is lower in cost than the 300-series austenitic grades. It offers good corrosion resistance in mild environments and has an attractive appearance. It is commonly used for appliance trim, interior architectural panels, automotive trim, and applications where some cost savings are needed and the environment is not highly corrosive. It is not suitable for marine or chloride-exposed environments.",
      },
      {
        q: "What surface finishes are available?",
        a: "We supply material in BA (Bright Annealed — a highly reflective mirror-like finish), 2B (a smooth, matte-silver cold-rolled finish — the most common industrial finish), No.1 (hot-rolled, annealed and pickled — a rough matte finish for industrial structural use), and S.B (Scotch Brite — a brushed, satin appearance used widely in architectural and food-grade applications). The right finish depends on your application's hygiene, aesthetic, and fabrication requirements.",
      },
      {
        q: "What does BA finish mean?",
        a: "BA stands for Bright Annealed. It is produced by cold rolling and annealing in a controlled atmosphere to produce a highly reflective, mirror-like surface. BA finish offers superior corrosion resistance compared to other finishes due to the dense, uniform chromium oxide layer. It is widely used in food processing equipment, pharmaceutical manufacturing, kitchen equipment, and decorative architectural applications.",
      },
      {
        q: "What thickness tolerances do you supply?",
        a: "Thickness tolerances conform to EN 10051 for flat rolled products. Standard tolerances depend on the grade, nominal thickness, and width of the material. For precision applications we can specify tighter tolerances on request. We recommend always verifying dimensional tolerances in the material test report (MTR) supplied with your order.",
      },
      {
        q: "Do your products come with material test reports (MTRs)?",
        a: "Yes. All SWEDINOX AB products can be supplied with mill-certified material test reports (also known as mill certificates or EN 10204 3.1 certificates). These documents confirm the chemical composition, mechanical properties, and heat number of the material, ensuring full traceability and compliance with EU and international standards.",
      },
    ],
  },
  {
    id: "ordering",
    label: "Ordering & Delivery",
    icon: "🚚",
    description:
      "How to place orders, minimum quantities, lead times, and shipping.",
    items: [
      {
        q: "How do I request a quote from SWEDINOX AB?",
        a: "You can request a quote through our Contact page, by email at sales@swedinox.se, sales@swedinox.eu, or logistic@swedinox.se, by phone at +46 732 488 880, or via WhatsApp. Please include your required grade, finish, dimensions (thickness × width × length or coil weight), quantity, and delivery address for the fastest response.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "Minimum order quantities vary by product type. For standard coils and sheets the minimum is typically one full coil or pallet. Baby Coils start from 500 KG. For strips and circles, minimums depend on the requested dimensions. We encourage you to contact us with your specific requirements — we are flexible and experienced in serving operations of all sizes.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes. SWEDINOX AB ships stainless steel products to over 80 countries worldwide. We have extensive experience in international logistics and can arrange delivery by road, sea, or combined transport depending on the destination and volume. Our team handles all export documentation to ensure smooth customs clearance.",
      },
      {
        q: "What are your lead times?",
        a: "Lead times depend on product availability, destination, and quantity. Stock items can typically be dispatched within a few working days. For larger orders or special specifications, lead times are agreed at the time of order. We will always communicate a firm delivery date at the time of order confirmation.",
      },
      {
        q: "Can I visit your facility or inspect material before ordering?",
        a: "Yes, we welcome visits to our facility at Pilevallen 77, Arlöv, Sweden. Third-party inspection can also be arranged on request. Please contact our team to schedule a visit or inspection during our business hours, Monday to Friday, 09:00–17:00.",
      },
    ],
  },
  {
    id: "company",
    label: "About SWEDINOX AB",
    icon: "🏢",
    description: "About our company, certifications, experience, and values.",
    items: [
      {
        q: "Who is SWEDINOX AB?",
        a: "SWEDINOX AB is a family-owned Swedish company specialising in the trading and distribution of semi-manufactured stainless steel products. We have over 25 years of industry experience, supply customers in more than 80 countries, and carry an inventory of over 500 product variants. We are headquartered in Arlöv, Sweden, and are known for combining the reliability and personal service of a family business with the scale and reach of a global trading operation.",
      },
      {
        q: "What certifications does SWEDINOX AB hold?",
        a: "SWEDINOX AB operates to ISO 9001:2015 quality management standards. Our products are supplied in compliance with EN 10088, ASTM, TÜV, and REACH requirements as applicable. All material is traceable through mill-certified test reports.",
      },
      {
        q: "What makes SWEDINOX different from other stainless steel distributors?",
        a: "We combine three core strengths: strategic sourcing from premier global mills, a deep physical inventory that enables fast delivery without long lead times, and logistics expertise built over 25 years of global shipping. As a family-owned business, we offer a level of personal accountability and flexibility that larger corporations often cannot match. Our 100 on-time delivery record reflects that commitment.",
      },
      {
        q: "Where is SWEDINOX AB located?",
        a: "Our head office and warehouse are located at Pilevallen 77, Arlöv, 232 35 Sweden — situated near Malmö in southern Sweden, giving us excellent access to major shipping routes across Europe and globally.",
      },
      {
        q: "Does SWEDINOX AB attend international trade shows?",
        a: "Yes. We regularly exhibit and participate at major international stainless steel and metals industry events, including Metal & Steel Egypt in Cairo and Stainless Steel World Conference & Expo in Maastricht, The Netherlands. These events allow us to meet customers, discover new products, and stay current with global market trends. Check our News & Events page for upcoming appearances.",
      },
    ],
  },
  {
    id: "fabrication",
    label: "Fabrication & Use",
    icon: "⚙️",
    description: "Practical questions about working with stainless steel.",
    items: [
      {
        q: "Can stainless steel be welded?",
        a: "Yes. Most stainless steel grades are weldable. Grade 304 and 316L are commonly welded using TIG (GTAW) or MIG (GMAW) methods. After welding it is important to perform post-weld annealing and pickling or passivation to restore the chromium oxide layer and full corrosion resistance — particularly in humid or chloride-rich environments. Grade 430 (ferritic) requires careful heat management to avoid grain growth.",
      },
      {
        q: "How should stainless steel be stored to prevent contamination?",
        a: "Stainless steel should be stored off the ground on wooden pallets or non-metallic supports, away from carbon steel components which can cause iron contamination and surface rust. Material should be kept dry and covered to prevent moisture accumulation. BA and 2B finished material should not be stored in contact with other metals. Protective film should remain on polished or satin-finished surfaces until after fabrication and installation.",
      },
      {
        q: "What causes surface rust on stainless steel and how is it prevented?",
        a: "Stainless steel does not truly rust in the conventional sense, but iron contamination from tools, storage next to carbon steel, or damage to the chromium oxide passive layer can cause surface staining that resembles rust. To prevent this: use dedicated stainless steel tools, avoid contact with carbon steel, store correctly, and clean regularly with appropriate stainless-safe cleaners. In corrosive environments, ensure the correct grade is specified — 316L for chloride or marine environments.",
      },
      {
        q: "What industries typically use stainless steel sheets and coils?",
        a: "Key industries include food and beverage manufacturing (conveyor systems, tanks, countertops), pharmaceutical and medical (surgical instruments, sterile surfaces), construction and architecture (facades, handrails, cladding), marine and offshore engineering (saltwater-resistant components), automotive and transport, chemical and petrochemical processing, and household appliances. SWEDINOX AB supplies customers across all these sectors.",
      },
      {
        q: "How do I choose the right thickness for my application?",
        a: "Thickness selection depends on structural load requirements, fabrication method, and application environment. For cladding and ventilation, thin gauges of 0.5–1.0 mm are typically used. General sheet metal fabrication commonly uses 1.0–3.0 mm. Heavy structural applications, pressure vessels, and machinery typically require 3.0 mm and above. Always verify that dimensional tolerances comply with EN 10051 for precision fabrication and consult your engineering specifications for load-bearing requirements.",
      },
    ],
  },
];

export const allFaqItems = faqData.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.label,
    categoryId: cat.id,
  })),
);
