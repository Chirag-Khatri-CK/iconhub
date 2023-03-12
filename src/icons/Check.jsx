import React from "react";

const Check = (iconProps) => {
  return (
    <svg
    width={iconProps.size}
    height={iconProps.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke={iconProps.color}
        strokeWidth={iconProps.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
