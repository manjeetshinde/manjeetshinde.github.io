"use client";
import { useEffect, useRef } from "react";

// Subtle animated background that responds to mouse/touch
export default function AnimatedSpotlightBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    function setPosition(x: number, y: number) {
      if (!bgRef.current) return;
      bgRef.current.style.setProperty("--x", `${x}px`);
      bgRef.current.style.setProperty("--y", `${y}px`);
    }

    function handleMove(e: MouseEvent | TouchEvent) {
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;
      if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY;
      } else if (e.touches && e.touches[0]) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }
      setPosition(x, y);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    // Set initial position
    setPosition(window.innerWidth / 2, window.innerHeight / 2);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      style={{
        background:
          "radial-gradient(600px at var(--x,50vw) var(--y,50vh), rgba(99,102,241,0.15), transparent 80%)",
        transition: "background 0.2s cubic-bezier(0.4,0,0.2,1)",
      }}
    />
  );
}
