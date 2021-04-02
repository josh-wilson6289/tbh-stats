import React from "react";

const ModalTable = ({ player }) => {

  const seasonStats = player.seasons.map((season) => {
    return {
      key: season.season,
      season: season.season,
      team: season.team,
      gamesPlayed: season.gamesPlayed,
      goals: season.goals,
      assists: season.assists,
      points: season.points,
      pim: season.pim,
      ppg: season.ppg,
      goalie: season.goalie
    }
  })

  console.log(seasonStats);
  const seasonsRow = seasonStats.map((season) => {
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

  return (
    <table className="table modal-table table-responsive-sm">
      <div className="bg"></div>
    <thead>
      <tr>
        <th scope="col">Season</th>
        <th scope="col">Team</th>
        <th className="centered-text" scope="col">GP</th>
        <th className="centered-text" scope="col">G</th>
        <th className="centered-text" scope="col">A</th>
        <th className="centered-text" scope="col">P</th>
        <th className="centered-text" scope="col">PIM</th>
        <th className="centered-text" scope="col">PPG</th>
      </tr>
    </thead>
    <tbody>
     {seasonsRow}
    </tbody>
  </table>
  );
};

export default ModalTable;