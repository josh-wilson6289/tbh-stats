import React, { useContext } from "react";
import { AuthContext } from "../utils/context";
import "../style.css";

const AddGame = () => {

  const {user, isAuthenticated, loginWithPopup, logout} = useContext(AuthContext);

  return (
    <h1>Add Game</h1>
  );
};

export default AddGame;