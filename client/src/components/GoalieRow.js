import React from "react";
import "../style.css";

const GoalieRow = ({ _id, name, team, wins, losses, sol, winPerc, ga, gaa, so }) => {
  return (
    <tr>
    <td data-label="Player">{name}</td>
    <td data-label="Team">{team}</td>
    <td data-label="Record">{`${wins}-${losses}-${sol}`}</td>
    <td data-label="Win Percentage">{winPerc}</td>
    <td data-label="Goals Against">{ga}</td>
    <td data-label="GAA">{gaa}</td>
    <td data-label="Shut Outs">{so}</td>
  </tr>
  );
};

export default GoalieRow;