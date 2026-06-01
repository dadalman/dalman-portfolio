"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Only enable on devices with a real mouse (fine pointer + hover).
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide the native cursor only now that ours is live.
    document.documentElement.classList.add("cursor-active");

    // Start centered so the cursor is visible before the first move.
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const place = () => {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };
    place();

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      place();
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(loop);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, input, textarea, [data-cursor]"))
        ring.classList.add("cursor-ring--active");
      else ring.classList.remove("cursor-ring--active");
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("cursor-active");
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-fg"
        style={{ marginLeft: "-3px", marginTop: "-3px" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-fg/40"
        style={{ marginLeft: "-16px", marginTop: "-16px" }}
      />
      <style jsx global>{`
        .cursor-ring {
          transition: width 0.2s ease, height 0.2s ease, margin 0.2s ease,
            border-color 0.2s ease, background-color 0.2s ease;
        }
        .cursor-ring--active {
          width: 56px;
          height: 56px;
          margin-left: -28px;
          margin-top: -28px;
          border-color: var(--accent);
          background-color: color-mix(in srgb, var(--accent) 12%, transparent);
        }
      `}</style>
    </>
  );
}
