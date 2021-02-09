import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerRow from "./PlayerRow";

const Table = () => {

  const [tableData, setTableData] = useState([]);
  const [viewSeason, setViewSeason] = useState("q1 2021");


useEffect(() => {

  API.getPlayers(viewSeason)
    .then(players => {
      const allPlayers = players.data
      const filteredPlayers = allPlayers.map((player) => {
        return {...player, seasons: player.seasons.filter((seasons) => seasons.season === viewSeason)}
      })
      setTableData(filteredPlayers);

        // player.seasons.filter((season) => {
        //   // if (season===viewSeason) {
        //     return season === viewSeason;
          // return {
            // _id: player._id,
            // name: player.name,
            // team: player.seasons.season.team,
            // goals: player.seasons.season.goals,
            // assists: player.seasons.season.assists,
            // points: player.seasons.season.points,
            // pim: player.seasons.season.pim,
            // ppg: player.seasons.season.ppg
          // }
        // }
    //     })
    //   })
    })
}, [tableData]);

    // function handleSeasons(allPlayers) {
    //   // filter out non-current seasons and set tableData state.
    //   // may have an issue with feedback loop, since tableData will keep getting changed?
    // }

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
  );
};

export default Table;