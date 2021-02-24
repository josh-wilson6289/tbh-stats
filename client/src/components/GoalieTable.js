import React, { useState, useEffect } from "react";
import API from "../utils/API";
import GoalieRow from "./GoalieRow";

const GoalieTable = () => {

  const [tableData, setTableData] = useState([]);
  const [viewSeason, setViewSeason] = useState("Q1 2021");
  const [sortField, setSortField] = useState("wins");
  const [sortedTableData, setSortedTableData] = useState([]);
  const [sortDirection, setSortDirection] = useState("descending");

  useEffect(() => {
  // need to add cleanup function

  // calls api for any player that has participated in viewSeason
  API.getPlayers(viewSeason)
    .then(players => {
      const allPlayers = players.data
      // filters through the seasons array, and returns only the season being viewed currently
      // that way, when rendering the playerRow the current season will always be at index [0]
      const filteredPlayersBySeason = allPlayers.map((player) => {
        return {...player, seasons: player.seasons.filter((seasons) => seasons.season === viewSeason)}
      })

      
      // removes the seasons array, since we only need the current season in state
      const currentSeasonPlayers = filteredPlayersBySeason.map((player) => {
        return {
          _id: player._id,
          name: player.name,
          team: player.seasons[0].team,
          wins: player.seasons[0].wins,
          losses: player.seasons[0].losses,
          sol: player.seasons[0].sol,
          winPerc: player.seasons[0].winPerc,
          ga: player.seasons[0].ga,
          gaa: player.seasons[0].gaa,
          so: player.seasons[0].so,
          goalie: player.seasons[0].goalie
        }
        
      })

      const filteredGoalies = currentSeasonPlayers.filter(player => player.goalie === true);

      setTableData(filteredGoalies);
      return () => {
        console.log("cleanup")
      };
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


    const renderedPlayers = sortedTableData.map((player) => {

      return (
      <GoalieRow
        key={player._id}
        name={player.name}
        team={player.team}
        wins={player.wins}
        losses={player.losses}
        sol={player.sol}
        winPerc={player.winPerc}
        ga={player.ga}
        gaa={player.gaa}
        so={player.so}
      />
      )
    });
  
  return (
    <div>
    <div className="ui container">
      <h1 className="ui center aligned header">{viewSeason}</h1>
    </div>
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Player

          </th>
          <th >Team

          </th>
          <th>Record

          </th>
          <th>Win Percentage

          </th>
          <th>Goals Against

          </th>
          <th>GAA

          </th>
          <th>Shut Outs

          </th>
        </tr>
      </thead>
      
      <tbody>
        {renderedPlayers}
      </tbody>

    </table>
   </div>
  );
};

export default GoalieTable;