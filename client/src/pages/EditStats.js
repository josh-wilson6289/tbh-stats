import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/context";
import API from "../utils/API";
import AdminLogin from "../components/AdminLogin";
import AdminDropdown from "../components/AdminDropdown";
import "../style.css";

const EditStats = ({page, setPage}) => {

  const [editData, setEditData] = useState([]);
  const [season, setSeason] = useState("Q3 2021")
  
  const seasonOptions = ["2015", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", "Q1 2020", "Q1 2021", "Q2 2021", "Q3 2021"]
  const {user, isAuthenticated, loginWithPopup, logout} = useContext(AuthContext);


  useEffect(() => {
    setPage("editstats")
  }, [page]);

    const chooseSeason = (e) => {
      console.log("chooseSeason called");
    e.preventDefault();
    let season = (e.target.getAttribute("value"));
    setSeason(season)
    API.getPlayersBySeason(season)
      .then(players => {
        const allPlayers = players.data
        console.log(allPlayers)
        });
  }

  return (
    <div id="editstats">
    {isAuthenticated ? 
      <div>
      <div className="row">
      <h1 className="centered-text title">Edit Stats</h1>
      </div>
      <br></br>
      <div className="centered-text">
      <AdminDropdown cName="btn btn-primary dropdown-toggle" chooseSeason={chooseSeason} name="Choose Season" options={seasonOptions}/>
      </div>
      </div>
     : 
      <AdminLogin />
  }
  </div>
  );
};

export default EditStats;