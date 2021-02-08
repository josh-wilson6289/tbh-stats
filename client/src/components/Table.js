import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerRow from "./PlayerRow";

const Table = () => {

  const [tableData, setTableData] = useState([]);
  const [seasonQuery, setQuerySeason] = useState("q1 2021");

  useEffect(() => {
      loadPlayers()
    },[]);


    function loadPlayers() {
      // need to add a switch statement query the database given which tab
      // and season are checked
      
      API.getPlayers()
        .then(players => 
        // setTableData(players.data)
        players.data.map((player) => {
          player.seasons.map((season) => {
            if (season.season === seasonQuery) {
              console.log(season);
            }
          })
        })
        // players.data.seasons.map((season) => {
        //   if (season === seasonQuery) {
        //     console.log(season);
        //   }
        // })
        ) 
      .catch(err => console.log(err));
    }
 

  let renderedPlayers = tableData.map((player) => {
    return <PlayerRow
      key={player._id}
      name={player.name}
      team={player.seasons.season.team}
      goals={player.seasons.season.goals}
      assists={player.seasons.season.assists}
      points={player.seasons.season.points}
      pim={player.seasons.season.pim}
      ppg={player.seasons.season.ppg}
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