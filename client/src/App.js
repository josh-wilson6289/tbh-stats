import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationProvider from "./utils/AuthenticationProvider";
import { AuthContext } from "./utils/context";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Player from "./pages/Player";
import Goalie from "./pages/Goalie";
import Team from "./pages/Team";
import Admin from "./pages/Admin";
import AddGame from "./pages/AddGame";
import AddSeason from "./pages/AddSeason";
import EditStats from "./pages/EditStats";
import "./style.css";

export default () => {

const [season, setSeason] = useState("Q3 2021");
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

const { user, isAuthenticated, loginWithPopup, logout, isLoading } = useAuth0();

// need to do error handling here to redirect if there's an error
const { error } = useAuth0();

  return (
    <div>
    <div className="container-fluid"> 
  <Router>
    <Jumbotron />
      <div className="row"></div>
      <Switch>
        <AuthContext.Provider value={{user, isAuthenticated, loginWithPopup, logout}}>
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
        <Route exact path="/admin">
          <Admin 
            page={page} 
            setPage={setPage}
            />
        </Route>
      <Route exact path="/admin/addgame">
        <AddGame
          page={page}
          setPage={setPage}
        />
      </Route>
      <Route exact path="/admin/addseason">
        <AddSeason
          page={page}
          setPage={setPage}
        />
      </Route>
      <Route exact path="/admin/editstats">
        <EditStats
          page={page}
          setPage={setPage}
        />
      </Route>
      <br></br>
      <br></br>
      <Footer 
      />
      </AuthContext.Provider>
      </Switch>
  </Router>

  </div>

  </div>
  );
};