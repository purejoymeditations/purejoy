import React from "react";

const SectionSeparator = () => {
  return (
    <div className="relative">
      {/* Curved SVG Wave Divider */}
      <svg
        className="w-full h-20 lg:h-24 drop-shadow-md"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="25%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="4"
              floodColor="#000000"
              floodOpacity="0.08"
            />
          </filter>
        </defs>
        <path
          d="M0,60 C300,20 400,100 600,60 C800,20 900,100 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          filter="url(#shadow)"
        />
        <path
          d="M0,80 C300,40 400,120 600,80 C800,40 900,120 1200,80 L1200,120 L0,120 Z"
          fill="#FAF4EB"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

export default SectionSeparator;
