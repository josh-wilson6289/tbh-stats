import React from "react";
import PlayerRow from "./PlayerRow";

const PlayerTable = ({ tableData, season, handleSort }) => {
  
  const filteredGoalies = tableData.filter(player => player.goalie === false);
  
  const renderedPlayers = filteredGoalies.map((player) => {

    return (
    <PlayerRow
      key={player._id}
      firstName={player.firstName}
      lastName={player.lastName}
      team={player.team}
      gamesPlayed={player.gamesPlayed}
      goals={player.goals}
      assists={player.assists}
      points={player.points}
      pim={player.pim}
      ppg={Math.round(100*player.ppg)/100}
    />
    );

  });

  return (
    <div>
      <h1 className="ui center aligned header">{season}</h1>
  
    <table className="ui celled table">
      <thead>
        <tr>
          <th onClick={handleSort} columnvalue="lastName">Player

          </th>
          <th onClick={handleSort} columnvalue="team">Team

          </th>
          <th onClick={handleSort} columnvalue="gamesPlayed">Games Played

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