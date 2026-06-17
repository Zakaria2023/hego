import Link from "next/link";

const quickLinks = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about-us" },
  { label: "Events", href: "/events" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us-1" },
  { label: "Get a Quote", href: "/contact-us-1" },
];

const utilityLinks = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us-1" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="relative overflow-hidden bg-[#1F2C3E] text-[#FFF7ED]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(0,170,221,0.16) 0%, transparent 34%), radial-gradient(circle at top right, rgba(245,166,35,0.12) 0%, transparent 28%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.35fr_0.75fr_1fr] md:gap-10">
          <div className="max-w-md">
            <h2 className="text-[1.75rem] sm:text-[2rem] font-extrabold tracking-[0.12em] uppercase text-white">
              SWEDINOX AB
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D7E1EE] leading-relaxed">
              Premium stainless steel supply for industrial buyers across Europe
              and international export markets.
            </p>

            <address className="mt-8 not-italic space-y-4 text-base leading-relaxed text-white">
              <p>
                Pilevallen 77
                <br />
                232 35 Arlov, Sweden
              </p>
              <div>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+46732488880"
                    className="text-[#F5A623] hover:text-[#FFB547] transition-colors duration-150"
                  >
                    +46 (0)732 488 880
                  </a>
                  <a
                    href="tel:+46790082383"
                    className="text-[#F5A623] hover:text-[#FFB547] transition-colors duration-150"
                  >
                    +46 79 008 23 83
                  </a>
                  <a
                    href="tel:+46406860186"
                    className="text-[#F5A623] hover:text-[#FFB547] transition-colors duration-150"
                  >
                    +46 406 860 186
                  </a>
                </div>
                <br />
                <a
                  href="mailto:sales@swedinox.se"
                  className="text-[#F5A623] hover:text-[#FFB547] transition-colors duration-150"
                >
                  sales@swedinox.se
                </a>
              </div>
              <p>Mon - Fri: 09:00 - 17:00</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-[0.12em] uppercase text-white">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="mt-8">
              <ul className="space-y-3 text-lg">
                {quickLinks.map(({ label, href }) => (
                  <li key={href + label}>
                    <Link
                      href={href}
                      className="text-[#F5A623] hover:text-[#FFB547] transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-[0.12em] uppercase text-white">
              Sales Contact
            </h3>
            <div className="mt-8 space-y-4 text-base sm:text-lg leading-relaxed text-white">
              <p className="text-[#F5A623] font-medium uppercase tracking-[0.08em]">
                swedinox.se
              </p>
              <p>
                Tel:{" "}
                <a
                  href="tel:+46406860186"
                  className="text-[#F5A623] hover:text-[#FFB547] transition-colors duration-150"
                >
                  +46 732 488 880
                </a>
              </p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:sales@swedinox.eu"
                  className="text-[#F5A623] hover:text-[#FFB547] transition-colors duration-150"
                >
                  sales@swedinox.eu
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/12 pt-6 text-center text-sm sm:text-base text-[#E7EEF7]">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Copyright {year}</span>
            <span className="text-[#8AA0BA]">|</span>
            <span>SWEDINOX AB</span>
            {utilityLinks.map(({ label, href }) => (
              <span key={href + label} className="contents">
                <span className="text-[#8AA0BA]">|</span>
                <Link
                  href={href}
                  className="text-[#F5A623] hover:text-[#FFB547] transition-colors duration-150"
                >
                  {label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="h-px w-full bg-[#C77A1B]" aria-hidden="true" />
    </footer>
  );
};

export default Footer;
