import React from "react";

const Alert = ({ level = "", text }) => {
  const theme = {
    background: "",
    color: ""
  };

  switch (level) {
    case "error":
      theme.background = "bg-light-red";
      theme.color = "white";
      break;
    case "info":
      theme.background = "bg-lightest-blue";
      theme.color = "navy";
      break;
    case "success":
      theme.background = "bg-light-green";
      theme.color = "dark-green";
      break;
    default:
      theme.background = "bg-light-yellow";
      theme.color = "white";
  }

  const { background, color } = theme;

  return (
    <div
      className={`flex items-center justify-center pa3 br2 mv2 ${background} ${color}`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Alert;
