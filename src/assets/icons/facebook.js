import React from "react";

function FacebookIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style={props.style ?? {}} width={props.width} height={props.height}>
      <g transform="translate(0 -0.001)">
        <path
          d="M28.343,0H1.656A1.656,1.656,0,0,0,0,1.657V28.344A1.656,1.656,0,0,0,1.656,30H16.024V18.383H12.114V13.855h3.909V10.516c0-3.874,2.366-5.985,5.822-5.985a32.425,32.425,0,0,1,3.493.178v4.05h-2.4c-1.88,0-2.242.894-2.242,2.2v2.89h4.484L24.6,18.381H20.7V30h7.644A1.657,1.657,0,0,0,30,28.344V1.656A1.656,1.656,0,0,0,28.343,0Z"
          transform="translate(0)"
          fill={props.fill}
        />
      </g>
    </svg>
  );
}

export default FacebookIcon;
