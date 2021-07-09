import React from "react";
import "../style.css";

const Button = ({name, type, onClick}) => {
  
  return (
    <button type="button" className={type} onClick={onClick}>{name} </button>
  );
};

export default Button;