import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface AnimatedTextProps {
  phrases: string[];
}

const AnimatedText = ({ phrases }: AnimatedTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [currentText, setCurrentText] = useState("");
  const currentPhraseIndex = useRef(0);
  const currentCharIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex.current];

      if (!isDeleting.current) {
        // Typing
        if (currentCharIndex.current < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentCharIndex.current + 1));
          currentCharIndex.current++;
          setTimeout(typeWriter, 80); // Typing speed
        } else {
          // Pause after typing completes
          setTimeout(() => {
            isDeleting.current = true;
            typeWriter();
          }, 3000); // 3 second pause
        }
      } else {
        // Deleting
        if (currentCharIndex.current > 0) {
          currentCharIndex.current--;
          setCurrentText(currentPhrase.slice(0, currentCharIndex.current));
          setTimeout(typeWriter, 30); // Faster deletion
        } else {
          // Move to next phrase
          isDeleting.current = false;
          currentPhraseIndex.current =
            (currentPhraseIndex.current + 1) % phrases.length;
          setTimeout(typeWriter, 500); // Short pause before next phrase
        }
      }
    };

    typeWriter();

    return () => {
      currentCharIndex.current = 0;
      isDeleting.current = false;
    };
  }, [phrases]);

  // Cursor blink animation with GSAP
  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 min-h-[60px] md:min-h-[70px] font-medium mt-4">
      <span ref={textRef}>{currentText}</span>
      <span
        ref={cursorRef}
        className="inline-block w-0.5 h-6 md:h-7 lg:h-8 ml-1 bg-gray-700 dark:bg-gray-300 align-middle"
      />
    </div>
  );
};

export default AnimatedText;
