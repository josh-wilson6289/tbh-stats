import React from "react";


const TeamRow = ({ _id, name, wins, losses, points, goalsFor, goalsAgainst }) => {
  return (
  <tr>
  <th scope="row">{name}</th>
  <td>{wins}</td>
  <td>{losses}</td>
  <td>{points}</td>
  <td>{goalsFor}</td>
  <td>{goalsAgainst}</td>
</tr>

  );
};

export default TeamRow;