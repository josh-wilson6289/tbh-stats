import React from "react";
import "../style.css";
import API from "../utils/API"
import Button from "./Button";
import AdminDropdown from "./AdminDropdown";

const AdminLanding = ({user, isLoading, setIsLoading}) => {
  
  const seasonOptions = [
    "2015", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", "Q1 2020", "Q1 2021", "Q2 2021", "Q3 2021"
  ]
  
  const chooseSeason = (e) => {
    e.preventDefault();
    let season = (e.target.getAttribute("value"));
    setIsLoading(true);
    API.getPlayersBySeason(season)
      .then(players => {
        players = players.data;
        console.log(players)
        });
  }
  
  function addGame() {
    console.log("add game clicked");
  }
  
  function addSeason() {
    console.log("editing stats for season")
  }
  return (
    <div>
    <div className="row justify-content-center">
      <h1 className="login-message">Hello {user.nickname}</h1>
    </div>
    <div className="row justify-content-center dropdown">
      <Button cName="btn btn-primary" onClick={addGame} name="Add Game"/>
      <Button cName="btn btn-primary" onClick={addSeason} name="Add Season"/>
      <AdminDropdown cName="btn btn-primary dropdown-toggle" chooseSeason={chooseSeason} name="Edit Stats" options={seasonOptions}/>
      </div>
      </div>
  );
};

export default AdminLanding;