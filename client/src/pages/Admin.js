import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../utils/context";
import AdminLanding from "../components/AdminLanding";
import AdminLogin from "../components/AdminLogin";
import "../style.css";

const Admin = ({ page, setPage }) => {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage("admin")
  }, [page]);

  const {user, isAuthenticated, loginWithPopup, logout} = useContext(AuthContext);
  
  return (
    <div id="admin">
    <div className="container">
    <div id="login-content">
    {isAuthenticated ? 
      <AdminLanding user={user} isLoading={isLoading} setIsLoading={setIsLoading} />
     : 
      <AdminLogin loginWithPopup={loginWithPopup}/>
  }
  </div>
  </div>
  </div>
  );
};

export default Admin;


 