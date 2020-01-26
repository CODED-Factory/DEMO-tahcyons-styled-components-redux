import React from "react";

// Components
import Icon from "./_Icon";

const Instagram = props => (
  <Icon {...props}>
    {fill => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        fill="none"
      >
        <path
          fill={fill}
          fillRule="evenodd"
          d="M16.9 12.9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h9.8a3 3 0 0 1 3 3V13zM11.7 8a2.8 2.8 0 0 1-5.6 0c0-.6.2-1.2.6-1.6a2.8 2.8 0 0 1 5 1.6zm.7-3.4V1.9H15v2.7h-2.6zm-3.5 7.8a4.4 4.4 0 0 0 4-6h2.4v6.5c0 .8-.7 1.5-1.5 1.5H4c-.8 0-1.5-.7-1.5-1.5V6.4H5a4.4 4.4 0 0 0 4 6z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </Icon>
);

export default Instagram;
