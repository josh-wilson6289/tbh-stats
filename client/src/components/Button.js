import React from "react";
import "../style.css";
import { useAuth0 } from "@auth0/auth0-react";

const Button = ({ cName, onClick, name }) => {
  const { loginWithPopup, logout } = useAuth0();

  return (
    <button type="button" className={cName} onClick={onClick}>{name}</button>
  );
};

export default Button;