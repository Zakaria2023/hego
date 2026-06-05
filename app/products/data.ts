export interface Product {
  id: string;
  slug: string;
  image: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  specs: string[];
  grades: string[];
  finishes: string[];
  applications: string[];
  accent: string;
}

export const products: Product[] = [
  {
    id: "coils",
    slug: "coils",
    image: "/coils.webp",
    name: "Coils",
    tagline: "Prime, Ex-Prime & 2nd Choice",
    description:
      "Prime, ex-prime and 2nd choice quality in stainless steel coils available in a wide range of widths, thicknesses, and surface finishes for industrial applications worldwide.",
    longDescription:
      "Our stainless steel coils are available in prime, ex-prime, and 2nd choice quality, catering to a broad spectrum of industrial needs. With an extensive range of widths, thicknesses, and surface finishes, we match your precise specifications whether you require cold rolled or hot rolled material. Our stock is continuously refreshed with new arrivals every week, and we offer prompt delivery from our European port warehouses.",
    specs: [
      "Cold Rolled & Hot Rolled",
      "Multiple widths & thicknesses",
      "BA, 2B, No.1, SB finish",
      "Prime, ex-prime, 2nd choice",
      "Packaged on eye-to-sky / eye-to-band",
    ],
    grades: ["304", "304L", "316", "316L", "430", "201", "310S"],
    finishes: ["2B", "BA", "No.1", "SB", "Mirror"],
    applications: [
      "Automotive components",
      "Kitchen equipment",
      "Industrial machinery",
      "Construction cladding",
      "Chemical processing",
    ],
    accent: "#0369A1",
  },
  {
    id: "baby-coils",
    slug: "baby-coils",
    image: "/baby-cols.webp",
    name: "Baby Coils",
    tagline: "From 500 KG",
    description:
      "Weight beginning from 500 KG — ideal for smaller processing operations. Available in stainless steel coils and strips with custom slitting options.",
    longDescription:
      "Baby coils are the perfect solution for smaller processing operations and fabricators that require lower minimum weights. Starting from 500 KG, our baby coils are produced from prime mother coils and slit to your exact specification. They share the same quality standards as our full-size coils and are available in all standard grades and finishes. Custom widths and thicknesses are available on request.",
    specs: [
      "Min. weight: 500 KG",
      "Multiple widths available",
      "Custom slitting service",
      "Standard & non-standard sizes",
      "Prime quality available",
    ],
    grades: ["304", "316L", "430", "201"],
    finishes: ["2B", "BA", "No.1"],
    applications: [
      "Small fabrication shops",
      "Precision components",
      "Stamp pressing",
      "Roll forming",
      "Laser cutting",
    ],
    accent: "#0284C7",
  },
  {
    id: "sheets",
    slug: "sheets",
    image: "/sheets.webp",
    name: "Sheets",
    tagline: "Cold & Hot Rolled",
    description:
      "Cold rolled and hot rolled stainless steel sheets in standard and non-standard sizes. Available in a comprehensive range of grades and surface finishes.",
    longDescription:
      "SWEDINOX AB supplies stainless steel sheets in both cold rolled and hot rolled variants, covering a wide range of standard and custom sizes. Our sheets are available in multiple surface finishes and grades, ensuring the right material for any application — from architectural cladding to food processing equipment. We maintain extensive stock levels with weekly updates on newly available materials.",
    specs: [
      "Standard & custom sizes",
      "Cold rolled & hot rolled",
      "BA, 2B, No.1, SB, Mirror finish",
      "Cut-to-length service available",
      "Pallet & crate packaging",
    ],
    grades: ["304", "304L", "316", "316L", "430", "duplex 2205"],
    finishes: ["2B", "BA", "No.1", "SB", "Mirror", "Brushed"],
    applications: [
      "Architectural facades",
      "Food processing equipment",
      "Pharmaceutical machinery",
      "Heat exchangers",
      "Storage tanks",
    ],
    accent: "#0369A1",
  },
  {
    id: "strips",
    slug: "strips",
    image: "/strips.webp",
    name: "Strips",
    tagline: "From 10 mm Width",
    description:
      "Precision-slit stainless steel strips from 10 mm width. Available in coil or cut-to-length format with tight dimensional tolerances.",
    longDescription:
      "Our stainless steel strips are precision-slit to your exact width specification, starting from as narrow as 10 mm. Available in coil or flat bar form, strips are ideal for spring manufacturing, precision components, and roll-forming applications. All strips are produced from prime mother coils on state-of-the-art slitting lines, ensuring consistent edge quality and tight dimensional tolerances throughout the length.",
    specs: [
      "Min. width: 10 mm",
      "Custom lengths available",
      "Precision slitting service",
      "Burr-free edges on request",
      "Coil or cut-to-length format",
    ],
    grades: ["304", "316L", "430", "301", "17-7PH"],
    finishes: ["2B", "BA", "No.1"],
    applications: [
      "Spring manufacturing",
      "Precision stampings",
      "Roll forming",
      "Gaskets & seals",
      "Electronic components",
    ],
    accent: "#0C4A6E",
  },
  {
    id: "circles",
    slug: "circles",
    image: "/circles.webp",
    name: "Circles",
    tagline: "Laser-Cut from 150 mm",
    description:
      "Laser-cut stainless steel circles from 150 mm diameter. Available in grades 304 and 430 with precision laser cutting for clean, burr-free edges.",
    longDescription:
      "SWEDINOX AB supplies laser-cut stainless steel circles starting from 150 mm in diameter, produced with precision laser technology for clean and accurate edges. Our circles are ideal for cookware, pot lids, manhole covers, flanges and decorative applications. Available in both grade 304 and 430, in 2B and BA finishes. Custom diameters and thicknesses are available on request with short lead times.",
    specs: [
      "Min. diameter: 150 mm",
      "Precision laser cutting",
      "Custom diameters on request",
      "Clean burr-free edges",
      "Packaged flat or on edge",
    ],
    grades: ["304", "430"],
    finishes: ["2B", "BA"],
    applications: [
      "Cookware & kitchenware",
      "Manhole covers",
      "Flanges & discs",
      "Decorative elements",
      "Pump components",
    ],
    accent: "#0369A1",
  },
  {
    id: "head-and-tail",
    slug: "head-and-tail",
    image: "/head-and-tail.webp",
    name: "Head & Tail",
    tagline: "700–3000 mm · 0.4–6 mm",
    description:
      "Stainless steel head and tail pieces: width from 700 mm, length up to 3000 mm, thickness 0.4–6 mm. BA, 2B and S.B. finishes available.",
    longDescription:
      "Head and tail material represents the start and end sections of mother coils, available at competitive prices without compromising on quality. Width starts from 700 mm, length reaches up to 3000 mm, and thickness ranges between 0.4 and 6 mm. Finishes include BA, 2B and S.B. This material is ideal for applications where smaller sheet sizes are acceptable, offering excellent value for fabricators and processors.",
    specs: [
      "Width: 700 mm and above",
      "Length: up to 3000 mm",
      "Thickness: 0.4–6 mm",
      "BA / 2B / S.B finish",
      "Competitive pricing",
    ],
    grades: ["304", "316L", "430"],
    finishes: ["2B", "BA", "SB"],
    applications: [
      "General fabrication",
      "Small components",
      "Trial production runs",
      "Cost-sensitive projects",
      "Research & development",
    ],
    accent: "#075985",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug) ?? null;
