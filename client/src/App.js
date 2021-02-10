import React from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import "./style.css";
 

export default () => {
  return (
    <div>
    <Jumbotron />
    <div className="ui container">
      <Navbar />
      <br></br>
      <Table />
      <br></br>
      <Pagination />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  </div>
  );
};