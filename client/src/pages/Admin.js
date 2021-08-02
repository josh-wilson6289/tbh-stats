import React, { useState, useEffect } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AdminLanding from "../components/AdminLanding";
import AdminLogin from "../components/AdminLogin";
import Button from "../components/Button";
import "../style.css";

const Admin = ({ page, setPage }) => {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage("admin")
  }, [page]);

  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  
  return (
    <div id="admin">
    <div className="container">
 
    {isAuthenticated ? 
      <AdminLanding user={user} isLoading={isLoading} setIsLoading={setIsLoading} />
     : 
      <AdminLogin loginWithPopup={loginWithPopup}/>
  }
  </div>
  </div>
  );
};

export default Admin;


 