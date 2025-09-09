import { FaCookieBite } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold text-black">
          <FaCookieBite className="w-10 h-10" />
        </div>
        <ul className="flex gap-6 text-gray-800 font-medium">
          <li>
            <a href="#hero" className="hover:text-black transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-black transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
