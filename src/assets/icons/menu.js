import React from "react";

export default function MenuIcon({ onClick }) {
  return (
    <svg onClick={onClick} className="menu" xmlns="http://www.w3.org/2000/svg" width="57" height="20" viewBox="0 0 57 20">
      <g transform="translate(-1016.5 -385.5)">
        <line x2="34" transform="translate(1038.5 386.5)" fill="none" stroke="#FFA53C" strokeLinecap="round" strokeWidth="2" />
        <line x2="55" transform="translate(1017.5 395.5)" fill="none" stroke="#FFA53C" strokeLinecap="round" strokeWidth="2" />
        <line x2="55" transform="translate(1017.5 404.5)" fill="none" stroke="#FFA53C" strokeLinecap="round" strokeWidth="2" />
      </g>
    </svg>
  );
}
