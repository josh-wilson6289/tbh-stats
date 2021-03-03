import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PlayerTable from "./PlayerTable";
import GoalieTable from "./GoalieTable";
import TeamTable from "./TeamTable";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ tableData, setTableData, season, page }) => {

//   let sort;
//   let direction;

//   useEffect(() => 
//   {
//   if (page === "players") {
//     sort="points";
//     direction="descending"
//   }
//   if (page === "goalies") {
//     sort="winPerc"
//     direction="descending"
//   }
// }, [page])

  const [sortField, setSortField] = useState("points");
  const [sortDirection, setSortDirection] = useState("descending");
  
  const handleSort = (e) => {
    e.preventDefault();
    const field = e.target.getAttribute("value");
    setSortField(field);
    if (sortDirection === "descending" && field===sortField) { 
      setSortDirection("ascending");
    }
   else if (sortDirection === "ascending" && field===sortField) {
    setSortDirection("descending");
   }
   else if (sortDirection === "descending" && field !==sortField) {
     setSortDirection("ascending");
   }
   else {
     setSortDirection("descending");
   }


   let sortedData = [...tableData];
   if (sortDirection === "ascending") {
     sortedData.sort((a, b) => {
       if (a[field] > b[field]) {
         return -1;
       }
       else if (a[field] < b[field]) {
         return 1;
       }
       else {
         return 0;
       }
     });
   }
   else {
     sortedData.sort((a, b) => {
       if (a[field] > b[field]) {
         return 1;
       }
       else if (a[field] < b[field]) {
         return -1;
       }
       else {
         return 0;
       }
     });
   }
   console.log("sorted " + field)
   setTableData(sortedData);
  };
  

// // loads teams from current season and sets state
// useEffect(() => {
//   API.getTeams(season)
//     .then(teams => {
//       const allTeams = teams.data;
//       setTeamData(allTeams);
//     })
// }, [season])

  return (
    <div>
    <div className="container">
  <h1 className="ui center aligned header">{season}</h1>
  </div>
  <br></br>
  <div className="container-fluid">
<table className="table table-bordered">
<thead className="thead-light">

  <TableHeader 
    handleSort={handleSort} 
    sortField={sortField} 
    sortDirection={sortDirection}
    tableData={tableData}
    season={season}
    page={page}
  />
  </thead>

  <TableBody tableData={tableData} page={page} />

  </table>
  </div>
  </div>

  );
};

export default Table;