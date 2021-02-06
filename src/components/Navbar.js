import React from "react";

const Navbar = () => {
  
    return (
<div className="navbar">
<div className="ui pointing menu">
  <a className="active item">
    Player
  </a>
  <a className="item">
    Goalie
  </a>
  <a className="item">
    Team
  </a>
  <div className="right menu">
    <div className="item">
      <div className="ui transparent icon input">
        <input type="text" placeholder="Search..." />
        <i className="search link icon"></i>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Navbar;