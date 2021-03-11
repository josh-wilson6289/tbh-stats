import React from "react";
import TbhLogo from "../Images/tbh-logo.png";



const Jumbotron = () => {

  return (

    <div id="jumbo" className="jumbotron jumbotron-fluid">
  
    <img src={TbhLogo} alt="Texas Ball Hockey Logo" id="tbh-logo" className="logo"></img>

    </div>

  );
};

export default Jumbotron;