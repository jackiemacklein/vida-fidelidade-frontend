import React from "react";

function PlusIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style={props.style ?? {}} width={props.width} height={props.height}>
      <polygon
        points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5   455,242.5 "
        fill={props.fill}
        stroke={props.fill}
      />
    </svg>
  );
}

export default PlusIcon;
