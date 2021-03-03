import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import API from "../utils/API";


const Player = ({ season, page }) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");

  function loadPlayerStatsBySeason(season) {
      // calls api for any player that has participated in season
      API.getPlayersBySeason(season)
      .then(players => {
        const allPlayers = players.data
        // filters through the seasons array, and returns only the season being viewed currently
        // that way, when rendering the playerRow the current season will always be at index [0]
        const filteredPlayersBySeason = allPlayers.map((player) => {
          return {...player, seasons: player.seasons.filter((seasons) => seasons.season === season)}
        })
        
        // sets up goalie and player arrays
        // const goaliesBySeason = filteredPlayersBySeason.filter(player => player.seasons[0].goalie === true);
        const playersBySeason = filteredPlayersBySeason.filter(player => player.seasons[0].goalie === false);
  
        // removes the seasons array, sets player data 
        const currentSeasonPlayers = playersBySeason.map((player) => {
          return {
            _id: player._id,
            firstName: player.firstName,
            lastName: player.lastName,
            team: player.seasons[0].team,
            gamesPlayed: player.seasons[0].gamesPlayed,
            goals: player.seasons[0].goals,
            assists: player.seasons[0].assists,
            points: player.seasons[0].goals + player.seasons[0].assists,
            pim: player.seasons[0].pim,
            ppg: (player.seasons[0].goals + player.seasons[0].assists) / player.seasons[0].gamesPlayed
          }
        })
        // sets table data state
        setTableData(currentSeasonPlayers);
        setSortField("points");
        setSortDirection("descending");
  
      });
  }

  function loadPlayerCareerStats() {
    API.getAllPlayers()
      .then(players=> {
        const allPlayers = players.data;
        console.log(allPlayers);
      })
  }
  
  useEffect(() => {
    if (season === "career") {
      loadPlayerCareerStats();
    }
    else {
      loadPlayerStatsBySeason(season);
    }
  }, [season]);

  return (
    <Table
      tableData={tableData} 
      setTableData={setTableData}
      season={season}
      page={page}
      sortField={sortField}
      setSortField={setSortField}
      sortDirection={sortDirection}
      setSortDirection={setSortDirection}
    />
  );
};

export default Player;