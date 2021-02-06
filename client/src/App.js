import React from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Jumbotron from "./components/Jumbotron";
import "./style.css";
 

export default () => {
  return (
    <div>
    <Jumbotron />
    <div className="ui container">
      <Navbar />
      <br></br>
      <Table />
    </div>
  </div>
  );
};