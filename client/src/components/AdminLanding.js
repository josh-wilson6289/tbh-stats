import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Button from "./Button";
import "../style.css";

const AdminLanding = ({user}) => {
  
  // const seasonOptions = [
  //   "2015", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", "Q1 2020", "Q1 2021", "Q2 2021", "Q3 2021"
  // ]
  
  // const chooseSeason = (e) => {
  //   e.preventDefault();
  //   document.getElementById("login-content").style.display="none";
  //   let season = (e.target.getAttribute("value"));
  //   setIsLoading(true);
  //   API.getPlayersBySeason(season)
  //     .then(players => {
  //       players = players.data;
  //       document.getElementById("edit-stats").style.display="block";
  //       });
  // }
  
console.log(user);

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