import React from "react";


const TeamRow = ({ _id, name, wins, losses, points, goalsFor, goalsAgainst }) => {
  return (
    <tr>
    <td data-label="Team">{name}</td>
    <td data-label="Wins">{wins}</td>
    <td data-label="Losses">{losses}</td>
    <td data-label="Points">{points}</td>
    <td data-label="Goals For">{goalsFor}</td>
    <td data-label="Goals Against">{goalsAgainst}</td>
  </tr>
  );
};

export default TeamRow;