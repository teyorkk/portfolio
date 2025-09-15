import { useState } from "react";
import { FaCookieBite } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 relative">
        <div className="text-2xl font-bold text-black">
          <a href="#hero">
            <FaCookieBite className="hover:text-gray-700 w-10 h-10" />
          </a>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative inline-block px-1 text-gray-800 hover:text-black transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (only when menu is closed) */}
        {!menuOpen && (
          <button
            className="md:hidden text-2xl text-gray-800 focus:outline-none z-50"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        )}
        {/* Mobile Nav */}
        <ul
          className={`fixed top-0 right-0 h-full w-1/3 max-w-xs bg-white shadow-lg flex flex-col gap-8 pt-16 px-8 text-lg font-medium text-gray-800 transform transition-transform duration-300 md:hidden z-50
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close button inside menu */}
          <li className="self-end mb-4">
            <button
              className="text-2xl text-gray-800 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative block py-2 px-1 text-gray-800 hover:text-black transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg flex flex-col gap-8 pt-16 px-8 text-lg font-medium text-gray-800 transform transition-transform duration-300 md:hidden z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "0", position: "fixed" }}
      >
        {/* Close button absolutely positioned at top right */}
        <li className="list-none">
          <button
            className="absolute top-4 right-4 text-2xl text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ zIndex: 60 }}
          >
            <FaTimes />
          </button>
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative block py-2 px-1 text-gray-800 hover:text-black transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
