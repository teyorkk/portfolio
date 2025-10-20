import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaCookieBite, FaMoon, FaSun } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useThemeToggle } from "../hooks/useThemeToggle";

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
  const [scrolled, setScrolled] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { iconRef, isToggling, handleToggle } = useThemeToggle(toggleTheme);
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

  const bgColor =
    theme === "dark"
      ? `rgba(31,41,55,${backdropOpacity})` // gray-800
      : `rgba(255,255,255,${backdropOpacity})`;
  const borderColor =
    theme === "dark"
      ? `rgba(255,255,255,${borderOpacity})`
      : `rgba(0,0,0,${borderOpacity})`;

  return (
    <header className="pointer-events-none fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      <nav
        className="pointer-events-auto flex items-center justify-between gap-6 px-5 py-2 rounded-2xl shadow-lg backdrop-saturate-150 md:gap-10 transition-all duration-300 border"
        style={{
          maxWidth: 960,
          width: "100%",
          background: bgColor,
          backdropFilter: `blur(${blur}px) saturate(${110 + scrolled * 40}%)`,
          WebkitBackdropFilter: `blur(${blur}px) saturate(${
            110 + scrolled * 40
          }%)`,
          borderColor: borderColor,
        }}
      >
        <div className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <a href="#hero" className="flex items-center gap-2">
            <FaCookieBite className="w-7 h-7 text-gray-800 dark:text-gray-100" />
          </a>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200 font-medium">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            const base =
              "relative inline-block px-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-200";
            const cls = `${base} ${
              isActive
                ? "text-black dark:text-white after:w-full"
                : "text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white after:w-0 hover:after:w-full"
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
        {/* Theme Toggle Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggle}
            disabled={isToggling}
            className={`text-xl text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 rounded-lg p-2 ${
              isToggling
                ? "cursor-not-allowed"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            <div ref={iconRef} className="flex items-center justify-center">
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </div>
          </button>
          {/* Mobile trigger */}
          <button
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200 focus:outline-none z-50"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay - Rendered via Portal */}
      {menuOpen &&
        createPortal(
          <div className="md:hidden fixed inset-0 z-[999] flex items-start justify-center pt-20 px-4 animate-fadeIn">
            {/* Backdrop with Blur */}
            <div
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Center Card */}
            <div className="relative w-full max-w-sm animate-scaleIn">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white dark:bg-gray-800">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-400" />
                <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-semibold">
                    <FaCookieBite className="w-6 h-6" /> Menu
                  </div>
                  <button
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                    className="text-xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
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
                                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
                                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
                            }`}
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="px-6 pb-5 pt-2 text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span>© Moises Theo Atienza</span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};
