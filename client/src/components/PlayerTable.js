import React from "react";
import PlayerRow from "./PlayerRow";

const PlayerTable = ({ tableData, season, handleSort }) => {
  
  const renderedPlayers = tableData.map((player) => {

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
  <table className="table table-bordered">
    <thead className="thead-light">
      <tr>
        <th scope="col" onClick={handleSort} columnvalue="lastName">Player</th>
        <th scope="col" onClick={handleSort} columnvalue="team">Team</th>
        <th scope="col" onClick={handleSort} columnvalue="gamesPlayed">Games Played</th>
        <th scope="col" onClick={handleSort} columnvalue="goals">Goals</th>
        <th scope="col" onClick={handleSort} columnvalue="assists">Assists</th>
        <th scope="col" onClick={handleSort} columnvalue="points">Points</th>
        <th scope="col" onClick={handleSort} columnvalue="pim">PIM</th>
        <th scope="col" onClick={handleSort} columnvalue="ppg">PPG</th>
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