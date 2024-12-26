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
        "flex flex-col gap-4 rounded-2xl border-2 border-gray-600 p-4",
        className,
      )}
    >
      {children}
    </section>
  );
}
