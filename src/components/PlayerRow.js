import React from "react";


const PlayerRow = (props) => {
  return (
    <tr>
    <td data-label="Player">{props.name}</td>
    <td data-label="Team">{props.team}</td>
    <td data-label="Goals">{props.goals}</td>
    <td data-label="Assists">{props.assists}</td>
    <td data-label="Points">{props.points}</td>
    <td data-label="PIM">{props.pim}</td>
    <td data-label="PPG">{props.ppg}</td>
  </tr>
  );
};

export default PlayerRow;