export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductSpecItem {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  image?: string;
  name: string;
  seoTitle?: string;
  tagline: string;
  description: string;
  longDescription: string;
  specs: string[];
  grades: string[];
  finishes: string[];
  applications: string[];
  accent: string;
  heroNote?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  // Optional extended sections
  overviewSubtitle?: string;
  overviewTitle?: string;
  overviewDescription?: string;
  features?: ProductFeature[];
  specsGridItems?: ProductSpecItem[];
  specsNote?: string;
  cuttingSubtitle?: string;
  cuttingTitle?: string;
  cuttingDescription?: string;
  cuttingOptions?: ProductFeature[];
  cuttingNote?: string;
  benefits?: ProductFeature[];
}

export const products: Product[] = [
  {
    id: "coils",
    slug: "coils",
    image: "/coils.webp",
    name: "Stainless Steel Coils",
    seoTitle: "Stainless Steel Coils Supplier",
    tagline: "Reliable Stainless Steel Solutions for Industrial Applications",
    description:
      "SWEDINOX supplies stainless steel coils in a wide range of grades, surface finishes, thicknesses, and widths for industrial, manufacturing, and commercial applications.",
    longDescription:
      "SWEDINOX provides stainless steel coils for customers requiring reliable material sourcing, flexible specifications, and coordinated delivery. Through our European and international supplier network, we can support requirements relating to stainless steel grade, thickness, width, surface finish, coil weight, and processing. Coils can be supplied in standard mill dimensions or processed according to customer requirements through slitting, decoiling, grinding, brushing, and protective film application.",
    specs: [
      "Product forms: stainless steel coils, slit coils, baby coils, and customized coil widths.",
      "Standards: EN 10088 and ASTM specifications upon request.",
      "Thickness and width according to stock and customer requirements.",
      "Surface finishes: 1D, 2D, 2B, BA/2R, brushed, and polished.",
      "Edge condition: mill edge or slit edge.",
      "Processing: slitting, decoiling, grinding, and brushing.",
      "Documentation and export packaging available upon request.",
    ],
    grades: ["304", "304L", "316", "316L", "430"],
    finishes: [
      "1D",
      "2D",
      "2B",
      "BA/2R",
      "Brushed",
      "Polished",
      "Protective Film",
    ],
    applications: [
      "Food-processing equipment",
      "Commercial kitchens",
      "Household appliances",
      "Industrial machinery",
      "Metal fabrication",
      "Automotive components",
      "HVAC and ventilation systems",
      "Construction and architecture",
    ],
    accent: "#0369A1",
    heroNote:
      "Product availability depends on the required grade, dimensions, finish, quantity, and delivery destination.",
    secondaryCtaHref: "/contact-us-1",
    secondaryCtaLabel: "Check Availability",
  },
  {
    id: "baby-coils",
    slug: "baby-coils",
    image: "/baby-cols.webp",
    name: "Baby Coils",
    seoTitle: "Baby Coils from 500 KG",
    tagline: "Stainless Steel Coils Starting from Approximately 500 KG",
    description:
      "Baby coils are a flexible solution for fabricators, processors, and manufacturers that require smaller quantities of stainless steel.",
    longDescription:
      "Produced from prime mother coils, baby coils can be slit according to the required width, thickness, grade, and surface finish. They offer the same material quality as standard coils while helping customers reduce minimum purchasing quantities, storage requirements, and excess inventory.",
    specs: [
      "Grades: 304, 304L, 316L, 430, 201, and other grades upon request.",
      "Thickness according to mother coil stock and customer requirements.",
      "Customized widths according to available slitting capabilities.",
      "Coil weight starting from approximately 500 KG.",
      "Surface finishes: 2B, BA/2R, brushed, polished, and other finishes upon request.",
      "Surface protection options may be available.",
    ],
    grades: ["304", "304L", "316L", "430", "201"],
    finishes: ["2B", "BA/2R", "Brushed", "Polished", "Protective Film"],
    applications: [
      "Small and medium-sized fabricators",
      "Metalworking workshops",
      "Kitchen equipment manufacturers",
      "Household appliance manufacturers",
      "HVAC and ventilation producers",
      "Decorative metal applications",
      "Prototype and sample production",
      "Short production runs",
      "Customized industrial projects",
    ],
    accent: "#0369A1",
    heroNote:
      "Available from approximately 500 KG, depending on the material specification and production availability.",
    secondaryCtaHref: "/products",
    secondaryCtaLabel: "View All Products",
  },
  {
    id: "sheets",
    slug: "sheets",
    image: "/sheets.webp",
    name: "Stainless Steel Sheets",
    seoTitle: "Stainless Steel Sheets Supplier",
    tagline: "Cold-Rolled and Hot-Rolled Sheets",
    description:
      "SWEDINOX supplies stainless steel sheets in standard and customized dimensions for industrial manufacturing, fabrication, construction, food-processing equipment, and decorative applications.",
    longDescription:
      "Sheets can be supplied in different grades, thicknesses, dimensions, and surface finishes according to stock availability and customer requirements. Cold-rolled sheets provide a smoother surface, tighter dimensional tolerance, and a more refined appearance. Hot-rolled sheets are suitable for heavier industrial applications where strength, durability, and material thickness are more important than decorative appearance.",
    specs: [
      "Grades: 304, 304L, 316, 316L, 430, Duplex 2205, and other grades upon request.",
      "Thickness according to grade, rolling type, stock, and customer requirements.",
      "Standard and customized sheet sizes may be available.",
      "Surface finishes: 1D, 2B, BA/2R, brushed, polished, and other finishes upon request.",
      "Protective film available for selected finishes and applications.",
      "Standard dimensions or cut-to-order sheets according to project requirements.",
    ],
    grades: ["304", "304L", "316", "316L", "430", "Duplex 2205"],
    finishes: ["1D", "2B", "BA/2R", "Brushed", "Polished", "Protective Film"],
    applications: [
      "Food-processing equipment",
      "Commercial kitchens",
      "Industrial machinery",
      "Tanks and storage systems",
      "Metal fabrication",
      "Construction and architecture",
      "Household appliances",
      "HVAC and ventilation systems",
    ],
    accent: "#0369A1",
    heroNote:
      "Product dimensions and availability depend on grade, thickness, finish, quantity, and delivery destination.",
    secondaryCtaHref: "/products",
    secondaryCtaLabel: "View All Products",
  },
  {
    id: "strips",
    slug: "strips",
    image: "/strips.webp",
    name: "Stainless Steel Strips",
    seoTitle: "Stainless Steel Strips from 10 mm",
    tagline: "Precision-Slit from 10 mm Width",
    description:
      "SWEDINOX supplies precision-slit stainless steel strips for manufacturers and fabricators requiring narrow widths, consistent dimensions, and reliable edge quality.",
    longDescription:
      "Strips can be prepared from suitable stainless steel mother coils according to the required grade, thickness, width, finish, and quantity. They are suitable for precision manufacturing, roll-forming, fabricated components, and continuous production processes.",
    specs: [
      "Width available from approximately 10 mm depending on the selected material and thickness.",
      "Thickness according to mother coil stock and customer requirements.",
      "Grades: 304, 304L, 316L, 430, 301, 17-7PH, and other grades upon request.",
      "Surface finishes: 2B, BA/2R, brushed, polished, and other finishes according to availability.",
      "Edge condition: slit edge, deburred edge, or other edge preparation upon request.",
      "Supply form: coil or other prepared formats according to the order.",
    ],
    grades: ["304", "304L", "316L", "430", "301", "17-7PH"],
    finishes: ["2B", "BA/2R", "Brushed", "Polished"],
    applications: [
      "Roll-forming applications",
      "Precision metal components",
      "Spring production",
      "Automotive components",
      "Clamps and brackets",
      "Electrical components",
      "Household appliances",
      "Kitchen equipment",
      "HVAC components",
      "Decorative metal products",
    ],
    accent: "#0C4A6E",
    heroNote:
      "Widths from approximately 10 mm may be available, depending on thickness, material grade, and slitting capability.",
    secondaryCtaHref: "/products",
    secondaryCtaLabel: "View All Products",
  },
  {
    id: "circles",
    slug: "circles",
    name: "Stainless Steel Circles",
    seoTitle: "Stainless Steel Circles Supplier | Precision-Cut from 150 mm",
    tagline: "Precision-Cut from Approximately 150 mm Diameter",
    description:
      "SWEDINOX supplies stainless steel circles for manufacturers and fabricators requiring accurate diameters, consistent dimensions, and clean-cut edges.",
    longDescription:
      "Circles can be prepared from suitable stainless steel sheets according to the required grade, thickness, diameter, surface finish, and quantity. They are suitable for cookware, industrial components, covers, flanges, discs, and decorative applications.",
    // Section 1 — Precision-Cut Circles
    overviewSubtitle: "Precision-Cut Circles",
    overviewTitle: "Prepared to Match Your Required Diameter",
    overviewDescription:
      "Stainless steel circles are cut from suitable sheets according to customer specifications. They are designed for applications that require consistent diameter, controlled thickness, and reliable edge quality before forming, pressing, welding, or assembly.",
    features: [
      {
        title: "Customized Diameters",
        description:
          "Circles can be prepared according to the required diameter, subject to material dimensions and cutting capabilities.",
      },
      {
        title: "Consistent Thickness",
        description:
          "Material thickness is selected according to the final application and forming requirements.",
      },
      {
        title: "Clean-Cut Edges",
        description:
          "Cutting is coordinated to provide accurate and consistent edges suitable for additional processing.",
      },
      {
        title: "Production-Ready Format",
        description:
          "Circles can be supplied ready for forming, pressing, welding, or further fabrication.",
      },
    ],
    // Section 2 — Available Options
    specsGridItems: [
      {
        title: "Diameter",
        description:
          "Available from approximately 150 mm, depending on material and production capability.",
      },
      {
        title: "Thickness",
        description:
          "Available according to sheet stock, grade, diameter, and customer requirements.",
      },
      {
        title: "Grades",
        description: "304, 304L, 316L, 430, and other grades upon request.",
      },
      {
        title: "Surface Finishes",
        description:
          "2B, BA/2R, brushed, polished, and other finishes according to availability.",
      },
      {
        title: "Cutting Method",
        description:
          "Laser cutting or other suitable cutting methods according to specification and quantity.",
      },
      {
        title: "Packaging",
        description:
          "Circles may be packaged flat, stacked, or on edge according to diameter, thickness, and transportation requirements.",
      },
    ],
    specsNote:
      "Exact diameter tolerance, thickness tolerance, edge quality, flatness, and cutting method depend on the selected material and technical production capabilities.",
    specs: [
      "Diameter available from approximately 150 mm depending on material and production capability.",
      "Thickness according to sheet stock, grade, diameter, and customer requirements.",
      "Grades: 304, 304L, 316L, 430, and other grades upon request.",
      "Surface finishes: 2B, BA/2R, brushed, polished, and other finishes according to availability.",
      "Cutting method: laser cutting or other suitable methods according to specification and quantity.",
      "Packaging: flat, stacked, or on edge according to diameter, thickness, and transport requirements.",
    ],
    // Section 3 — Cutting and Edge Options
    cuttingSubtitle: "Cutting and Edge Options",
    cuttingTitle: "Accurate Cutting for Further Processing",
    cuttingDescription:
      "The appropriate cutting method should be selected according to the required diameter, thickness, tolerance, quantity, and final application.",
    cuttingOptions: [
      {
        title: "Laser Cutting",
        description:
          "Suitable for customized diameters, smaller production quantities, and applications requiring accurate cutting.",
      },
      {
        title: "Industrial Cutting",
        description:
          "Other cutting methods may be used for larger quantities or specific material dimensions where technically appropriate.",
      },
      {
        title: "Edge Preparation",
        description:
          "Additional edge finishing or deburring may be available when required for handling, forming, or final assembly.",
      },
    ],
    cuttingNote:
      "Required diameter tolerance, edge condition, flatness, and surface protection should be specified when requesting a quotation.",
    grades: ["304", "304L", "316L", "430"],
    finishes: ["2B", "BA/2R", "Brushed", "Polished"],
    // Section 4 — Typical Applications
    applications: [
      "Cookware and kitchenware",
      "Pot and pan production",
      "Lids and covers",
      "Flanges and discs",
      "Manhole covers",
      "Pump components",
      "Industrial covers",
      "Pressed components",
      "Decorative metal products",
      "General fabrication",
    ],
    accent: "#0369A1",
    heroNote:
      "Diameters from approximately 150 mm may be available, depending on material thickness, grade, cutting method, and production capability.",
    secondaryCtaHref: "/products",
    secondaryCtaLabel: "View All Products",
    // Section 5 — Why Choose Stainless Steel Circles?
    benefits: [
      {
        title: "Reduced Preparation Time",
        description:
          "Pre-cut circles reduce the need for customers to cut full sheets before production.",
      },
      {
        title: "Lower Material Waste",
        description:
          "Optimized cutting can reduce unused material compared with preparing circles individually from standard sheets.",
      },
      {
        title: "Customized Dimensions",
        description:
          "Diameter and thickness can be prepared according to the final product requirements.",
      },
      {
        title: "Suitable for Forming",
        description:
          "Circles can be supplied for pressing, deep drawing, spinning, welding, and other fabrication processes.",
      },
    ],
  },
  {
    id: "head-and-tail",
    slug: "head-and-tail",
    image: "/head-and-tail.webp",
    name: "Head & Tail Sheets",
    seoTitle: "Head & Tail Stainless Steel Sheets",
    tagline: "Flexible Stainless Steel Sheet Sizes at Competitive Prices",
    description:
      "Head and tail sheets are the beginning and ending sections generated during coil processing and offer a cost-effective option for customers who can work with variable sheet lengths and non-standard dimensions.",
    longDescription:
      "SWEDINOX supplies these materials for general fabrication, small components, trial production, and applications where exact standard sheet sizes are not essential. Availability depends on the original coil, current stock, accepted dimensions, grade, and finish.",
    specs: [
      "Width typically from approximately 700 mm and above.",
      "Variable lengths potentially reaching approximately 3000 mm.",
      "Thickness typically between approximately 0.4 mm and 6 mm.",
      "Grades: 304, 316L, 430, and other grades according to availability.",
      "Surface finishes: 2B, BA/2R, SB, and other finishes according to stock.",
      "Supplied in variable or non-standard sheet dimensions.",
    ],
    grades: ["304", "316L", "430"],
    finishes: ["2B", "BA/2R", "SB"],
    applications: [
      "General metal fabricators",
      "Small-component manufacturers",
      "Workshops and service centers",
      "Prototype production",
      "Trial production runs",
      "Maintenance and repair operations",
      "Cost-sensitive projects",
      "Research and development activities",
    ],
    accent: "#075985",
    heroNote:
      "Dimensions, grade, finish, and availability vary according to the original coil and current stock.",
    secondaryCtaHref: "/products",
    secondaryCtaLabel: "View All Products",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug) ?? null;
