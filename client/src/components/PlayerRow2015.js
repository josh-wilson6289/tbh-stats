const PlayerRow2015 = ({ _id, rank, firstName, lastName, gamesPlayed, goals, assists, points, ppg }) => {

  return (
    <tr>
      <th scope="row">{rank}</th>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{gamesPlayed}</td>
      <td>{goals}</td>
      <td>{assists}</td>
      <td>{points}</td>
      <td>{ppg}</td>
    </tr>

  );
};

export default PlayerRow2015;