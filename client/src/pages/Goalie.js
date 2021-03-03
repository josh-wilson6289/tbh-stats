import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import API from "../utils/API";

const Goalie = ({ season, page }) => {

  const [tableData, setTableData] = useState([]);
 
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
        
        const goaliesBySeason = filteredPlayersBySeason.filter(player => player.seasons[0].goalie === true);

        // removes the seasons array, sets goalie data
        const currentSeasonGoalies = goaliesBySeason.map((player) => {
          return {
            _id: player._id,
            firstName: player.firstName,
            lastName: player.lastName,
            team: player.seasons[0].team,
            gamesPlayed: player.seasons[0].gamesPlayed,
            goalie: player.seasons[0].goalie,
            wins: player.seasons[0].wins,
            losses: player.seasons[0].losses,
            sol: player.seasons[0].sol,
            winPerc: (player.seasons[0].wins / player.seasons[0].gamesPlayed) * 100,
            ga: player.seasons[0].ga,
            gaa: player.seasons[0].ga / player.seasons[0].gamesPlayed,
            so: player.seasons[0].so
          }
        })
        // sets table data state
        setTableData(currentSeasonGoalies);
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
    />
  );
};

export default Goalie;