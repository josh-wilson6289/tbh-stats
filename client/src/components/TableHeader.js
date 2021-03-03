import React from "react";
import Caret from "./Caret";
import TableBody from "./TableBody";

const TableHeader = ({ handleSort, sortField, sortDirection, tableData, page }) => {

let columns = [];

const setHeaders = (page) => {
  if (page === "players") {
    columns = [
      {name: "Player", value: "lastName"}, 
      {name: "Team", value: "team"},
      {name: "Games Played", value: "gamesPlayed"},
      {name: "Goals", value: "goals"},
      {name: "Assists", value: "assists"},
      {name: "Points", value: "points"},
      {name: "PIM", value: "pim"},
      {name: "PPG", value: "ppg"},
    ]
  }
  else if (page === "goalies") {
    columns = [
      {name: "Player", value: "lastName"},
      {name: "Team", value: "team"},
      {name: "Games Played", value: "gamesPlayed"},
      {name: "Record", value: "wins"},
      {name: "Win Percentage", value: "winPerc"},
      {name: "Goals Against", value: "ga"},
      {name: "GAA", value: "gaa"},
      {name: "Shutouts", value: "so"}
    ]
  }
}

setHeaders(page);

const renderedHeaders = columns.map((column) => {
  return ( 
    <th scope="col" key={column.name}>{column.name}
    <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value={column.value}/></th>
  );
});


  // const renderedData = tableData.map((player) => {

  //   return (
  //   <PlayerRow
  //     key={player._id}
  //     firstName={player.firstName}
  //     lastName={player.lastName}
  //     team={player.team}
  //     gamesPlayed={player.gamesPlayed}
  //     goals={player.goals}
  //     assists={player.assists}
  //     points={player.points}
  //     pim={player.pim}
  //     ppg={Math.round(100*player.ppg)/100}
  //   />
  //   );

  // });
  
  return (
      <tr>
      {renderedHeaders}
      </tr>
  );
};

export default TableHeader;