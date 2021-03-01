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
  <h1 className="ui center aligned header">{season}</h1>
<table className="table table-bordered">
  <thead className="thead-light">
    <tr>
      <th scope="col" onClick={handleSort} columnvalue="name">Team</th>
      <th scope="col" onClick={handleSort} columnvalue="wins">Wins</th>
      <th scope="col" onClick={handleSort} columnvalue="losses">Losses</th>
      <th scope="col" onClick={handleSort} columnvalue="points">Points</th>
      <th scope="col" onClick={handleSort} columnvalue="goalsFor">Goals For</th>
      <th scope="col" onClick={handleSort} columnvalue="goalsAgainst">Goals Against</th>
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