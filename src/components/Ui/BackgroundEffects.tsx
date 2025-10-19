import { useEffect, useRef, useState } from "react";

const BackgroundEffects = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 }); // percentages
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setPos({ x, y }));
    };
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const spotlightStyle: React.CSSProperties = {
    background: `radial-gradient(700px at ${pos.x}% ${pos.y}%, rgba(79, 70, 229, 0.16), transparent 60%), radial-gradient(1100px at ${pos.x}% ${pos.y}%, rgba(16, 185, 129, 0.10), transparent 65%)`,
  };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Blurred gradient blobs (subtle movement) */}
      {/* Base soft linear gradient wash - stronger in light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 via-emerald-200/20 to-pink-200/30 dark:from-blue-900/20 dark:via-purple-900/15 dark:to-indigo-900/20" />

      <div className="absolute -top-24 -left-24 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br from-blue-300/40 to-purple-300/35 dark:from-blue-600/20 dark:to-purple-600/18 blur-3xl animate-blob will-change-transform" />
      <div className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-pink-300/35 to-orange-300/35 dark:from-pink-600/18 dark:to-orange-600/18 blur-3xl animate-blob animation-delay-2000 will-change-transform" />
      <div className="absolute -bottom-24 left-1/4 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-teal-300/35 to-emerald-300/35 dark:from-teal-600/18 dark:to-emerald-600/18 blur-3xl animate-blob animation-delay-4000 will-change-transform" />

      {/* Mouse-following spotlight - stronger in light mode */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-100 dark:opacity-70"
        style={spotlightStyle}
      />

      {/* Subtle geometric pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.08] text-gray-700 dark:text-gray-300">
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default BackgroundEffects;
