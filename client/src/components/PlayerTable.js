import React from "react";
import PlayerRow from "./PlayerRow";

const PlayerTable = ({tableData, season}) => {
  
  const filteredGoalies = tableData.filter(player => player.goalie === false);
  
  const renderedPlayers = filteredGoalies.map((player) => {

    return (
    <PlayerRow
      key={player._id}
      name={player.name}
      team={player.team}
      goals={player.goals}
      assists={player.assists}
      points={player.points}
      pim={player.pim}
      ppg={player.ppg}
    />
    );

  });

  return (
    <div>
      <h1 className="ui center aligned header">{season}</h1>
  
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Player

          </th>
          <th >Team

          </th>
          <th >Goals

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

export default PlayerTable;