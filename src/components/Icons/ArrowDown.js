import React from "react";

// Components
import Icon from "./_Icon";

const ArrowDown = props => (
  <Icon {...props}>
    {fill => (
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="none">
        <path
          fill={fill}
          transform="translate(5.000000, 4.000000) scale(1, -1) translate(-5.000000, -4.000000)"
          d="M2.5 3.4L0 5.9l.6.6.6.6 2-1.9L5 3.3l1.9 2L8.8 7l.6-.6.6-.6-2.5-2.5L5 .9 2.5 3.4z"
        />
      </svg>
    )}
  </Icon>
);

export default ArrowDown;
