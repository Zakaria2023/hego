import {
  BadgeCheck,
  Building2,
  Car,
  Clock3,
  FileText,
  FlaskConical,
  Globe2,
  HeartPulse,
  Search,
  Settings2,
  Truck,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

export const featureCards = [
  {
    title: "ISO 9001:2015 Certified",
    description:
      "Internationally recognized quality management standards applied across every product and process.",
    stat: "Certified",
    color: "#005CA3",
    icon: BadgeCheck,
  },
  {
    title: "10+ Countries Delivered",
    description:
      "A global logistics network ensuring on-time delivery to clients across the globe.",
    stat: "10+",
    color: "#0077BB",
    icon: Globe2,
  },
  {
    title: "12+ Years of Experience",
    description:
      "Backed by years of market expertise and reliable supplier relationships.",
    stat: "12+",
    color: "#005CA3",
    icon: Clock3,
  },
  {
    title: "Number of Clients",
    description: "We serve over 100 clients across the globe.",
    stat: "+300",
    color: "#0C4A6E",
    icon: Settings2,
  },
];

export const checklistItems = [
  {
    title: "Weekly Stock Availability",
    description: "Regular stock arrivals from European port warehouses.",
  },
  {
    title: "Flexible Coil Packaging Options",
    description:
      "Packaging configurations adapted to your handling and transport requirements.",
  },
  {
    title: "Custom Processing on Request",
    description:
      "Cut-to-length, slitting, and tailored dimensions to match your specifications.",
  },
  {
    title: "Certified Quality & Full Traceability",
    description:
      "Mill test certificates and full material traceability with every order.",
  },
  {
    title: "Competitive Supply Options",
    description:
      "Commercially competitive solutions across prime, ex-prime, and second-choice material.",
  },
  {
    title: "Dedicated B2B Account Support",
    description:
      "A single point of contact for quotations, order follow-up, and commercial coordination.",
  },
];

export const highlightStats = [
  { value: "200+", label: "Product Grades" },
  { value: "300", label: "Number of Clients" },
  { value: "Daily", label: "Stock Updates" },
  { value: "48h", label: "Quote Turnaround" },
];

export const processSteps = [
  {
    number: "01",
    title: "Browse & Inquire",
    description:
      "Explore our catalog and submit an inquiry with your grade, finish, and dimension requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Receive Your Quote",
    description:
      "Our team reviews your specifications and sends a competitive, fully detailed quote within 24 hours.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Global Delivery",
    description:
      "Confirmed orders are dispatched from our European port warehouses directly to your facility worldwide.",
    icon: Truck,
  },
];

export const industries = [
  {
    name: "Automotive",
    description: "Body panels, exhaust systems and precision stampings",
    icon: Car,
  },
  {
    name: "Construction",
    description: "Cladding, facades and architectural elements",
    icon: Building2,
  },
  {
    name: "Food & Beverage",
    description: "Hygienic equipment, tanks and processing lines",
    icon: UtensilsCrossed,
  },
  {
    name: "Chemical Industry",
    description: "Corrosion-resistant vessels, pipes and reactors",
    icon: FlaskConical,
  },
  {
    name: "Medical & Pharma",
    description: "Surgical instruments, implants and sterile equipment",
    icon: HeartPulse,
  },
  {
    name: "Energy & Utilities",
    description: "Heat exchangers, turbine components and pipelines",
    icon: Zap,
  },
];

export const trustBadges = [
  "ISO 9001:2015 CERTIFIED STAINLESS STEEL SUPPLIER",
  "EN 10088 Compliant",
  "ASTM Standards",
  "REACH Compliant",
];
