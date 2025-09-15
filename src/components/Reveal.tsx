import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms for the entrance transition */
  delay?: number;
  /** Trigger when at least this fraction is visible */
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

  const base =
    "transform transition-all duration-500 ease-out will-change-transform";
  const hidden = "opacity-0 translate-y-4";
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
