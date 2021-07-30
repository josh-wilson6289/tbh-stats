import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/Button";
import AddSeason from "../components/AddSeason";
import "../style.css";

const Admin = ({ page, setPage }) => {

  useEffect(() => {
    setPage("admin")
  }, [page]);

  const { user, isAuthenticated, isLoading, loginWithPopup, logout } = useAuth0();
  
  const seasonOptions = [
    "2015", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", "Q1 2020", "Q1 2021", "Q2 2021", "Q3 2021"
  ]

  function addSeason() {
    console.log("add season clicked");
  }

  function addGame() {
    console.log("add game clicked");
  }

  function editStats() {
    console.log("editing stats for season")
  }

  return (
    <div id="admin">
    <div className="container">
    {isAuthenticated ? 
    <div>
    <div className="row justify-content-center">
      <h1 className="login-message">Hello {user.nickname}</h1>
    </div>
    
    <div className="row justify-content-center">
      <Button cName="btn btn-primary" onClick={addSeason} name="Add Season"/>
      <Button cName="btn btn-primary" onClick={addGame} name="Add Game"/>
      <Button cName="btn btn-primary" onClick={editStats} name="Edit Stats"/>
    </div>
      </div>
     : 
    <div className="row justify-content-center">
      <div className="col-12">
    <h1 className="login-message">Please log in to access admin panel.</h1>
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


 