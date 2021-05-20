import React from "react";
import "../style.css";

const ModalTable = ({ player }) => {
  
  function addObjValues(data) {
    const result = {};

    data.forEach(season => {
      for (let [key, value] of Object.entries(season)) {
        if (result[key]) {
          result[key]+= value;
        }
        else {
          result[key] = value;
        }
      }
    });
    return result;
  };

  const separatePlayerStats = player.seasons.filter((season) => season.goalie === false);
  const separateGoalieStats = player.seasons.filter((season) => season.goalie === true);
  
  const combinePlayerSeasons = addObjValues(separatePlayerStats);
  const combineGoalieSeasons = addObjValues(separateGoalieStats);

  const playerSeasonStats = player.seasons.map((season) => {
    return {
      key: season.season,
      season: season.season,
      team: season.team,
      gamesPlayed: season.gamesPlayed,
      goals: season.goals,
      assists: season.assists,
      points: season.points,
      pim: season.pim,
      ppg: (season.points / season.gamesPlayed).toFixed(2),
      goalie: season.goalie,
      wins: season.wins,
      losses: season.losses,
      sol: season.sol,
      winPerc: ((season.wins / season.gamesPlayed) * 100).toFixed(2) + "%",
      ga: season.ga,
      gaa: (season.ga / season.gamesPlayed).toFixed(2),
      so: season.so
    }
  })
  
  const filterGoalies = playerSeasonStats.filter((season) => season.goalie === false);
  const filterPlayers = playerSeasonStats.filter((season) => season.goalie === true);


  const playerSeasonsRow = filterGoalies.map((season) => {
    return (
      <tr key={season.season}>
      <td>{season.season}</td>
      <td>{!season.team ? "N/A" : season.team}</td>
      <td className="centered-text">{season.gamesPlayed}</td>
      <td className="centered-text">{season.goals}</td>
      <td className="centered-text">{season.assists}</td>
      <td className="centered-text">{season.points}</td>
      <td className="centered-text">{season.pim}</td>
      <td className="centered-text">{season.ppg}</td>
      </tr>
    )
  })

  

  const goalieSeasonsRow = filterPlayers.map((season) => {
    return (
    <tr key={season.season}>
      <td>{season.season}</td>
      <td>{season.team}</td>
      <td className="centered-text">{season.gamesPlayed}</td>
      <td className="centered-text">{`${season.wins}-${season.losses}-${season.sol}`}</td>
      <td className="centered-text">{season.winPerc}</td>
      <td className="centered-text">{season.ga}</td>
      <td className="centered-text">{season.gaa}</td>
      <td className="centered-text">{season.so}</td>
    </tr>
    )
  })

  return (
  <div>
        {playerSeasonsRow.length > 0 &&
        <div>
        <h2 className="centered-text title">Player Stats</h2>
          <br></br>
    <table className="table modal-table table-responsive-sm">
      <tr className="bg"></tr>
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
     {playerSeasonsRow}
    <tr>
      <td>Career</td>
      <td>{separatePlayerStats.length} {separatePlayerStats.length > 1 ? "Seasons" : "Season"}</td>
      <td className="centered-text">{combinePlayerSeasons.gamesPlayed}</td>
      <td className="centered-text">{combinePlayerSeasons.goals}</td>
      <td className="centered-text">{combinePlayerSeasons.assists}</td>
      <td className="centered-text">{combinePlayerSeasons.points}</td>
      <td className="centered-text">{combinePlayerSeasons.pim}</td>
      <td className="centered-text">{(combinePlayerSeasons.points / combinePlayerSeasons.gamesPlayed).toFixed(2)}</td>
     </tr>
    </tbody>
  </table>
  <br></br>
  </div>
}
  <div>
    {goalieSeasonsRow.length > 0 &&
    <div>
      <h2 className="centered-text title">Goalie Stats</h2>
      <br></br>
      <div className="table-responsive">
      <table className="table modal-table table-responsive-sm">
      <tr className="bg"></tr>
    <thead>
      <tr>
        <th scope="col">Season</th>
        <th scope="col">Team</th>
        <th className="centered-text" scope="col">GP</th>
        <th className="centered-text" scope="col">Record</th>
        <th className="centered-text" scope="col">Win%</th>
        <th className="centered-text" scope="col">GA</th>
        <th className="centered-text" scope="col">GAA</th>
        <th className="centered-text" scope="col">SO</th>
      </tr>
    </thead>
    <tbody>
     {goalieSeasonsRow}
     <tr>
      <td>Career</td>
      <td>{separateGoalieStats.length} {separateGoalieStats.length > 1 ? "Seasons" : "Season"}</td>
      <td className="centered-text">{combineGoalieSeasons.gamesPlayed}</td>
      <td className="centered-text">{`${combineGoalieSeasons.wins}-${combineGoalieSeasons.losses}-${combineGoalieSeasons.sol}`}</td>
      <td className="centered-text">{((combineGoalieSeasons.wins / combineGoalieSeasons.gamesPlayed) *100).toFixed(2)}%</td>
      <td className="centered-text">{combineGoalieSeasons.ga}</td>
      <td className="centered-text">{(combineGoalieSeasons.ga / combineGoalieSeasons.gamesPlayed).toFixed(2)}</td>
      <td className="centered-text">{combineGoalieSeasons.so}</td>
     </tr>
    </tbody>
  </table>
  </div>
    </div>
    }
  </div>
</div>
  );
};

export default ModalTable;