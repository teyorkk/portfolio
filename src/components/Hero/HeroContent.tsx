import {
  FaArrowDown,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCoffee,
} from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import AnimatedText from "./AnimatedText";

const phrases = [
  "I build modern, responsive web apps.",
  "I love crafting accessible UI.",
  "I integrate clean APIs.",
  "I create seamless user experiences.",
];

const HeroContent = () => {
  return (
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-white mb-4 leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          Moises
        </span>
      </h1>

      <AnimatedText phrases={phrases} />

      {/* Status Info */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <HiStatusOnline className="text-green-500 text-xl" />
          <span className="text-sm md:text-base font-medium text-green-700 dark:text-green-400">
            Available for work
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <FaMapMarkerAlt className="text-gray-600 dark:text-gray-400 text-lg" />
          <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
            Philippines
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <FaBriefcase className="text-gray-600 dark:text-gray-400 text-lg" />
          <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
            BSIT Student
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
        >
          View Projects <FaArrowDown className="text-sm" />
        </a>
        <a
          href="https://buymeacoffee.com/teyorkk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaCoffee className="text-lg" />
          Buy me a coffee
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
