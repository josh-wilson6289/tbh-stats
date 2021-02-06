import React, { useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";

// generic player array
const players = [
  {
    name: "Lemar O",
    team: "Grey",
    goals: 2,
    assists: 5,
    points: 7,
    pim: 0,
    ppg: 2.33
  },
  {
    name: "Adam J",
    team: "Grey",
    goals: 0,
    assists: 1,
    points: 1,
    pim: 0,
    ppg: 0.33
  },
  { 
    name: "Mike B",
    team: "Orange",
    goals: 4,
    assists: 1,
    points: 5,
    pim: 0,
    ppg: 1.67
  }
]

const Table = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {

    setTableData(players);
    
  },[tableData]);

  let renderedPlayers = players.map((player) => {
    return <PlayerRow
      key={player.name}
      name={player.name}
      team={player.team}
      goals={player.goals}
      assists={player.assists}
      points={player.points}
      pim={player.pim}
      ppg={player.ppg}
    />
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