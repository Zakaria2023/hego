"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact-us-1" },
  { label: "FAQ", href: "/faq" },
];

const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.38,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  open: {
    x: "0%",
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: 24, filter: "blur(4px)" },
  open: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        {/* Top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0369A1]/60 to-transparent" />

        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              aria-label="SWEDINOX AB – Home"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-9 h-9 flex-shrink-0">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <polygon
                    points="18,2 33,10 33,26 18,34 3,26 3,10"
                    fill="url(#hexGrad)"
                    stroke="rgba(56,189,248,0.5)"
                    strokeWidth="1"
                  />
                  <polygon
                    points="18,7 28,13 28,23 18,29 8,23 8,13"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="0.75"
                  />
                  <text
                    x="18"
                    y="22"
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="700"
                    fill="white"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    letterSpacing="0.5"
                  >
                    SX
                  </text>
                  <defs>
                    <linearGradient
                      id="hexGrad"
                      x1="0"
                      y1="0"
                      x2="36"
                      y2="36"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#1E40AF" />
                      <stop offset="100%" stopColor="#0369A1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#0F172A] font-bold text-base tracking-widest uppercase">
                  SWEDINOX
                </span>
                <span className="text-[#0369A1] text-[10px] tracking-[0.3em] uppercase font-medium">
                  AB
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6" role="menubar">
              {navLinks.map(({ label, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    role="menuitem"
                    className="relative pb-1 text-sm font-medium tracking-wide cursor-pointer group"
                  >
                    <span
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-[#0369A1]"
                          : "text-[#334155] group-hover:text-[#0F172A]"
                      }`}
                    >
                      {label}
                    </span>
                    {/* Framer Motion animated underline */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#0369A1] to-[#38BDF8]"
                      initial={false}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact-us-1"
                aria-label="Get a quote from SWEDINOX AB"
                className="cta-glow relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#0369A1] text-white text-sm font-semibold tracking-wide uppercase cursor-pointer overflow-hidden group"
              >
                <span className="relative z-10">Get Quote</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 relative z-10"
                  aria-hidden="true"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </motion.svg>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center cursor-pointer"
              whileTap={{ scale: 0.88 }}
            >
              <span className="sr-only">
                {mobileOpen ? "Close menu" : "Open menu"}
              </span>
              <motion.span
                aria-hidden="true"
                className="absolute w-5 h-[2px] bg-[#0F172A] rounded-full"
                animate={
                  mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }
                }
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute w-5 h-[2px] bg-[#0F172A] rounded-full"
                animate={
                  mobileOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute w-5 h-[2px] bg-[#0F172A] rounded-full"
                animate={
                  mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }
                }
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.aside
              key="mobile-menu"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-xs bg-[#0D1526] border-l border-white/5 flex flex-col md:hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <Link
                  href="/"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-white font-bold text-sm tracking-widest uppercase">
                    SWEDINOX
                  </span>
                  <span className="text-[#38BDF8] text-[10px] tracking-[0.3em] uppercase font-medium">
                    AB
                  </span>
                </Link>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer"
                  whileTap={{ scale: 0.88 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-slate-400"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col gap-1 px-4 py-6 overflow-y-auto">
                {navLinks.map(({ label, href }) => {
                  const isActive =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <motion.div key={href} variants={mobileLinkVariants}>
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer group ${
                          isActive
                            ? "bg-[#0369A1]/15 text-white border border-[#0369A1]/30"
                            : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <span>{label}</span>
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-4 h-4 flex-shrink-0 ${
                            isActive
                              ? "text-[#38BDF8]"
                              : "text-slate-600 group-hover:text-slate-400"
                          }`}
                          aria-hidden="true"
                          whileHover={{ x: 3 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <motion.div
                variants={mobileLinkVariants}
                className="px-4 py-6 border-t border-white/5"
              >
                <Link
                  href="/contact-us-1"
                  onClick={() => setMobileOpen(false)}
                  className="cta-glow flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-lg bg-[#0369A1] hover:bg-[#0284C7] text-white text-sm font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer overflow-hidden group relative"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 relative z-10"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
