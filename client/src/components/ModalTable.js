import React from "react";

const ModalTable = ({ player }) => {
  console.log(player);
  console.log(player.seasons)

  const careerStats = player.seasons.map((season) => {
    return {
      key: season.season,
      season: season.season,
      team: season.team,
      gamesPlayed: season.gamesPlayed,
      goals: season.goals,
      assists: season.assists,
      points: season.points,
      pim: season.pim,
      ppg: season.ppg
    }
  })
  console.log(careerStats);

  const careerRow = careerStats.map((season) => {
    return (
      <tr>
      <td>{season.season}</td>
      <td>{season.team}</td>
      <td className="centered-text">{season.gamesPlayed}</td>
      <td className="centered-text">{season.goals}</td>
      <td className="centered-text">{season.assists}</td>
      <td className="centered-text">{season.points}</td>
      <td className="centered-text">{season.pim}</td>
      <td className="centered-text">{season.ppg}</td>
      </tr>
    )
  })
  console.log(careerRow);
  return (
    <table className="table modal-table">
    <thead>
      <tr>
        <th scope="col">Season</th>
        <th scope="col">Team</th>
        <th className="centered-text" scope="col">Games Played</th>
        <th className="centered-text" scope="col">Goals</th>
        <th className="centered-text" scope="col">Assists</th>
        <th className="centered-text" scope="col">Points</th>
        <th className="centered-text" scope="col">PIM</th>
        <th className="centered-text" scope="col">PPG</th>
      </tr>
    </thead>
    <tbody>
     {careerRow}
    </tbody>
  </table>
  );
};

export default ModalTable;