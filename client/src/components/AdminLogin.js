import React, {useContext} from "react";
import { AuthContext } from "../utils/context";
import Button from "./Button";
import "../style.css";


const AdminLogin = () => {

const {user, isAuthenticated, loginWithPopup, logout, isLoading } = useContext(AuthContext);

return (
    <div className="row justify-content-center">
      <div className="col-12">
    <h1 className="login-message">Please log in to access admin panel.</h1>
    <div className="row justify-content-center"> 
    <Button cName="btn btn-primary admin-btn" click={loginWithPopup} name="Admin Login" />
    </div>
  </div>
  </div>
  );
};

export default AdminLogin;