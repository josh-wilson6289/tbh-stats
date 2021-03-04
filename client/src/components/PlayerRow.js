import React from "react";


const PlayerRow = ({ _id, firstName, lastName, gamesPlayed, team, goals, assists, points, pim, ppg, season }) => {

  const checkSeason = (season) => {
    if (season !=="Career") {
      return <td>{team}</td>
    }
    else {
      return null;
    }
  }

  return (
    <tr>
      <th scope="row">{`${firstName} ${lastName}`}</th>
      {checkSeason}
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

