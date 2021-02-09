import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerRow from "./PlayerRow";

const Table = () => {

  const [tableData, setTableData] = useState([]);
  const [viewSeason, setViewSeason] = useState("Q1 2021");


useEffect(() => {

  // calls api for any player that has participated in viewSeason
  API.getPlayers(viewSeason)
    .then(players => {
      const allPlayers = players.data
      // filters through the seasons array, and returns only the season being viewed currently
      // that way, when rendering the playerRow the current season will always be at index [0]
      const filteredPlayers = allPlayers.map((player) => {
        return {...player, seasons: player.seasons.filter((seasons) => seasons.season === viewSeason)}
      })
      setTableData(filteredPlayers);

    })
}, [tableData]);

    const renderedPlayers = tableData.map((player) => {

      return (
      <PlayerRow
        key={player._id}
        name={player.name}
        team={player.seasons[0].team}
        goals={player.seasons[0].goals}
        assists={player.seasons[0].assists}
        points={player.seasons[0].points}
        pim={player.seasons[0].pim}
        ppg={player.seasons[0].ppg}
      />
      )
    });
  

  return (
    <div>
    <div className="ui container">
        <div className="current-season-header">
          {viewSeason}
        </div>
    </div>
    
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Player

          </th>
          <th>Team

          </th>
          <th>Goals

          </th>
          <th>Assists

          </th>
          <th>Points

          </th>
          <th>PIM

          </th>
          <th>PPG

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

export default Table;