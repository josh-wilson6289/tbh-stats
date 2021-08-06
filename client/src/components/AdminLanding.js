import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Button from "./Button";
import "../style.css";

const AdminLanding = ({user}) => {
  
  return (
  <div>
    <div className="row justify-content-center">
      <h1 className="login-message">Hello, {user.nickname}</h1>
    </div>
    
    <div className="row justify-content-center">
      <div className="txt-center">
      <Link to="/admin/addgame">
      <Button cName="btn btn-primary" name="Add Game"/>
      </Link>
      </div>

    <div className="txt-center">
      <Link to="/admin/addseason">
      <Button cName="btn btn-primary" name="Add Season"/>
      </Link>
    </div>

    <div className="txt-center">
      <Link to="/admin/editstats">
      <Button cName="btn btn-primary" name="Edit Stats"/>
      </Link>
    </div>

    </div>
  </div>
  );
};

export default AdminLanding;