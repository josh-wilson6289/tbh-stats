import React from "react";
import TbhLogo from "../Images/tbh-logo.png";

const Jumbotron = () => {

  return (
    <div className="ui container">
    <div className="jumbotron">
    <img src={TbhLogo} alt="Texas Ball Hockey Logo" className="logo"></img>
    </div>
    </div>
  );
};

export default Jumbotron;