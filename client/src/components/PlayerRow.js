import React from "react";


const PlayerRow = ({ _id, name, team, goals, assists, points, pim, ppg }) => {
  return (
    <tr>
    <td data-label="Player">{name}</td>
    <td data-label="Team">{team}</td>
    <td data-label="Goals">{goals}</td>
    <td data-label="Assists">{assists}</td>
    <td data-label="Points">{points}</td>
    <td data-label="PIM">{pim}</td>
    <td data-label="PPG">{ppg}</td>
  </tr>
  );
};

export default PlayerRow;