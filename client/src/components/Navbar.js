import React from "react";
import Popup from "./Popup";
import Search from "./Search";

const Navbar = () => {
  
return (
<div className="navbar">
<div className="ui menu">
  <a className="active item">
    Player
  </a>
  <a className="item">
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