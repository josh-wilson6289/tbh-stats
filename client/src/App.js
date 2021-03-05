import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Player from "./pages/Player";
import Goalie from "./pages/Goalie";
import Team from "./pages/Team";

import "./style.css";

export default () => {


const [season, setSeason] = useState("Q1 2021");

const handleSeason = (e) => {
  e.preventDefault();
  let currentSeason = (e.target.getAttribute("seasonvalue"));
  setSeason(currentSeason);
}

  return (
    <Router>
    <div> 
    <Jumbotron />
    <div className="container-fluid">
      <Navbar 
        handleSeason={handleSeason}/>
      <br></br>
      <Switch>
        <Route exact path={["/", "/players"]}>
          <Player 
            season={season}
            setSeason={setSeason}
            page="players"
          />
        </Route>
        <Route exact path={"/goalies"}>
          <Goalie 
            season={season}
            page="goalies"
          />
        </Route>
        <Route exact path="/teams">
          <Team 
            season={season}
            page="teams"
          />
        </Route>
      </Switch>
  
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  
      <Footer />
  </div>
  </Router>
  );
};