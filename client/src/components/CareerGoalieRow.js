import React from "react";
import "../style.css";

const CareerGoalieRow = ({ _id, firstName, lastName, gamesPlayed, team, wins, losses, sol, winPerc, ga, gaa, so }) => {
  return (

    <tr>
      <th scope="row">{`${firstName} ${lastName}`}</th>
      <td>{gamesPlayed}</td>
      <td>{`${wins}-${losses}-${sol}`}</td>
      <td>{winPerc}</td>
      <td>{ga}</td>
      <td>{gaa}</td>
      <td>{so}</td>
    </tr>

  );
};

export default CareerGoalieRow;