import React from "react";
import "../style.css";


const Button = ({ cName, click, name }) => {

  return (
    <button type="button" className={cName} onClick={click}>{name}</button>
  );
};

export default Button;