import * as React from "react";

const SwapIcon = (props) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Z" fill="var(--text-6)" />
    <path
      d="M3.359 4.389a.291.291 0 0 1 0-.413l1.163-1.163a.292.292 0 1 1 .412.413l-.668.666h2.79A2.036 2.036 0 0 1 9.09 5.927a.291.291 0 1 1-.581 0 1.454 1.454 0 0 0-1.453-1.453h-2.79l.669.666a.292.292 0 1 1-.413.412L3.36 4.39Zm4.484 2.604a.292.292 0 0 0-.413.413l.67.666H5.31a1.454 1.454 0 0 1-1.454-1.454.291.291 0 0 0-.58 0A2.036 2.036 0 0 0 5.31 8.654h2.789l-.67.666a.292.292 0 1 0 .414.413l1.163-1.164a.291.291 0 0 0 0-.413L7.843 6.993Z"
      fill="#fff"
    />
  </svg>
);

export default SwapIcon;