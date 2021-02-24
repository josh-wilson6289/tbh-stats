import React, {useState} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Navbar = () => {

const [page, setPage] = useState("players");
const [season, setSeason] = useState("Q1 2021");
const [searchTerm, setSearchTerm] = useState("");

  // this will check for the player, season, or team tab for a particular season
// this function is passed down as props to the tabledisplay, which will call 
// the loadplayers() function with the correct params
const handleDisplay = (e) => {
e.preventDefault();
console.log(e.target.getAttribute("value"));
setPage(e.target.getAttribute("value"));
}  

return (
<div className="navbar">
<div className="ui menu">
 
      <div className="active item"
      value="players"
      onClick={handleDisplay}>Player</div>
    
      <div className="item"
      value="goalies"
      onClick={handleDisplay}>Goalie</div>
    
      <div className="item"
      value="teams"
      onClick={handleDisplay}>Team</div>
 
 <Dropdown />
 

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