import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerTable from "./PlayerTable";
import GoalieTable from "./GoalieTable";
import TeamTable from "./TeamTable";

const Table = ({ table, season }) => {

  const [playerData, setPlayerData] = useState([]);
  const [sortedPlayerData, setSortedPlayerData] = useState([]);
  const [goalieData, setGoalieData] = useState([]);
  const [sortedGoalieData, setSortedGoalieData] = useState([]);
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
      
      // sets up goalie and player arrays
      const goaliesBySeason = filteredPlayersBySeason.filter(player => player.seasons[0].goalie === true);
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
      setPlayerData(currentSeasonPlayers);

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
      setGoalieData(currentSeasonGoalies);
    });

}, [season]);

// loads teams from current season and sets state
useEffect(() => {
  API.getTeams(season)
    .then(teams => {
      const allTeams = teams.data;
      setTeamData(allTeams);
    })
}, [season])

const handleSort = (e) => {
  e.preventDefault();
  const field = e.target.getAttribute("value");

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

// sorts players, goalies, and teams
useEffect(() => {

  let sortedPlayerData = [...playerData];  
  let sortedTeamData = [...teamData];
  let sortedGoalieData = [...goalieData]

  if (sortDirection === "ascending") {
  sortedPlayerData.sort((a, b) => {
    if (a[sortField] < b[sortField]) {
      return -1;
    }
    if (a[sortField] > b[sortField]) {
      return 1;
    }
    else {
      return 0;
    }
});
sortedTeamData.sort((a,b) => {
    if (a[sortField] < b[sortField]) {
      return -1;
    }
    if (a[sortField] > b[sortField]) {
      return 1;
    }
    else {
      return 0;
    }
});  
sortedGoalieData.sort((a,b) => {
  if (a[sortField] < b[sortField]) {
    return -1;
  }
  if (a[sortField] > b[sortField]) {
    return 1;
  }
  else {
    return 0;
  }
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
      else {
        return 0;
      }
    });
    
    sortedTeamData.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return 1;
      }
      if (a[sortField] > b[sortField]) {
        return -1;
      }
      else {
        return 0;
      }
    });

    sortedGoalieData.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return 1;
      }
      if (a[sortField] > b[sortField]) {
        return -1;
      }
      else {
        return 0;
      }
    });
  }

  setSortedPlayerData(sortedPlayerData);
  setSortedTeamData(sortedTeamData);
  setSortedGoalieData(sortedGoalieData);
  
}, [sortField, sortDirection, playerData, teamData, goalieData])

let renderedTable;

if (table==="players") {
  renderedTable = <PlayerTable tableData={sortedPlayerData} season={season} handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} />;
}
else if (table==="goalies") {
  renderedTable = <GoalieTable tableData={sortedGoalieData} season={season} handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} />;
}
else {
  renderedTable = <TeamTable tableData={sortedTeamData} season={season} handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} />;
}

  return (
    <div>
      {renderedTable}
    </div>
  );
};

export default Table;