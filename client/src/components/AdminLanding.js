import React from "react";
import "../style.css";
import API from "../utils/API"
import Button from "./Button";
import AdminDropdown from "./AdminDropdown";
import AddSeason from "./AddSeason";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const AdminLanding = ({user, isLoading, setIsLoading}) => {
  
  const seasonOptions = [
    "2015", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", "Q1 2020", "Q1 2021", "Q2 2021", "Q3 2021"
  ]
  
  const chooseSeason = (e) => {
    e.preventDefault();
    document.getElementById("login-content").style.display="none";
    let season = (e.target.getAttribute("value"));
    setIsLoading(true);
    API.getPlayersBySeason(season)
      .then(players => {
        players = players.data;
        document.getElementById("edit-stats").style.display="block";
        });

  }
  
  function addGame() {
    console.log("add game clicked");
    document.getElementById("login-content").style.display="none";
    document.getElementById("add-game").style.display="block";
  }
  
  function addSeason() {
    document.getElementById("login-content").style.display="none";
    document.getElementById("add-season").style.display="block";
    console.log("add season clicked");
  }

  return (
  <div>
    
    <div className="row justify-content-center">
      <h1 className="login-message">Hello {user.nickname}</h1>
    </div>
    
    <div className="row justify-content-center dropdown">
      <Button cName="btn btn-primary" 
        click={addGame} 
        name="Add Game"/>
      
      <Button cName="btn btn-primary" 
        click={addSeason} 
        name="Add Season"/>

      <AdminDropdown 
        cName="btn btn-primary dropdown-toggle" 
        chooseSeason={chooseSeason} 
        name="Edit Stats" 
        options={seasonOptions}/>
    </div>

  </div>
  );
};

export default AdminLanding;