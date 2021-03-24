import React from "react";


const TeamRow = ({ _id, name, rank, record, points, goalsFor, goalsAgainst, goalDiff}) => {
  
  const checkGoalDiff = (goalDiff) => {
    if (goalDiff > 0) {
      return "+";
    }
    else {
      return null;
    }
  } 
  checkGoalDiff(goalDiff);
  return (
  <tr>
  <th scope="row">{rank}</th>
  <td>{name}</td>
  <td>{record}</td>
  <td>{points}</td>
  <td>{goalsFor}</td>
  <td>{goalsAgainst}</td>
  <td>{goalDiff > 0 ? `+${goalDiff}` : goalDiff}</td>
</tr>

  );
};

export default TeamRow;