import React from "react";

const LegalIntakeOSiconFull = ({ width, height, ...props }) => {
  return (
    <svg
      width={width || "100"}
      height={height || "100"}
      viewBox="30 70 1300 370"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&amp;display=swap');
          text font-family: 'Space Grotesk', sans-serif;
        </style>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="7"
            stdDeviation="9"
            flood-color="#000000"
            flood-opacity="0.18"
          />
        </filter>
      </defs>

      <rect
        x="60"
        y="100"
        width="300"
        height="300"
        rx="55"
        fill="#141414"
        filter="url(#softShadow)"
      />

      <rect x="112.8" y="169.9" width="49.4" height="173.8" rx="13.6" fill="#ffffff" />
      <rect x="112.8" y="292.6" width="127.8" height="51.1" rx="13.6" fill="#ffffff" />

      <rect x="262.8" y="224.4" width="37.5" height="119.3" rx="11.9" fill="#ffffff" />
      <rect x="256" y="156.2" width="51.1" height="51.1" rx="11.9" fill="#6C4CF1" />

      <text
        x="420"
        y="258"
        font-size="92"
        font-weight="700"
        fill="#141414"
        letter-spacing="-1.5"
      >
        Legal Intake OS
      </text>

      <text x="420" y="310" font-size="22" font-weight="500" letter-spacing="4">
        <tspan fill="#8f8f8f">MISSED CALLS. </tspan>
        <tspan fill="#6C4CF1">BOOKED CASES. </tspan>
        <tspan fill="#8f8f8f">MORE REVENUE.</tspan>
      </text>
    </svg>
  );
};

export default LegalIntakeOSiconFull;