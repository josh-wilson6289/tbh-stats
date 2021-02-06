import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerRow from "./PlayerRow";

const Table = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
      loadPlayers()
    },[]);


    function loadPlayers() {
      API.getPlayers()
        .then(players => setTableData(players.data)
        ) 
      .catch(err => console.log(err));
    }
 

  let renderedPlayers = tableData.map((player) => {
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