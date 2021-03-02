import React from "react";
import GoalieRow from "./GoalieRow";
import Caret from "./Caret";

const GoalieTable = ({ tableData, season, handleSort, sortField, sortDirection }) => {

  const renderedPlayers = tableData.map((player) => {

      return (
      <GoalieRow
        key={player._id}
        firstName={player.firstName}
        lastName={player.lastName}
        team={player.team}
        gamesPlayed={player.gamesPlayed}
        wins={player.wins}
        losses={player.losses}
        sol={player.sol}
        winPerc={Math.round(100*player.winPerc)/100 + "%"}
        ga={player.ga}
        gaa={Math.round(100*player.gaa)/100}
        so={player.so}
      />
      )
    });


  return (
  <div>
    <div className="container">
    <h1 className="ui center aligned header">{season}</h1>
    </div>
    <br></br>
  <table className="table table-bordered">
    <thead className="thead-light">
      <tr>
        <th scope="col">Player <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="lastName" /></th>
        <th scope="col">Team <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="team"/></th>
        <th scope="col">Games Played <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="gamesPlayed" /></th>
        <th scope="col">Record <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="wins" /></th>
        <th scope="col">Win Percentage <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="winPerc" /></th>
        <th scope="col">Goals Against <Caret  handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="ga" /></th>
        <th scope="col">GAA <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="gaa" /></th>
        <th scope="col">Shutouts <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="so" /></th>
      </tr>
    </thead>
      
      <tbody>
        {renderedPlayers}
      </tbody>

    </table>
   </div>
  );
};

export default GoalieTable;