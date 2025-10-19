import { useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

export const useThemeToggle = (toggleTheme: () => void) => {
  const [isToggling, setIsToggling] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    if (isToggling || !iconRef.current) return;

    setIsToggling(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => setIsToggling(false), 100);
      },
    });

    // Modern sleek animation: fade out + rotate + scale
    tl.to(iconRef.current, {
      opacity: 0,
      scale: 0.5,
      rotation: 180,
      duration: 0.25,
      ease: "power2.in",
    })
      .call(() => {
        toggleTheme();
      })
      .to(iconRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
  }, [isToggling, toggleTheme]);

  return { iconRef, isToggling, handleToggle };
};
