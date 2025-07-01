"use client";

export default function AnimatedGradientWavesBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full animate-gradient-waves"
      style={{
        background:
          "linear-gradient(270deg, #a1c4fd, #c2e9fb, #fbc2eb, #fcb69f, #a1c4fd)",
        backgroundSize: "400% 400%",
      }}
    />
  );
}
