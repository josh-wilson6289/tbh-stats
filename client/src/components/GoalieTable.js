import React from "react";
import GoalieRow from "./GoalieRow";

const GoalieTable = ({ tableData, season, handleSort }) => {

 const filteredGoalies = tableData.filter(player => player.goalie === true);
  
  
  const renderedPlayers = filteredGoalies.map((player) => {

      return (
      <GoalieRow
        key={player._id}
        name={player.name}
        team={player.team}
        wins={player.wins}
        losses={player.losses}
        sol={player.sol}
        winPerc={player.winPerc}
        ga={player.ga}
        gaa={player.gaa}
        so={player.so}
      />
      )
    });


  return (
    <div>
    <div className="ui container">
      <h1 className="ui center aligned header">{season}</h1>
    </div>
    <table className="ui celled table">
      <thead>
        <tr>
          <th onClick={handleSort} columnvalue="name">Player

          </th>
          <th onClick={handleSort} columnvalue="team">Team

          </th>
          <th onClick={handleSort} columnvalue="winPerc">Record

          </th>
          <th onClick={handleSort} columnvalue="winPerc">Win Percentage

          </th>
          <th onClick={handleSort} columnvalue="ga">Goals Against

          </th>
          <th onClick={handleSort} columnvalue="gaa">GAA

          </th>
          <th onClick={handleSort} columnvalue="so">Shut Outs

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

export default GoalieTable;