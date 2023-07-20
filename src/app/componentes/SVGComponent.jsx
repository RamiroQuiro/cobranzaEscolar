import * as React from "react"
const SvgComponent = ({checked}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    data-name="Line Color"
    viewBox="0 0 24 24"
  >
    {checked?
      <path
      d="m21 5-9 9-4-4"
      className="duration-300"
      style={{
        fill: "none",
        stroke: "#52C241",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth:3,
      }}
      />:
      <path   className="duration-300" d="M7.8 13C7.35817 13 7 13. 13.8V14.2C7 14.6418 7.35817 15 7.8 15H20.2C20.6418 15 21 14.6418 21 14.2V13.8C21 13.3582 20.6418 13 20.2 13H7.8Z" fill="red"></path>
    }
    <path
      className={`duration-300 origin-center ${!checked?"-rotate-45":"rotate-0"}`}
    d="M20.94 11a8.26 8.26 0 0 1 .06 1 9 9 0 1 1-9-9 8.83 8.83 0 0 1 4 1"
    style={{
      fill: "none",
      stroke: checked?"#2C2C2C":"red",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
    }}
    />
  </svg>
)
export default SvgComponent
