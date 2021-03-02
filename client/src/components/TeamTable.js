import React from "react";
import TeamRow from "./TeamRow";
import Caret from "./Caret";
import "../style.css";


const TeamTable = ({ season, tableData, handleSort, sortField, sortDirection }) => {

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
    <div className="container">
  <h1 className="ui center aligned header">{season}</h1>
  </div>
  <br></br>
<table className="table table-bordered">
  <thead className="thead-light">
    <tr>
      <th scope="col">Team <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="name" /></th>
      <th scope="col">Wins <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="wins" /></th>
      <th scope="col">Losses <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="losses" /></th>
      <th scope="col">Points <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="points" /></th>
      <th scope="col">Goals For <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="goalsFor" /></th>
      <th scope="col">Goals Against <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value="goalsAgainst" /></th>
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