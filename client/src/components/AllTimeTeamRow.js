import React from "react";


const AllTimeTeamRow = ({ _id, rank, name, season, record, points, goalsFor, goalsAgainst, goalDiff}) => {
  
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
  <td>{season}</td>
  <td>{record}</td>
  <td>{points}</td>
  <td>{goalsFor}</td>
  <td>{goalsAgainst}</td>
  <td>{goalDiff > 0 ? `+${goalDiff}` : goalDiff}</td>
</tr>

  );
};

export default AllTimeTeamRow;