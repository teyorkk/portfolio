import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [imgSrc, setImgSrc] = useState("/2.jpg");

  return (
    <section
      className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-b from-white to-gray-100 py-16"
      id="hero"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl px-4">
        <div
          className="group w-40 h-40 md:w-56 md:h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border-4 border-gray-200 mb-6 md:mb-0"
          onMouseEnter={() => setImgSrc("/3.jpg")}
          onMouseLeave={() => setImgSrc("/2.jpg")}
        >
         
          <span className="text-gray-400 text-lg w-full h-full">
            <img
              src={imgSrc}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </span>
        </div>
        {/* Intro Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Hi, I'm <span className="text-gray-700">Moises</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            I'm a passionate web developer specializing in building modern,
            responsive, and engaging web applications.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition"
          >
            View Projects <FaArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
