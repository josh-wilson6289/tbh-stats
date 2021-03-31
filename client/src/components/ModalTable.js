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
      <th scope="row">{season.season}</th>
      <td>{season.team}</td>
      <td>{season.gamesPlayed}</td>
      <td>{season.goals}</td>
      <td>{season.assists}</td>
      <td>{season.points}</td>
      <td>{season.pim}</td>
      <td>{season.ppg}</td>
      </tr>
    )
  })
  console.log(careerRow);
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Season</th>
        <th scope="col">Team</th>
        <th scope="col">Games Played</th>
        <th scope="col">Goals</th>
        <th scope="col">Assists</th>
        <th scope="col">Points</th>
        <th scope="col">PIM</th>
        <th scope="col">PPG</th>
      </tr>
    </thead>
    <tbody>
     {careerRow}
    </tbody>
  </table>
  );
};

export default ModalTable;