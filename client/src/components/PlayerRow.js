import React from "react";


const PlayerRow = ({ _id, firstName, lastName, gamesPlayed, team, goals, assists, points, pim, ppg }) => {
  return (
    <tr>
    <td data-label="Player">{`${firstName} ${lastName}`}</td>
    <td data-label="Team">{team}</td>
    <td data-label="Games Played">{gamesPlayed}</td>
    <td data-label="Goals">{goals}</td>
    <td data-label="Assists">{assists}</td>
    <td data-label="Points">{points}</td>
    <td data-label="PIM">{pim}</td>
    <td data-label="PPG">{ppg}</td>
  </tr>
  );
};

export default PlayerRow;