import React from "react";

import { H2 } from "./styles";

function Title({ title1 = "", title2 = "", invert = false, styles = {} }) {
  return (
    <H2 style={styles}>
      {invert ? (
        <>
          <span>{title1}</span> {title2}
        </>
      ) : (
        <>
          {title1} <span>{title2}</span>
        </>
      )}
    </H2>
  );
}

export default Title;
