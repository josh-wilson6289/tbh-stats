import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../style.css";

const Navbar = ({ handleSeason, handleSearch, page }) => {

return (
<nav className="navbar">
  <div className="ui menu">
    <Link
      to="/players"
      className={page === "players" ? "active item" : "item"}
      tablevalue="players">Player
      </Link>
  
    <Link 
      to="/goalies"
      className={page === "goalies" ? "active item" : "item"}
      tablevalue="goalies">Goalie
    </Link>
   
   <Link
      to="/teams"
      className={page === "teams" ? "active item" : "item"}
      tablevalue="teams">Team
    </Link>
 

 <Dropdown handleSeason={handleSeason} />
 </div>

  <div id="searchbox" className="ui menu">
    <div className="right menu">
      <div className="item">
    <Search 
      handleSearch={handleSearch}
    />
    
    </div>
  </div>
  </div>
</nav>

  );
};

export default Navbar;