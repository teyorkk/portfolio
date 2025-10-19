import { useEffect, useRef, useState } from "react";
import { FaCookieBite } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#certifications", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");
  const rafRef = useRef<number | null>(null);
  const [scrolled, setScrolled] = useState(0); // 0 -> top, 1 -> past threshold
  // Lock scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    const sections = navLinks
      .map((n) => document.querySelector(n.href) as HTMLElement | null)
      .filter((el): el is HTMLElement => !!el);

    const updateActive = () => {
      if (!sections.length) return;
      const viewportCenter = window.innerHeight / 2;
      let bestId = active;
      let bestDist = Number.POSITIVE_INFINITY;
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        // Distance from section center to viewport center
        const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = `#${sec.id}`;
        }
      }
      setActive(bestId);
    };

    const onScrollOrResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActive);
    };

    const handleScroll = () => {
      const y = window.scrollY;
      const normalized = Math.min(1, y / 400); // threshold
      setScrolled(normalized);
      onScrollOrResize();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    // Initial
    updateActive();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  const blur = (scrolled * 8).toFixed(2);
  const backdropOpacity = 0.6 + scrolled * 0.25;
  const borderOpacity = 0.15 + scrolled * 0.3;
  return (
    <header className="pointer-events-none fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      <nav
        className="pointer-events-auto flex items-center justify-between gap-6 px-5 py-2 rounded-2xl shadow-lg backdrop-saturate-150 md:gap-10 transition-all duration-300 border"
        style={{
          maxWidth: 960,
          width: "100%",
          background: `rgba(255,255,255,${backdropOpacity})`,
          backdropFilter: `blur(${blur}px) saturate(${110 + scrolled * 40}%)`,
          WebkitBackdropFilter: `blur(${blur}px) saturate(${
            110 + scrolled * 40
          }%)`,
          borderColor: `rgba(0,0,0,${borderOpacity})`,
        }}
      >
        <div className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <a href="#hero" className="flex items-center gap-2">
            <FaCookieBite className="w-7 h-7 text-gray-800" />
          </a>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            const base =
              "relative inline-block px-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-black after:transition-all after:duration-200";
            const cls = `${base} ${
              isActive
                ? "text-black after:w-full"
                : "text-gray-800 hover:text-black after:w-0 hover:after:w-full"
            }`;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cls}
                  onClick={() => setActive(link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Mobile trigger */}
        <button
          className="md:hidden ml-auto text-2xl text-gray-800 focus:outline-none z-50"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
        {/* Mobile Navigation Overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0  animate-fadeIn"
              onClick={() => setMenuOpen(false)}
            />
            {/* Center Card */}
            <div className="relative w-full max-w-sm animate-scaleIn">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-400" />
                <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
                  <div className="flex items-center gap-2 text-gray-900 font-semibold">
                    <FaCookieBite className="w-6 h-6" /> Menu
                  </div>
                  <button
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                    className="text-xl text-gray-700 hover:text-black"
                  >
                    <FaTimes />
                  </button>
                </div>
                <nav className="px-6 py-6">
                  <ul className="flex flex-col gap-3">
                    {navLinks.map((link, i) => {
                      const isActive = active === link.href;
                      return (
                        <li
                          key={link.href}
                          style={{ animationDelay: `${i * 55}ms` }}
                          className="list-none opacity-0 animate-slideUp"
                        >
                          <a
                            href={link.href}
                            onClick={() => {
                              setActive(link.href);
                              setMenuOpen(false);
                            }}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors border ${
                              isActive
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="px-6 pb-5 pt-2 text-[11px] text-gray-500 flex items-center gap-2">
                  <span>© {new Date().getFullYear()} Moises</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-gray-400" />
                  <span className="tracking-wide uppercase">v1</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
