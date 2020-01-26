import React from "react";

// Components
import Icon from "./_Icon";

const Check = props => (
  <Icon {...props}>
    {fill => (
      <svg
        className="mr2"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
      >
        <path fill={fill} d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path
          fill="#fff"
          d="M10.8 5.1l-4.2 4L5.4 8c-.5-.4-1.3 0-.9.7l1.4 2.1c.2.3.7.6 1.2 0l4.3-5c.5-.5-.1-1-.6-.6z"
        />
      </svg>
    )}
  </Icon>
);

export default Check;
