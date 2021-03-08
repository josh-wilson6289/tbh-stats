import React from "react";
import PlayerRow from "./PlayerRow";
import GoalieRow from "./GoalieRow";
import TeamRow from "./TeamRow";
import CareerPlayerRow from "./CareerPlayerRow";
import CareerGoalieRow from "./CareerGoalieRow";

const TableBody = ({ tableData, page, season }) => {

let renderedData;

if (page === "players" && season !== "Career") {  
  renderedData = tableData.map((data) => {
    return (
      <PlayerRow 
        key={data._id}
        _id={data._id}
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
else if (page === "players" && season === "Career") {
  renderedData = tableData.map((data) => {
    return (
      <CareerPlayerRow 
      key={data._id}
      _id={data._id}
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
else if (page === "goalies" && season !== "Career") {
  renderedData = tableData.map((data) => {
    return (
      <GoalieRow 
        key={data._id}
        _id={data._id}
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
else if (page === "goalies" && season === "Career") {
  renderedData = tableData.map((data) => {
    return (
      <CareerGoalieRow 
        key={data._id}
        _id={data._id}
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
else {
  renderedData = tableData.map((data) => {
    return (
      <TeamRow 
        key={data.name}
        name={data.name}
        wins={data.wins}
        losses={data.losses}
        points={data.points}
        goalsFor={data.goalsFor}
        goalsAgainst={data.goalsAgainst}
        season={season}
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
