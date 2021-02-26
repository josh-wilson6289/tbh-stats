import React from "react";
import TeamRow from "./TeamRow";
import "../style.css";

const TeamTable = ({ season, tableData, setSortField, handleSort }) => {

const renderedTeams = tableData.map((team) => {
  return (
    <TeamRow
    key={team._id}
    name={team.name}
    wins={team.wins}
    losses={team.losses}
    points={team.points}
    goalsFor={team.goalsFor}
    goalsAgainst={team.goalsAgainst}
  />
  );
});
    
  
  return (
    <div>
    <div className="ui container">
      <h1 className="ui center aligned header">{season}</h1>
    </div>
    <table className="ui celled table">
      <thead>
        <tr>
          <th onClick={handleSort} columnvalue="team">Team

          </th>
          <th onClick={handleSort} columnvalue="wins">Wins

          </th>
          <th onClick={handleSort} columnvalue="losses">Losses

          </th>
          <th onClick={handleSort} columnvalue="points">Points

          </th>
          <th onClick={handleSort} columnvalue="goalsFor">Goals For

          </th>
          <th onClick={handleSort} columnvalue="goalsAgainst">Goals Against

          </th>
          
        </tr>
      </thead>
      
      <tbody>
        {renderedTeams}
      </tbody>

    </table>
   </div>
  );
};

export default TeamTable;