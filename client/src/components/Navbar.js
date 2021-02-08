import React from "react";
import Popup from "./Popup";
import Search from "./Search";

const Navbar = () => {

// this will check for the player, season, or team tab for a particular season
// this function is passed down as props to the tabledisplay, which will call 
// the loadplayers() function with the correct params
function handleDisplay() {

}  

return (
<div className="navbar">
<div className="ui menu">
  <a className="active item">
    Player
  </a>
  <a className="item" onClick={handleDisplay}>
    Goalie
  </a>
  <a className="item">
    Team
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