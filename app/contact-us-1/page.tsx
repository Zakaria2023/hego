import ContactPage from "@/components/pages/contact-us-1/contact-page";
import { buildPageMetadata } from "@/lib/seo";
import { seoImages } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us - Get a Stainless Steel Quote from Our Team",
  description:
    "Contact SWEDINOX AB for stainless steel quotes, technical questions, delivery support, and sourcing inquiries by form, email, phone, or WhatsApp.",
  path: "/contact-us-1",
  image: seoImages.contact,
  category: "Contact Page",
  keywords: [
    "contact stainless steel supplier",
    "request stainless steel quote",
    "stainless steel supplier email",
    "Sweden stainless steel contact",
    "WhatsApp stainless steel supplier",
  ],
});

const ContactRoute = () => <ContactPage />;

export default ContactRoute;
