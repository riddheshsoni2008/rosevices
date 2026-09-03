import React from "react";

export const WaveDivider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden leading-none -mb-1">
      <svg
        className="relative block w-full h-[40px] sm:h-[60px] text-[#E7F3F1]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
