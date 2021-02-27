import React from "react";
import GoalieRow from "./GoalieRow";

const GoalieTable = ({ tableData, season, handleSort }) => {

 const filteredGoalies = tableData.filter(player => player.goalie === true);
  
  
  const renderedPlayers = filteredGoalies.map((player) => {

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
    <div className="ui container">
      <h1 className="ui center aligned header">{season}</h1>
    </div>
    <table className="ui celled table">
      <thead>
        <tr>
          <th onClick={handleSort} columnvalue="lastName">Player

          </th>
          <th onClick={handleSort} columnvalue="team">Team

          </th>
          <th onClick={handleSort} columnvalue="gamesPlayed">Games Played

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