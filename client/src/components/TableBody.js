import React from "react";
import PlayerRow from "./PlayerRow";
import GoalieRow from "./GoalieRow";
import TeamRow from "./TeamRow";
import CareerPlayerRow from "./CareerPlayerRow";
import CareerGoalieRow from "./CareerGoalieRow";
import AllTimeTeamRow from "./AllTimeTeamRow";

const TableBody = ({ tableData, page, season }) => {

let renderedData;
let rank=1;

if (page === "players" && season !== "All Time") {  
  renderedData = tableData.map((data) => {
    return (
      <PlayerRow 
        key={data._id}
        _id={data._id}
        rank={rank++}
        firstName={data.firstName}
        lastName={data.lastName}
        team={data.team}
        gamesPlayed={data.gamesPlayed}
        goals={data.goals}
        assists={data.assists}
        points={data.points}
        pim={data.pim}
        ppg={Math.round(100*data.ppg)/100}
      />
    );
});
}
else if (page === "players" && season === "All Time") {
  renderedData = tableData.map((data) => {
    return (
      <CareerPlayerRow 
      key={data._id}
      _id={data._id}
      rank={rank++}
      firstName={data.firstName}
      lastName={data.lastName}
      gamesPlayed={data.gamesPlayed}
      goals={data.goals}
      assists={data.assists}
      points={data.points}
      pim={data.pim}
      ppg={Math.round(100*data.ppg)/100}
      />
    )
  })
}
else if (page === "goalies" && season !== "All Time") {
  renderedData = tableData.map((data) => {
    return (
      <GoalieRow 
        key={data._id}
        _id={data._id}
        rank={rank++}
        firstName={data.firstName}
        lastName={data.lastName}
        team={data.team}
        gamesPlayed={data.gamesPlayed}
        wins={data.wins}
        losses={data.losses}
        sol={data.sol}
        winPerc={Math.round(100*data.winPerc)/100 + "%"}
        ga={data.ga}
        gaa={Math.round(100*data.gaa)/100}
        so={data.so}
        season={season}
      />
    );
  });
}
else if (page === "goalies" && season === "All Time") {
  renderedData = tableData.map((data) => {
    return (
      <CareerGoalieRow 
        key={data._id}
        _id={data._id}
        rank={rank++}
        firstName={data.firstName}
        lastName={data.lastName}
        gamesPlayed={data.gamesPlayed}
        wins={data.wins}
        losses={data.losses}
        sol={data.sol}
        winPerc={Math.round(100*data.winPerc)/100 + "%"}
        ga={data.ga}
        gaa={Math.round(100*data.gaa)/100}
        so={data.so}
        season={season}
      />
    );
  });
}
else if (page === "teams" && season !== "All Time") {
  renderedData = tableData.map((data) => {
    return (
      <TeamRow 
        key={data._id}
        name={data.name}
        rank={rank++}
        record={`${data.wins}-${data.losses}-${data.sol}`}
        points={data.points}
        goalsFor={data.goalsFor}
        goalsAgainst={data.goalsAgainst}
        goalDiff={data.goalDiff}
        season={season}
      />
    )
  })
}
else {
  renderedData = tableData.map((data) => {
    return (
      <AllTimeTeamRow 
        key={data._id}
        rank={rank++}
        name={data.name}
        season={data.season}
        record={`${data.wins}-${data.losses}-${data.sol}`}
        points={data.points}
        goalsFor={data.goalsFor}
        goalsAgainst={data.goalsAgainst}
        goalDiff={data.goalDiff}
      />
    )
  })
}
  return (
    <tbody>
      {renderedData}
    </tbody>
  );
};

export default TableBody;
