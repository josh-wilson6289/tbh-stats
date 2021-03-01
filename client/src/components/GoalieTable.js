import React from "react";
import GoalieRow from "./GoalieRow";

const GoalieTable = ({ tableData, season, handleSort }) => {

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
    <h1 className="ui center aligned header">{season}</h1>
  <table className="table table-bordered">
    <thead className="thead-light">
      <tr>
        <th scope="col" onClick={handleSort} columnvalue="lastName">Player</th>
        <th scope="col" onClick={handleSort} columnvalue="team">Team</th>
        <th scope="col" onClick={handleSort} columnvalue="gamesPlayed">Games Played</th>
        <th scope="col" onClick={handleSort} columnvalue="winPerc">Record</th>
        <th scope="col" onClick={handleSort} columnvalue="winPerc">Win Percentage</th>
        <th scope="col" onClick={handleSort} columnvalue="ga">Goals Against</th>
        <th scope="col" onClick={handleSort} columnvalue="gaa">GAA</th>
        <th scope="col" onClick={handleSort} columnvalue="so">Shutouts</th>
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