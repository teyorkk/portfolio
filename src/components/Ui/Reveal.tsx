import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

const Reveal = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const lastYRef = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const rafScrollRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Track scroll direction globally for this component
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const last = lastYRef.current;
      const delta = y - last;
      // Ignore tiny jitters to prevent flicker
      if (Math.abs(delta) < 2) return;
      lastYRef.current = y;
      const nextDir: "up" | "down" = delta > 0 ? "down" : "up";
      if (rafScrollRef.current) cancelAnimationFrame(rafScrollRef.current);
      rafScrollRef.current = requestAnimationFrame(() => setScrollDir(nextDir));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafScrollRef.current) cancelAnimationFrame(rafScrollRef.current);
    };
  }, []);

  const base =
    "transform transition-all duration-500 ease-out will-change-transform";
  const hidden =
    scrollDir === "down"
      ? "opacity-0 translate-y-6"
      : "opacity-0 -translate-y-6";
  const shown = "opacity-100 translate-y-0";

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${prefersReducedMotion ? 0 : delay}ms` }}
      className={`${base} ${
        prefersReducedMotion ? "opacity-100" : visible ? shown : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
