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
        <linearGradient id="auroraGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a1c4fd" />
          <stop offset="100%" stopColor="#fbc2eb" />
        </linearGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </defs>
      <g>
        <AnimatedBlob />
      </g>
    </svg>
  );
}

function AnimatedBlob() {
  // Much larger, more rounded, morphing, blurred blob
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
          dur="12s"
          repeatCount="indefinite"
          values="M960,400 Q1200,250 1440,400 Q1600,540 1440,680 Q1200,830 960,680 Q720,540 960,400Z;
                  M960,420 Q1180,320 1400,420 Q1520,540 1400,660 Q1180,760 960,660 Q740,540 960,420Z;
                  M960,400 Q1200,250 1440,400 Q1600,540 1440,680 Q1200,830 960,680 Q720,540 960,400Z"
        />
        <animate
          attributeName="opacity"
          dur="12s"
          repeatCount="indefinite"
          values="0.5;0.7;0.5"
        />
      </path>
    </>
  );
}
