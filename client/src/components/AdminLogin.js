import React from "react";
import "../style.css";
import Button from "./Button";

const AdminLogin = (loginWithPopup) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12">
    <h1 className="login-message">Please log in to access admin panel.</h1>
    <div className="row justify-content-center"> 
    <Button cName="btn btn-primary" onClick={loginWithPopup} name="Admin Login" />
    </div>
  </div>
  </div>
  );
};

export default AdminLogin;