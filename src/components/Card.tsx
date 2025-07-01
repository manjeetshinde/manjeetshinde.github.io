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
        "flex flex-col gap-4 rounded-2xl border-2 border-gray-600 p-4 transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(99,102,241,0.25)] focus-within:shadow-[0_0_24px_4px_rgba(99,102,241,0.25)] bg-black/60 backdrop-blur-md",
        className
      )}
    >
      {children}
    </section>
  );
}
