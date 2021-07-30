import React from "react";
import TbhLogo from "../Images/tbh-logo.png";
import "../style.css";


const Jumbotron = () => {

  return (
    <div id="jumbo" className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
        <div className="row">
    <div className="col-12">
    <a href="/">
    <img src={TbhLogo} alt="Texas Ball Hockey Logo" id="tbh-logo" className="logo"></img>
    </a>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Jumbotron;