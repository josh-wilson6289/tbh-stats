import React, {useState} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Navbar = ({ handleTable, handleSeason }) => {

return (
<div className="navbar">
<div className="ui menu">
    
      <div className="active item"
      tableValue="players"
      onClick={handleTable}>Player</div>
    
      <div className="item"
      tableValue="goalies"
      onClick={handleTable}>Goalie</div>
    
      <div className="item"
      tableValue="teams"
      onClick={handleTable}>Team</div>

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