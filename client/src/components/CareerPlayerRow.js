const PlayerRow = ({ _id, firstName, lastName, gamesPlayed, team, goals, assists, points, pim, ppg }) => {

  return (
    <tr>
      <th scope="row">{`${firstName} ${lastName}`}</th>
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