"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const clickCursor = () => {
      if (cursor) {
        cursor.classList.remove("click-animation");
        void cursor.offsetWidth; // force reflow to restart animation
        cursor.classList.add("click-animation");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", clickCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", clickCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] rounded-full bg-[#FFDCB4]/50 border border-[#FF8518]/60 backdrop-blur-[1.2px] shadow-md shadow-orange-300/30 transition-transform duration-200 ease-out"
      />
      <style jsx global>{`
        .custom-cursor.click-animation {
          animation: clickPulse 0.3s ease-out;
        }

        @keyframes clickPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.4);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
