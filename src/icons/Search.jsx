import React from "react";

const Search = (iconProps) => {
  return (
    <svg
      width={iconProps.size}
      height={iconProps.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={iconProps.color}
        strokeWidth={iconProps.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20.9999L16.65 16.6499"
        stroke={iconProps.color}
        strokeWidth={iconProps.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
