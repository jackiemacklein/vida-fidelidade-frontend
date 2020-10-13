import React from "react";

function PlusIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 83" style={props.style ?? {}} width={props.width} height={props.height}>
      <g>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M81,36.166H2c-1.104,0-2,0.896-2,2v6.668c0,1.104,0.896,2,2,2h79c1.104,0,2-0.896,2-2v-6.668   C83,37.062,82.104,36.166,81,36.166z"
          fill={props.fill}
        />
      </g>
    </svg>
  );
}

export default PlusIcon;
