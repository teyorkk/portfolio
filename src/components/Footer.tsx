import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLetterboxd } from "react-icons/si";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-3">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex justify-center gap-4 mb-2">
            <a
              href="https://github.com/teyorkk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/AtienzaTheo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 text-2xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/teyorkk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://letterboxd.com/teyorkk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 text-2xl transition"
            >
              <SiLetterboxd />
            </a>
          </div>
          <div className="text-gray-600 text-sm mb-1">
            Let's connect! Find me on social media or send me a message.
          </div>
          <div className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Moises Theo. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
