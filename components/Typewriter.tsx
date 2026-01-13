import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 40, className = "" }) => {
  const [displayed, setDisplayed] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let isActive = true;
    let i = 0;
    
    setDisplayed("");
    setShowCaret(true);
    setIsFinished(false);

    const typeNextChar = () => {
      if (!isActive) return;

      if (i < text.length) {
        setDisplayed(text.substring(0, i + 1));
        i++;
        setTimeout(typeNextChar, speed);
      } else {
        setIsFinished(true); 
        // On attend un peu plus avant de cacher le curseur pour l'effet visuel
        setTimeout(() => {
          if (isActive) setShowCaret(false);
        }, 2000);
      }
    };

    const startTimeout = setTimeout(typeNextChar, 100);

    return () => {
      isActive = false;
      clearTimeout(startTimeout);
    };
  }, [text, speed]);

  return (
    <span 
      className={`${className} inline-block transition-all duration-1000 ${isFinished ? "animate-zoom-suave" : ""}`} 
      /* Le pre-wrap est crucial pour le responsive mobile */
      style={{ whiteSpace: "pre-wrap" }} 
    >
      {displayed}
      {/* On utilise ta classe .typewriter-caret du globals.css */}
      {showCaret && <span className="typewriter-caret ml-1"></span>}
    </span>
  );
};

export default Typewriter;