import React from "react";

// Components
import Icon from "./_Icon";

const Twitter = props => (
  <Icon {...props}>
    {fill => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="14"
        fill="none"
      >
        <path
          fill={fill}
          d="M14.7 3.8v.4A9.1 9.1 0 0 1 .7 12a6.5 6.5 0 0 0 4.7-1.3c-1.4 0-2.6-1-3-2.2a3.2 3.2 0 0 0 1.4 0A3.2 3.2 0 0 1 1.2 5c.5.2 1 .4 1.5.4a3.2 3.2 0 0 1-1-4.3c1.6 2 4 3.2 6.6 3.4a3.2 3.2 0 0 1 5.5-3c.8-.1 1.5-.4 2-.7-.2.7-.7 1.3-1.3 1.7.6 0 1.2-.2 1.8-.5-.4.7-1 1.2-1.6 1.7z"
        />
      </svg>
    )}
  </Icon>
);

export default Twitter;
