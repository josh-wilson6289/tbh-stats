import React from "react";
import "../style.css";


const Button = ({ cName, onClick, name }) => {


  return (
    <button type="button" className={cName} onClick={onClick}>{name}</button>
  );
};

export default Button;