import { ArrowRight, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./navigation/nav-links";

const Navbar = () => {
  return (
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
              width={149}
              height={60}
              className="h-15 w-[9.3125rem] object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex" role="menubar">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                prefetch={false}
                role="menuitem"
                className="group relative pb-1 text-sm font-medium tracking-wide text-[#334155]"
              >
                <span className="transition-colors duration-200 group-hover:text-[#0F172A]">
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-[#F5A623] to-[#00AADD] transition-[width] duration-300 group-hover:w-full"
                />
              </Link>
            ))}
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

          <div className="relative md:hidden">
            <input
              id="mobile-menu-toggle"
              type="checkbox"
              className="peer sr-only"
            />

            <label
              htmlFor="mobile-menu-toggle"
              className="relative flex h-8 w-8 cursor-pointer items-center justify-center"
              aria-label="Open menu"
            >
              <span className="sr-only">Open menu</span>
              <span
                aria-hidden="true"
                className="absolute h-0.5 w-5 -translate-y-1.5 rounded-full bg-[#0F172A]"
              />
              <span
                aria-hidden="true"
                className="absolute h-0.5 w-5 rounded-full bg-[#0F172A]"
              />
              <span
                aria-hidden="true"
                className="absolute h-0.5 w-5 translate-y-1.5 rounded-full bg-[#0F172A]"
              />
            </label>

            <label
              htmlFor="mobile-menu-toggle"
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 z-40 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-200 peer-checked:pointer-events-auto peer-checked:opacity-100"
            />

            <aside
              id="mobile-menu"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 z-50 flex w-4/5 max-w-xs translate-x-full flex-col border-l border-white/5 bg-[#0D1526] shadow-[0_0_60px_rgba(0,0,0,0.8)] transition-transform duration-300 peer-checked:translate-x-0"
            >
              <div className="h-[2.5px] w-full bg-linear-to-r from-[#F5A623] via-[#00AADD] to-[#005CA3]" />

              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.webp"
                    alt="SWEDINOX AB"
                    width={109}
                    height={44}
                    className="h-11 w-[6.8125rem] object-contain brightness-0 invert"
                  />
                </Link>
                <label
                  htmlFor="mobile-menu-toggle"
                  aria-label="Close menu"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5"
                >
                  <X className="h-4 w-4 text-slate-400" />
                </label>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center justify-between rounded-lg border border-transparent px-4 py-3.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                  >
                    <span>{label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-slate-600" />
                  </a>
                ))}
              </nav>

              <div className="border-t border-white/5 px-4 py-6">
                <a
                  href="/contact-us-1"
                  className="cta-glow group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#005CA3] px-5 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#0077BB]"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <ArrowRight className="relative z-10 h-4 w-4" />
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
