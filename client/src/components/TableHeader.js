import React from "react";
import Caret from "./Caret";


const TableHeader = ({ handleSort, sortField, sortDirection, page, season }) => {

let columns = [];

const setHeaders = (page) => {
  if (page === "players" && season === "All Time") {
    columns = [
      {name: "", value: "rank"},
      {name: "Player", value: "lastName"}, 
      {name: "GP", value: "gamesPlayed"},
      {name: "G", value: "goals"},
      {name: "A", value: "assists"},
      {name: "P", value: "points"},
      {name: "PIM", value: "pim"},
      {name: "PPG", value: "ppg"},
    ]
  }
  else if (page === "players" && season === "2015") {
    columns = [
      {name: "", value: "rank"},
      {name: "Player", value: "lastName"}, 
      {name: "GP", value: "gamesPlayed"},
      {name: "G", value: "goals"},
      {name: "A", value: "assists"},
      {name: "P", value: "points"},
      {name: "PPG", value: "ppg"}
    ]
  }
  else if (page === "players" && (season !== "All Time" || season !== "2015")) {
    columns = [
      {name: "", value: "rank"},
      {name: "Player", value: "lastName"}, 
      {name: "Team", value: "team"},
      {name: "GP", value: "gamesPlayed"},
      {name: "G", value: "goals"},
      {name: "A", value: "assists"},
      {name: "P", value: "points"},
      {name: "PIM", value: "pim"},
      {name: "PPG", value: "ppg"},
    ]
  }
  else if (page === "goalies" && season === "All Time") {
    columns = [
      {name: "", value: "rank"},
      {name: "Player", value: "lastName"},
      {name: "GP", value: "gamesPlayed"},
      {name: "Record", value: "wins"},
      {name: "Win %", value: "winPerc"},
      {name: "GA", value: "ga"},
      {name: "GAA", value: "gaa"},
      {name: "SO", value: "so"}
    ]
  }
  else if (page ==="goalies" && season !== "All Time") {
    columns = [
      {name: "", value: "rank"},
      {name: "Player", value: "lastName"},
      {name: "Team", value: "team"},
      {name: "GP", value: "gamesPlayed"},
      {name: "Record", value: "wins"},
      {name: "Win %", value: "winPerc"},
      {name: "GA", value: "ga"},
      {name: "GAA", value: "gaa"},
      {name: "SO", value: "so"}
    ]
  }
  else if (page === "teams" && season !== "All Time") {
    columns = [
      {name: "", value: "rank"},
      {name: "Team", value: "name"},
      {name: "Record", value: "wins"},
      {name: "P", value: "points"},
      {name: "GF", value: "goalsFor"},
      {name: "GA", value: "goalsAgainst"},
      {name: "GD", value: "goalDiff"}
    ]
  }
  else {
    columns = [
      {name: "", value: "rank"},
      {name: "Team", value: "name"},
      {name: "Season", value: "season"},
      {name: "Record", value: "wins"},
      {name: "P", value: "points"},
      {name: "GF", value: "goalsFor"},
      {name: "GA", value: "goalsAgainst"},
      {name: "GD", value: "goalDiff"}
    ]
  }
}

setHeaders(page);

const renderedHeaders = columns.map((column) => {
  return ( 
    <th scope="col" onClick={handleSort} value={column.value} key={column.name}>{column.name}
    {column.name !== "" &&
    <Caret handleSort={handleSort} sortDirection={sortDirection} sortField={sortField} value={column.value}/>
    } </th>
  );
});

  return (
      <tr>
      {renderedHeaders}
      </tr>
  );
};

export default TableHeader;