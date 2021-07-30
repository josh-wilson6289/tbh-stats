import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/Button";
import "../style.css";

const Admin = () => {

  const { user, isAuthenticated, isLoading, loginWithPopup, logout } = useAuth0();

  return (
    <div id="admin">
    <div className="container">
    {isAuthenticated ? 
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
     : 
    <div className="row justify-content-center">
      <div className="col-12">
    <h1 id="login-message">Please log in to access admin panel.</h1>
    <div className="row justify-content-center"> 
    <Button cName="btn btn-primary" onClick={loginWithPopup} name="Admin Login" />
    </div>
  </div>
  </div>
  }
  </div>
  </div>
  );
};

export default Admin;


 