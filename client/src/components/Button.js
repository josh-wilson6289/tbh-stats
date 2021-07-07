import React from "react";
import "../style.css";

const Button = ({name, type, href}) => {
  return (
    <button type="button" className={type}>{name} </button>
  );
};

export default Button;