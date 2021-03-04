import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import API from "../utils/API";

const Player = ({ season, page }) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentSeason, setCurrentSeason] = useState("")

  useEffect(() => {
    if (season === "Career") {
      loadPlayerCareerStats();
    }
    else {
      loadPlayerStatsBySeason(season);
    }
  }, [season]);


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
        
        // filter out goalies
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
        setCurrentSeason(season);
      });
  }

  function loadPlayerCareerStats() {

    API.getAllPlayers()
      .then(players => {
          const removeGoalieSeasons = players.data.map((player) => {
            return {...player, seasons: player.seasons.filter((season) => season.goalie === false)}
          }); 
          
          const removeGoalies = removeGoalieSeasons.filter((player) => player.seasons.length !== 0);
            
          const combineSeasons = removeGoalies.map((player) => {
            return {...player, seasons: [addObjValues(player.seasons)]}  
        })

        const playerCareer = combineSeasons.map((player) => {
          return {
            _id: player.id,
            firstName: player.firstName,
            lastName: player.lastName,
            gamesPlayed: player.seasons[0].gamesPlayed,
            goals: player.seasons[0].goals,
            assists: player.seasons[0].assists,
            points: player.seasons[0].goals + player.seasons[0].assists,
            pim: player.seasons[0].pim,
            ppg: (player.seasons[0].goals + player.seasons[0].assists) / player.seasons[0].gamesPlayed
          }
        })
        setTableData(playerCareer);
        setSortField("points");
        setSortDirection("descending");
        setCurrentSeason(season)
      });
  }
  
  function addObjValues(data) {
    const result = {};

    data.forEach(season => {
      for (let [key, value] of Object.entries(season)) {
        if (result[key]) {
          result[key]+= value;
        }
        else {
          result[key] = value;
        }
      }
    });
    return result;
  };

  return (
    <Table
      tableData={tableData} 
      setTableData={setTableData}
      season={currentSeason}
      page={page}
      sortField={sortField}
      setSortField={setSortField}
      sortDirection={sortDirection}
      setSortDirection={setSortDirection}
    />
  );
};

export default Player;