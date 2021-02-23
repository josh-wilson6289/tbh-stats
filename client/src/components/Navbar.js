import React, {useState} from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import Search from "./Search";

const Navbar = () => {


const [page, setPage] = useState("player");
const [season, setSeason] = useState("Q1 2021");
const [searchTerm, setSearchTerm] = useState("");

  // this will check for the player, season, or team tab for a particular season
// this function is passed down as props to the tabledisplay, which will call 
// the loadplayers() function with the correct params
function handleDisplay() {

}  

return (
<div className="navbar">
<div className="ui pointing menu">
  <a>
    <Link 
      to="/"
      className={
        window.location.pathname === "/" || window.location.pathname === "/players"
        ? "active item"
        : "item"
      }
      >
    Player
    </Link>
  </a>
  <a>
    <Link
      to="/goalies"
      className={
        window.location.pathname === "/goalies" ? "active item" : "item"}
      >
    Goalie
    </Link>
  </a>
  <a>
    <Link
      to="/teams"
      className={
        window.location.pathname === "/teams" ? "active item" : "item"}
    >
      Team
    </Link>
  </a>
 
  <Popup />

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