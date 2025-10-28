import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

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
  const inView = useInView(ref, { amount: threshold, once: true });

  return (
    <motion.div
      ref={ref}
      data-reveal
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20, visibility: "hidden" },
        visible: { opacity: 1, y: 0, visibility: "visible" },
      }}
      transition={{
        duration: 0.5,
        delay: delay / 1000,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
