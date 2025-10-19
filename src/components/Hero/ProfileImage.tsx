import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ProfileImage = () => {
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const [lensVisible, setLensVisible] = useState(false);

  // Theme-aware image source
  const imgSrc = theme === "dark" ? "/3.jpg" : "/2.jpg";

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
    <div
      ref={cardRef}
      className="group w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden relative will-change-transform transition-all duration-500 hover:-rotate-1 hover:scale-[1.02] cursor-pointer"
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
      <img
        src={imgSrc}
        alt="Profile"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
        fetchPriority="high"
        decoding="async"
      />

      {/* Magnifier lens */}
      <div
        ref={lensRef}
        aria-hidden
        className="pointer-events-none absolute rounded-full border-2 border-white/70 dark:border-gray-300/70 shadow-[0_0_30px_rgba(0,0,0,0.25)] dark:shadow-[0_0_30px_rgba(0,0,0,0.6)]"
        style={{
          opacity: lensVisible ? 1 : 0,
          transition: "opacity 150ms ease",
        }}
      />
    </div>
  );
};

export default ProfileImage;
