import React from "react";

import { H1 } from "./styles";

function InternalTitle({ title1 = "", title2 = "", invert = false, styles = {} }) {
  return (
    <H1 style={styles}>
      {invert ? (
        <>
          <span>{title1}</span> {title2}
        </>
      ) : (
        <>
          {title1} <span>{title2}</span>
        </>
      )}
    </H1>
  );
}

export default InternalTitle;
