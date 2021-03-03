import React from "react";
import TbhLogo from "../Images/tbh-logo.png";

const Jumbotron = () => {

  return (
    <div className="jumbo">
    <img src={TbhLogo} alt="Texas Ball Hockey Logo" className="logo"></img>
    </div>
  );
};

export default Jumbotron;