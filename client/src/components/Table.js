import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerTable from "./PlayerTable";
import GoalieTable from "./GoalieTable";
import TeamTable from "./TeamTable";

const Table = ({ table, season }) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("points");
  const [sortedTableData, setSortedTableData] = useState([]);
  const [sortDirection, setSortDirection] = useState("descending");
  
  useEffect(() => {
  // need to add cleanup function
  // calls api for any player that has participated in season
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
          goalie: player.seasons[0].goalie,
          wins: player.seasons[0].wins,
          losses: player.seasons[0].losses,
          sol: player.seasons[0].sol,
          winPerc: player.seasons[0].winPerc,
          ga: player.seasons[0].ga,
          gaa: player.seasons[0].gaa,
          so: player.seasons[0].so
        }
        
      })
      
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

}, [sortField, sortDirection])

let renderedTable;

if (table==="players") {
  renderedTable = <PlayerTable tableData={tableData} season={season} />;
}
else if (table==="goalies") {
  renderedTable = <GoalieTable tableData={tableData} season={season} />;
}
else {
  renderedTable = <TeamTable tableData={tableData} season={season} />;
}

  return (
    <div>
      {renderedTable}
    </div>
  );
};

export default Table;