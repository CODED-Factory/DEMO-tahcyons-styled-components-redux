import React from "react";

// Components
import Icon from "./_Icon";

const Facebook = props => (
  <Icon {...props}>
    {fill => (
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" fill="none">
        <path
          fill={fill}
          d="M7.5 8.5H5.2v8.1H1.8V8.5H.2V5.6h1.6V3.8c0-1.4.7-3.4 3.4-3.4h2.5v2.8H6c-.3 0-.7.1-.7.7v1.7h2.6l-.3 2.9z"
        />
      </svg>
    )}
  </Icon>
);

export default Facebook;
