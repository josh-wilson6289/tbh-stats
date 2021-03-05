import React from "react";
import Caret from "./Caret";


const TableHeader = ({ handleSort, sortField, sortDirection, page, season }) => {

let columns = [];

const setHeaders = (page) => {
  if (page === "players" && season === "Career") {
    columns = [
      {name: "Player", value: "lastName"}, 
      {name: "Games Played", value: "gamesPlayed"},
      {name: "Goals", value: "goals"},
      {name: "Assists", value: "assists"},
      {name: "Points", value: "points"},
      {name: "PIM", value: "pim"},
      {name: "PPG", value: "ppg"},
    ]
  }
  else if (page === "players" && season !== "Career") {
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
  else if (page === "goalies" && season === "Career") {
    columns = [
      {name: "Player", value: "lastName"},
      {name: "Games Played", value: "gamesPlayed"},
      {name: "Record", value: "wins"},
      {name: "Win Percentage", value: "winPerc"},
      {name: "Goals Against", value: "ga"},
      {name: "GAA", value: "gaa"},
      {name: "Shutouts", value: "so"}
    ]
  }
  else if (page ==="goalies" && season !== "Career") {
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
  else {
    columns = [
      {name: "Team", value: "name"},
      {name: "Wins", value: "wins"},
      {name: "Losses", value: "losses"},
      {name: "Points", value: "points"},
      {name: "Goals For", value: "goalsFor"},
      {name: "Goals Against", value: "goalsAgainst"}
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

  return (
      <tr>
      {renderedHeaders}
      </tr>
  );
};

export default TableHeader;