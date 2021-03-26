import React from "react";


const PlayerRow = ({ _id, rank, firstName, lastName, gamesPlayed, team, goals, assists, points, pim, ppg, launchModal }) => {

  const handleModal = () => {
    launchModal(_id)
  }

  return (
    <tr onClick={handleModal}>
      <th scope="row">{rank}</th>
      <td>{`${firstName} ${lastName}`}</td>
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

