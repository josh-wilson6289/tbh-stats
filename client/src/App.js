import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Table from "./components/Table";
import "./style.css";

export default () => {

const [table, setTable] = useState("players");
const [season, setSeason] = useState("Q1 2021");
const [searchTerm, setSearchTerm] = useState("");

  // this will check for the player, season, or team tab for a particular season
// this function is passed down as props to the tabledisplay, which will call 
// the loadplayers() function with the correct params
const handleTable = (e) => {
e.preventDefault();
setTable(e.target.getAttribute("tablevalue"));
}  

const handleSeason = (e) => {
  e.preventDefault();
  setSeason(e.target.getAttribute("seasonvalue"));
}
  return (
    <div> 
    <Jumbotron />
    <div className="container-fluid">
      <Navbar 
        handleTable={handleTable}
        handleSeason={handleSeason}/>
      <br></br>
      <Table table={table} season={season} />
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  
      <Footer />
  </div>
  );
};