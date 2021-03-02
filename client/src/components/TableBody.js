import React from "react";
import Table from "./Table";
import PlayerRow from "./PlayerRow";

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
    return data.lastName;
  });
}
else {
  renderedData = tableData.map((data) => {
    return data.name;
  })
}
  return (
    <tbody>
      {renderedData}
    </tbody>
  );
};

export default TableBody;
