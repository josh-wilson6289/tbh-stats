const CareerPlayerRow = ({ _id, rank, firstName, lastName, gamesPlayed, team, goals, assists, points, pim, ppg }) => {

  return (
    <tr>
      <th scope="row">{rank}</th>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{gamesPlayed}</td>
      <td>{goals}</td>
      <td>{assists}</td>
      <td>{points}</td>
      <td>{pim}</td>
      <td>{ppg}</td>
    </tr>

  );
};

export default CareerPlayerRow;