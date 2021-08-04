import React, { useContext, useEffect } from "react";
import { AuthContext } from "../utils/context";
import AdminLogin from "../components/AdminLogin";
import "../style.css";

const AddSeason = ({page, setPage}) => {

  useEffect(() => {
    setPage("addseason")
  }, [page]);

  const {user, isAuthenticated, loginWithPopup, logout} = useContext(AuthContext);

  return (
    <div id="addseason">
    <div className="container">
    <div id="addseason-content">
    {isAuthenticated ? 
      <h1>Add a Season</h1>
     : 
      <AdminLogin loginWithPopup={loginWithPopup}/>
  }
  </div>
  </div>
  </div>
  );
};

export default AddSeason;