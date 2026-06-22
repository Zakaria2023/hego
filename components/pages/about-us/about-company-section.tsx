"use client";

import Reveal from "@/components/shared/reveal";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutCompanySection = () => (
  <section
    aria-labelledby="who-we-are"
    className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
  >
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <div>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-[#005CA3]">
            Who We Are
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="who-we-are"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl"
          >
            Your Reliable Gateway to International Steel Trade
          </h2>
          <div
            aria-hidden="true"
            className="mt-4 h-1 w-12 rounded-full bg-linear-to-r from-[#005CA3] to-[#00AADD]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-[#334155]">
            SWEDINOX AB is the destination for semi-manufactured stainless steel
            products. As a family-owned company, we prioritize long-term
            relationships with our customers and suppliers, and that has been a
            primary goal since our founding.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-base leading-relaxed text-[#334155]">
            We cater to end users and smaller wholesalers in the stainless steel
            industry, ensuring efficient logistics as a reliable supplier. Our
            customers remain the main point of focus and SWEDINOX is built for
            long-lasting cooperation in semi-manufactured stainless steel.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-sm bg-[#005CA3] px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-[#0077BB]"
              aria-label="View our stainless steel products"
            >
              <span>View Products</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact-us-1"
              className="inline-flex items-center gap-2 rounded-sm border border-[#CBD5E1] px-6 py-3 text-sm font-bold tracking-wide text-[#334155] transition-all duration-200 hover:border-[#005CA3] hover:text-[#005CA3]"
              aria-label="Contact SWEDINOX AB"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="group relative">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_30px_60px_rgba(15,23,42,0.15)]">
            <div className="relative h-105 w-full overflow-hidden">
              <Image
                src="/about-us.webp"
                alt="SWEDINOX AB facility"
                fill
                quality={60}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#005CA3]/10">
              <BadgeCheck className="h-5 w-5 text-[#005CA3]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F172A]">ISO 9001:2015</p>
              <p className="text-xs text-slate-500">Quality Certified</p>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutCompanySection;
