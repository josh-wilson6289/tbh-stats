import React from "react";
import PlayerRow from "./PlayerRow";

const PlayerTable = ({ tableData, season, handleSort }) => {
  
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
          <th onClick={handleSort} columnvalue="name">Player

          </th>
          <th onClick={handleSort} columnvalue="team">Team

          </th>
          <th onClick={handleSort} columnvalue="goals">Goals

          </th>
          <th onClick={handleSort} columnvalue="assists">Assists

          </th>
          <th onClick={handleSort} columnvalue="points">Points

          </th>
          <th onClick={handleSort} columnvalue="pim">PIM

          </th>
          <th onClick={handleSort} columnvalue="ppg">PPG

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