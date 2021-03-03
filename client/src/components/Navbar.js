import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../style.css";

const Navbar = ({ handleSeason }) => {

return (
<nav className="navbar">
  <div className="ui menu">
    <Link
      to="/players"
      className="active item"
      tablevalue="players">Player
      </Link>
  
    <Link 
      to="/goalies"
      className="item"
      tableValue="goalies">Goalie
    </Link>
   
   <Link
      to="/teams"
      className="item"
      tableValue="teams">Team
    </Link>
 

 <Dropdown handleSeason={handleSeason} />
 
    <div className="right menu">
      <div className="item">
    <Search />
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;