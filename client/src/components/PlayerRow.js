import React from "react";


const PlayerRow = ({ _id, firstName, lastName, gamesPlayed, team, goals, assists, points, pim, ppg }) => {
  return (

    <tr>
      <th scope="row">{`${firstName} ${lastName}`}</th>
      <td>{team}</td>
      <td>{gamesPlayed}</td>
      <td>{goals}</td>
      <td>{assists}</td>
      <td>{points}</td>
      <td>{pim}</td>
      <td>{ppg}</td>
    </tr>


  );
};

export default PlayerRow;

