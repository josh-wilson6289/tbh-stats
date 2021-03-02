import React from "react";
import PlayerRow from "./PlayerRow";
import "../style.css";
import Caret from "./Caret";

const PlayerTable = ({ tableData, season, handleSort, sortDirection, sortField }) => {
  
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
      <div className="container">
        <br></br>
    <h1 className="ui center aligned header">{season}</h1>
    </div>
  <table className="table table-bordered">
    <thead className="thead-light">
      <tr>
        <th scope="col">Player <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="lastName"/></th>
        <th scope="col">Team <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="team" /></th>
        <th scope="col">Games Played <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="gamesPlayed" /></th>
        <th scope="col">Goals <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="goals" /></th>
        <th scope="col">Assists <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="assists" /></th>
        <th scope="col">Points <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="points" /></th>
        <th scope="col">PIM <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="pim" /></th>
        <th scope="col">PPG <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="ppg" /></th>
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