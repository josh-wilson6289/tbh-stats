import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../utils/context";
import AdminLanding from "../components/AdminLanding";
import AdminLogin from "../components/AdminLogin";
import "../style.css";

const Admin = ({ page, setPage }) => {

  useEffect(() => {
    setPage("admin")
  }, [page]);

  const {user, isAuthenticated, loginWithPopup, logout, isLoading } = useContext(AuthContext);

  return (
    <div id="admin">
    <div className="container">
    <div id="login-content">
    {isAuthenticated ? 
      <AdminLanding user={user} />
     : 
      <AdminLogin loginWithPopup={loginWithPopup} isLoading={isLoading}/>
    }
  </div>
  </div>
  </div>
  );
};

export default Admin;


 