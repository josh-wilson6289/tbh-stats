import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/context";
import API from "../utils/API";
import AdminLogin from "../components/AdminLogin";
import AdminDropdown from "../components/AdminDropdown";
import "../style.css";

const EditStats = ({page, setPage}) => {

  const [editData, setEditData] = useState([]);
  const [season, setSeason] = useState("")
  
  const seasonOptions = ["2015", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", "Q1 2020", "Q1 2021", "Q2 2021", "Q3 2021"]
  const {user, isAuthenticated, loginWithPopup, logout} = useContext(AuthContext);


  useEffect(() => {
    setPage("editstats")
  }, [page]);

    const chooseSeason = (e) => {
    e.preventDefault();
    let chosenSeason = (e.target.getAttribute("value"));
    API.getPlayersBySeason(chosenSeason)
      .then(players => {
        const allPlayers = players.data;
        formatPlayersBySeason(allPlayers, chosenSeason);
        });
  }

// Takes the data array and formats it for given season
function formatPlayersBySeason(allPlayers, season) {
  // filters through the seasons array, and returns only the season being viewed currently
  // that way, when rendering the playerRow the current season will always be at index [0]
  const filteredPlayersBySeason = allPlayers.map((player) => {
    return {...player, seasons: player.seasons.filter((seasons) => seasons.season === season)}
  })
  console.log(season);
  console.log(filteredPlayersBySeason);
  setEditData(filteredPlayersBySeason);
}

const playerList = editData.map((player) => {
  return (
      <li key={player._id}>{`${player.firstName} ${player.lastName}`}</li>
  );
});

  return (
    <div id="editstats">
    {isAuthenticated ? 
      <div>
      <div className="row">
      <h1 className="centered-text title">Edit Stats</h1>
      <h1 className="centered-text">{season}</h1>
      </div>
      <br></br>
      <div className="centered-text">
      <AdminDropdown cName="btn btn-primary dropdown-toggle" chooseSeason={chooseSeason} name="Choose Season" options={seasonOptions}/>
      </div>
      <br></br>

      <ul>
      {playerList}
      </ul>
      </div>
     : 
      <AdminLogin />
  }
  </div>
  );
};

export default EditStats;