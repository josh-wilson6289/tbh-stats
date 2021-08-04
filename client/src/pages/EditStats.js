import React, { useContext, useEffect } from "react";
import { AuthContext } from "../utils/context";
import AdminLogin from "../components/AdminLogin";
import "../style.css";

const EditStats = ({page, setPage}) => {

  useEffect(() => {
    setPage("editstats")
  }, [page]);

  const {user, isAuthenticated, loginWithPopup, logout} = useContext(AuthContext);

  return (
    <div id="editstats">
    <div className="container">
    <div id="editstats-content">
    {isAuthenticated ? 
      <h1>Edit Stats</h1>
     : 
      <AdminLogin loginWithPopup={loginWithPopup}/>
  }
  </div>
  </div>
  </div>
  );
};

export default EditStats;