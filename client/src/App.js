import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayerPage from "./pages/PlayerPage";
import GoaliePage from "./pages/GoaliePage";
import TeamPage from "./pages/TeamPage";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import "./style.css";
 

export default () => {
  return (
    <div>
    <Jumbotron />
    <Router>
    <div className="ui container">
      <Navbar />
      <br></br>
        <Route exact path="/" component={PlayerPage} />
        <Route exact path="/players" component={PlayerPage} />
        <Route exact path="/goalies" component={GoaliePage} />
        <Route exact path="/teams" component={TeamPage} />

      {/* <PlayerTable /> */}
      <br></br>
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