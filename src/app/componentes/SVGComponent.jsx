import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    data-name="Line Color"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="m21 5-9 9-4-4"
      className="text-green-500"
      style={{
        fill: "none",
        stroke: "#52C241",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      d="M20.94 11a8.26 8.26 0 0 1 .06 1 9 9 0 1 1-9-9 8.83 8.83 0 0 1 4 1"
      style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
)
export default SvgComponent
