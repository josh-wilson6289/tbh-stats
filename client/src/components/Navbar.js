import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navbar = ({ handleTable, handleSeason }) => {

return (
<div className="container-fluid">
<div className="ui menu">
    <Link
      to="/players"
      pointing className="active item"
      tableValue="players">Player
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
  </div>
  );
};

export default Navbar;