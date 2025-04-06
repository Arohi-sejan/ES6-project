import React, { useState, useEffect } from "react";

export default function TypingEffect() {
  const text = "Hello, I'm typing...";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timeout;

    if (show) {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
          setShow(false);
        }, 1000);
      }
    } else {
      timeout = setTimeout(() => {
        setShow(true);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [index, show]);

  return (
    <h1 className="text-xl text-center font-mono">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
