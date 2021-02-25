import React from "react";
import GoalieRow from "./GoalieRow";

const GoalieTable = ({tableData, season}) => {

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
          <th>Player

          </th>
          <th >Team

          </th>
          <th>Record

          </th>
          <th>Win Percentage

          </th>
          <th>Goals Against

          </th>
          <th>GAA

          </th>
          <th>Shut Outs

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