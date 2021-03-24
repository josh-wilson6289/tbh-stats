import React from "react";
import "../style.css";

const GoalieRow = ({ _id, rank, firstName, lastName, gamesPlayed, team, wins, losses, sol, winPerc, ga, gaa, so }) => {
  return (

    <tr>
      <th scope="row">{rank}</th>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{team}</td>
      <td>{gamesPlayed}</td>
      <td>{`${wins}-${losses}-${sol}`}</td>
      <td>{winPerc}</td>
      <td>{ga}</td>
      <td>{gaa}</td>
      <td>{so}</td>
    </tr>

  );
};

export default GoalieRow;