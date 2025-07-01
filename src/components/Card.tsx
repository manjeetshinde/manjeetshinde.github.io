import React from "react";
import { twMerge } from "tailwind-merge"; // Import the twMerge function correctly

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Card({ children, className }: CardProps) {
  return (
    <section
      className={twMerge(
        // Subtle, always-present semi-transparent border for glass effect
        "flex flex-col gap-4 rounded-2xl border-2 border-white/15 p-4 transition-all duration-300 bg-black/60 backdrop-blur-md hover:border-blue-200/40 focus-within:border-blue-200/40 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.12),0_0_24px_8px_rgba(99,102,241,0.18)] focus-within:shadow-[0_0_0_4px_rgba(255,255,255,0.12),0_0_24px_8px_rgba(99,102,241,0.18)]",
        className
      )}
    >
      {children}
    </section>
  );
}
