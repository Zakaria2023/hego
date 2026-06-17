"use client";

import { ArrowRight, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact-us-1" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl"
      >
        <div className="h-[2.5px] w-full bg-linear-to-r from-[#F5A623] via-[#00AADD] to-[#005CA3]" />

        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              aria-label="SWEDINOX AB - Home"
              className="group flex items-center"
            >
              <Image
                src="/logo.webp"
                alt="SWEDINOX AB - Keeping your business stainless"
                width={240}
                height={60}
                className="h-14 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>

            <div className="hidden items-center gap-6 md:flex" role="menubar">
              {navLinks.map(({ label, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    prefetch={false}
                    role="menuitem"
                    className="group relative pb-1 text-sm font-medium tracking-wide"
                  >
                    <span
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-[#005CA3]"
                          : "text-[#334155] group-hover:text-[#0F172A]"
                      }`}
                    >
                      {label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-linear-to-r from-[#F5A623] to-[#00AADD] transition-[width] duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center md:flex">
              <Link
                href="/contact-us-1"
                prefetch={false}
                aria-label="Get a quote from SWEDINOX AB"
                className="cta-glow group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-[#005CA3] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#0077BB]"
              >
                <span className="relative z-10">Get Quote</span>
                <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((value) => !value)}
              className="relative flex h-8 w-8 items-center justify-center md:hidden"
            >
              <span className="sr-only">
                {mobileOpen ? "Close menu" : "Open menu"}
              </span>
              <span
                aria-hidden="true"
                className={`absolute h-[2px] w-5 rounded-full bg-[#0F172A] transition-all duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-[6px]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-[2px] w-5 rounded-full bg-[#0F172A] transition-all duration-200 ${
                  mobileOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-[2px] w-5 rounded-full bg-[#0F172A] transition-all duration-200 ${
                  mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen ? (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />

          <aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 bottom-0 z-50 flex w-4/5 max-w-xs flex-col border-l border-white/5 bg-[#0D1526] shadow-[0_0_60px_rgba(0,0,0,0.8)] md:hidden"
          >
            <div className="h-[2.5px] w-full bg-linear-to-r from-[#F5A623] via-[#00AADD] to-[#005CA3]" />

            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/logo.webp"
                  alt="SWEDINOX AB"
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5"
              >
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
              {navLinks.map(({ label, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    prefetch={false}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "border-[#F5A623]/40 bg-[#005CA3]/20 text-white"
                        : "border-transparent text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 ${
                        isActive ? "text-[#F5A623]" : "text-slate-600"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/5 px-4 py-6">
              <Link
                href="/contact-us-1"
                prefetch={false}
                onClick={() => setMobileOpen(false)}
                className="cta-glow group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#005CA3] px-5 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#0077BB]"
              >
                <span className="relative z-10">Get a Quote</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
};

export default Navbar;
