import React from "react";
import Table from "./Table";
import PlayerRow from "./PlayerRow";
import GoalieRow from "./GoalieRow";
import TeamRow from "./TeamRow";

const TableBody = ({ tableData, page }) => {

let renderedData;

if (page === "players") {  
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
else if (page === "goalies") {
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
      />
    );
  });
}
else {
  renderedData = tableData.map((data) => {
    return (
      <TeamRow 
        name={data.name}
        wins={data.wins}
        losses={data.losses}
        points={data.points}
        goalsFor={data.goalsFor}
        goalsAgainst={data.goalsAgainst}
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
