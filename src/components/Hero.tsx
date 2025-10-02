import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Reveal from "./Ui/Reveal";
import { FaArrowDown } from "react-icons/fa";

const phrases = [
  "I build modern, responsive web apps.",
  "I love crafting accessible UI.",
  "I integrate clean APIs.",
];

const Hero = () => {
  const [imgSrc, setImgSrc] = useState("/2.jpg");
  const cardRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const [lensVisible, setLensVisible] = useState(false);
  const phraseRef = useRef<HTMLParagraphElement | null>(null);
  const phraseIndex = useRef(0);

  useEffect(() => {
    const el = phraseRef.current;
    if (!el) return;
    const showPhrase = (idx: number) => {
      el.textContent = phrases[idx];
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 12, filter: "blur(4px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(el, {
              autoAlpha: 0,
              y: -8,
              filter: "blur(6px)",
              delay: 1.8,
              duration: 0.5,
              ease: "power2.in",
              onComplete: () => {
                phraseIndex.current =
                  (phraseIndex.current + 1) % phrases.length;
                showPhrase(phraseIndex.current);
              },
            });
          },
        }
      );
    };
    showPhrase(phraseIndex.current);
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const x = (relX / rect.width) * 100;
      const y = (relY / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);

      const lens = lensRef.current;
      if (lens) {
        const lensRadius = Math.round(Math.min(rect.width, rect.height) * 0.18);
        const lensDiameter = lensRadius * 2;
        const zoom = 1.5;
        lens.style.width = `${lensDiameter}px`;
        lens.style.height = `${lensDiameter}px`;
        lens.style.left = `${relX - lensRadius}px`;
        lens.style.top = `${relY - lensRadius}px`;
        lens.style.backgroundImage = `url(${imgSrc})`;
        lens.style.backgroundRepeat = "no-repeat";
        lens.style.backgroundSize = `${rect.width * zoom}px ${
          rect.height * zoom
        }px`;
        lens.style.backgroundPosition = `${-relX * zoom + lensRadius}px ${
          -relY * zoom + lensRadius
        }px`;
      }
    };
    const onEnter = () => setLensVisible(true);
    const onLeave = () => setLensVisible(false);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [imgSrc]);

  return (
    <section
      className="flex flex-col items-center justify-center min-h-[100vh]  from-white to-gray-100 py-16"
      id="hero"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl px-4">
        <Reveal delay={80}>
          <div
            ref={cardRef}
            className="group w-40 h-40 md:w-56 md:h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border-4 border-gray-200 mb-6 md:mb-0 relative will-change-transform transition-transform duration-300 hover:-rotate-1 hover:scale-[1.02] cursor-pointer"
            onClick={() =>
              setImgSrc((prev) => (prev === "/2.jpg" ? "/3.jpg" : "/2.jpg"))
            }
          >
            {/* Glow ring */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(99,102,241,0.18), transparent 40%)",
              }}
            />
            {/* Image */}
            <span className="text-gray-400 text-lg w-full h-full">
              <img
                src={imgSrc}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </span>
            {/* Magnifier lens (true zoom) */}
            <div
              ref={lensRef}
              aria-hidden
              className="pointer-events-none absolute rounded-full border-2 border-white/70 shadow-[0_0_30px_rgba(0,0,0,0.25)]"
              style={{
                opacity: lensVisible ? 1 : 0,
                transition: "opacity 150ms ease",
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Hi, I'm <span className="text-gray-700">Moises</span>
            </h1>

            <p
              ref={phraseRef}
              className="text-lg md:text-xl text-gray-700 min-h-[56px] font-medium"
            />

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition"
            >
              View Projects <FaArrowDown />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
