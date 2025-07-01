"use client";

export default function AuroraBlobBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 w-full h-full"
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient
          id="auroraGradient"
          cx="50%"
          cy="50%"
          r="80%"
          fx="60%"
          fy="40%"
        >
          <stop offset="0%" stopColor="#fff1f9" />
          <stop offset="40%" stopColor="#a1c4fd" />
          <stop offset="80%" stopColor="#fbc2eb" />
          <stop offset="100%" stopColor="#ec4899" />
        </radialGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </defs>
      <g>
        <AnimatedBlob />
      </g>
    </svg>
  );
}

function AnimatedBlob() {
  // More fluid, faster, multi-color morphing blurred blob
  return (
    <>
      <path
        fill="url(#auroraGradient)"
        opacity="0.7"
        filter="url(#blur)"
        transform="scale(1.8) translate(-500 -216)"
      >
        <animate
          attributeName="d"
          dur="6s"
          repeatCount="indefinite"
          values="M960,400 Q1200,250 1440,400 Q1600,540 1440,680 Q1200,830 960,680 Q720,540 960,400Z;
                  M960,500 Q1100,200 1500,400 Q1700,600 1400,800 Q1200,900 900,700 Q700,600 960,500Z;
                  M960,400 Q1200,250 1440,400 Q1600,540 1440,680 Q1200,830 960,680 Q720,540 960,400Z"
        />
        <animate
          attributeName="opacity"
          dur="6s"
          repeatCount="indefinite"
          values="0.5;0.7;0.5"
        />
      </path>
    </>
  );
}
