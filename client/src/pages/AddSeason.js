import React, { useContext } from "react";
import { AuthContext } from "../utils/context";
import "../style.css";

const AddSeason = () => {

  const {user, isAuthenticated, loginWithPopup, logout} = useContext(AuthContext);

  return (
    <h1>Add Season</h1>
  );
};

export default AddSeason;