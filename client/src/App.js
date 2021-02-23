import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import PlayerTable from "./components/PlayerTable";
import GoalieTable from "./components/GoalieTable";
import TeamTable from "./components/TeamTable";
import Dropdown from "./components/Dropdown";
import "./style.css";

export default () => {
  return (
    <div>
    <Jumbotron />
    <Router>
    <div className="ui container">
      <Navbar />
      <br></br>
        <Route exact path="/" component={PlayerTable} />
        <Route exact path="/players" component={PlayerTable} />
        <Route exact path="/goalies" component={GoalieTable} />
        <Route exact path="/teams" component={TeamTable} />
      <br></br>
      <Dropdown />
      <Pagination />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
    </Router>
      <Footer />
  </div>
  );
};