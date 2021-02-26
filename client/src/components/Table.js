import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerTable from "./PlayerTable";
import GoalieTable from "./GoalieTable";
import TeamTable from "./TeamTable";

const Table = ({ table, season }) => {

  const [playerData, setPlayerData] = useState([]);
  const [sortedPlayerData, setSortedPlayerData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [sortedTeamData, setSortedTeamData] = useState([]);
  const [sortField, setSortField] = useState("points");
  const [sortDirection, setSortDirection] = useState("descending");


  useEffect(() => {
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
          firstName: player.firstName,
          lastName: player.lastName,
          team: player.seasons[0].team,
          gamesPlayed: player.seasons[0].gamesPlayed,
          goals: player.seasons[0].goals,
          assists: player.seasons[0].assists,
          points: player.seasons[0].goals + player.seasons[0].assists,
          pim: player.seasons[0].pim,
          ppg: (player.seasons[0].goals + player.seasons[0].assists) / player.seasons[0].gamesPlayed,
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
      setPlayerData(currentSeasonPlayers);
    });
}, [season]);


useEffect(() => {
  API.getTeams(season)
    .then(teams => {
      setTeamData(teams.data);
    })
}, [season])

const handleSort = (e) => {
  e.preventDefault();
  const field = e.target.getAttribute("columnvalue");
  console.log(field);
  if (sortDirection === "descending" && field === sortField) {
    setSortDirection("ascending");
  }
 else if (sortDirection === "ascending" && field === sortField) {
   setSortDirection("descending");
 }
 else {
    setSortField(field)
 }
};

// sorts players
useEffect(() => {
  let sortedPlayerData = [...playerData];  

  if (sortDirection === "ascending") {
  sortedPlayerData.sort((a, b) => {

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
      sortedPlayerData.sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return 1;
      }
        if (a[sortField] > b[sortField]) {
          return -1;
      }
        return 0;
    });
  }
  console.log(sortedPlayerData);
  setSortedPlayerData(sortedPlayerData)
  
}, [sortField, sortDirection, playerData])

// sorts teams
// useEffect(() => {
//   let sortedTeamData = [...teamData];  
//   if (sortDirection === "ascending") {
//   sortedTeamData.sort((a, b) => {
//     if (a[sortField] < b[sortField]) {
//       return -1;
//     }
//     if (a[sortField] > b[sortField]) {
//       return 1;
//     }
//       return 0;  
// });
//   }
//     else {
//       sortedTeamData.sort((a, b) => {
//         if (a[sortField] < b[sortField]) {
//           return 1;
//       }
//         if (a[sortField] > b[sortField]) {
//           return -1;
//       }
//         return 0;
//     });
//   }
//   setSortedTeamData(sortedTeamData)
  
// }, [sortField, sortDirection, teamData])

let renderedTable;

if (table==="players") {
  renderedTable = <PlayerTable tableData={sortedPlayerData} season={season} handleSort={handleSort}/>;
}
else if (table==="goalies") {
  renderedTable = <GoalieTable tableData={sortedPlayerData} season={season} handleSort={handleSort} />;
}
else {
  renderedTable = <TeamTable tableData={sortedTeamData} setSortField={setSortField} season={season} handleSort={handleSort} />;
}

  return (
    <div>
      {renderedTable}
    </div>
  );
};

export default Table;