import React from "react";

function EditIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={props.style ?? {}} width={props.width} height={props.height} viewBox="0 0 12 11.941">
      <g transform="translate(-0.001 -1.289)">
        <path
          d="M7.462,3.282,9.9,5.723,3.725,11.9,1.285,9.461Zm4.293-.589L10.667,1.6a1.08,1.08,0,0,0-1.526,0L8.1,2.647,10.54,5.088l1.216-1.216A.832.832,0,0,0,11.756,2.693ZM.007,12.892a.278.278,0,0,0,.336.33l2.72-.66L.624,10.122Z"
          transform="translate(0)"
          fill={props.fill}
        />
      </g>
    </svg>
  );
}

export default EditIcon;
