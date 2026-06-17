import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/reveal";
import type { Product } from "@/app/products/data";

type ProductInquiryBannerProps = {
  product: Product;
};

const ProductInquiryBanner = ({ product }: ProductInquiryBannerProps) => (
  <Reveal>
    <div className="relative mx-4 mb-20 overflow-hidden rounded-3xl bg-gradient-to-r from-[#005CA3] to-[#0077BB] p-10 text-center sm:mx-6 lg:mx-8 lg:p-14">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-80 w-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-60 w-60 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
      />
      <p className="relative mb-3 text-xs font-bold uppercase tracking-widest text-blue-100">
        Ready to order?
      </p>
      <h2 className="relative mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Get a Quote for {product.name}
      </h2>
      <p className="relative mx-auto mb-8 max-w-lg leading-relaxed text-blue-100">
        Tell us your grade, finish, dimensions and quantity. Our team responds
        within one business day.
      </p>
      <Link
        href="/contact-us-1"
        className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold tracking-wide text-[#005CA3] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      >
        Contact Our Sales Team
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </Reveal>
);

export default ProductInquiryBanner;
