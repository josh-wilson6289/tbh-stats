import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerRow from "./PlayerRow";
import PlayerTable from "./PlayerTable";

const Table = ({ table, season }) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("points");
  const [sortedTableData, setSortedTableData] = useState([]);
  const [sortDirection, setSortDirection] = useState("descending");

  useEffect(() => {
  // need to add cleanup function
  // calls api for any player that has participated in viewSeason
  API.getPlayers(season)
    .then(players => {
      const allPlayers = players.data
      // filters through the seasons array, and returns only the season being viewed currently
      // that way, when rendering the playerRow the current season will always be at index [0]
      const filteredPlayersBySeason = allPlayers.map((player) => {
        return {...player, seasons: player.seasons.filter((seasons) => seasons.season === season)}
      })

      
      // removes the seasons array, since we only need the current season in state
      const currentSeasonPlayers = filteredPlayersBySeason.map((player) => {
        return {
          _id: player._id,
          name: player.name,
          team: player.seasons[0].team,
          goals: player.seasons[0].goals,
          assists: player.seasons[0].assists,
          points: player.seasons[0].points,
          pim: player.seasons[0].pim,
          ppg: player.seasons[0].ppg,
          goalie: player.seasons[0].goalie
        }
        
      })

      // const filteredGoalies = currentSeasonPlayers.filter(player => player.goalie === false);

      // setTableData(filteredGoalies);
      setTableData(currentSeasonPlayers);

    });
}, [tableData]);


useEffect(() => {
  let sortedTableData = [...tableData];
  if (sortDirection === "ascending") {
  sortedTableData.sort((a, b) => {
    if (a[sortField] < b[sortField]) {
      return -1;
    }
    if (a[sortField] > b[sortField]) {
      return 1;
    }
      return 0;  
});
  }
    else {
      sortedTableData.sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return 1;
      }
        if (a[sortField] > b[sortField]) {
          return -1;
      }
        return 0;
    });
  }
  setSortedTableData(sortedTableData)

}, [sortField, sortDirection, tableData])

  return (
    <PlayerTable tableData={tableData}/>
  );
};

export default Table;