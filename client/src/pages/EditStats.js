import React, { useContext } from "react";
import { AuthContext } from "../utils/context";
import "../style.css";

const EditStats = () => {

  const {user, isAuthenticated, loginWithPopup, logout} = useContext(AuthContext);

  return (
    <h1>Edit Stats</h1>
  );
};

export default EditStats;