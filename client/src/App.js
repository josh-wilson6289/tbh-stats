import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Player from "./pages/Player";
import Goalie from "./pages/Goalie";
import Team from "./pages/Team";
import Login from "./pages/Login";
import "./style.css";
import TBHVideo from "./Images/TBHVideo.mp4";


export default () => {

const [season, setSeason] = useState("Q2 2021");
const [page, setPage] = useState("players");
const [searchTerm, setSearchTerm] = useState("");

const handleSeason = (e) => {
  e.preventDefault();
  let currentSeason = (e.target.getAttribute("seasonvalue"));
  setSeason(currentSeason);
}

const handleSearch = (e) => {
  setSearchTerm(e.target.value)
}

  return (
    <div>
    <div className="container-fluid"> 
  <Router>

    <Jumbotron />
      <div className="row"></div>
      <Switch>
        <Route exact path={["/", "/players"]}>
          <Player 
            season={season}
            page={page}
            setPage={setPage}
            searchTerm={searchTerm}
            handleSeason={handleSeason}
            handleSearch={handleSearch} 
          />
        </Route>
        <Route exact path={"/goalies"}>
          <Goalie 
            season={season}
            page={page}
            setPage={setPage}
            searchTerm={searchTerm}
            handleSeason={handleSeason}
            handleSearch={handleSearch}
          />
        </Route>
        <Route exact path="/teams">
          <Team 
            season={season}
            page={page}
            setPage={setPage}
            searchTerm={searchTerm} 
            handleSeason={handleSeason}
            handleSearch={handleSearch}
          />
        </Route>
        <Route exact path="/login">
          <Login
            page={page}
            setPage={setPage}
          />
        </Route>
      </Switch>

      <br></br>
      <br></br>

      <Footer />
        
  </Router>
  </div>

  </div>
  );
};