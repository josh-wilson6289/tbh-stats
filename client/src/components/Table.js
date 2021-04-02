import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Spinner from "./Spinner";

const Table = ({ tableData, setTableData, sortField, setSortField, sortDirection, setSortDirection, season, page, isLoading, setIsLoading, searchTerm }) => {

  useEffect(() => { 
    sortData(tableData, sortField, sortDirection)
  },[sortDirection, season, searchTerm]);

  const handleSort = (e) => {
    e.preventDefault();
    setIsLoading(true)
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
   sortData(tableData, field, sortDirection);
  }

  const sortData = (tableData, field, sortDirection) => {
    let sortedData = [...tableData];
   if (sortDirection === "ascending") {
     sortedData.sort((a, b) => {
       if (a[field] < b[field]) {
         return -1;
       }
       else if (a[field] > b[field]) {
         return 1;
       }
       else {
         return 0;
       }
     });
   }
   else {
     sortedData.sort((a, b) => {
       if (a[field] < b[field]) {
         return 1;
       }
       else if (a[field] > b[field]) {
         return -1;
       }
       else {
         return 0;
       }
     });
   }
   setTableData(sortedData);
   setIsLoading(false);
  };
  
  return (
    <div>
    <div className="container">
  <h1 className="ui center aligned header">{season}</h1>
  </div>
  <br></br>
  <div className="container-fluid">
    {isLoading ?
      <Spinner /> :
<table className="main table table-hover table-responsive-sm">
<thead>

  <TableHeader 
    handleSort={handleSort} 
    sortField={sortField} 
    sortDirection={sortDirection}
    tableData={tableData}
    season={season}
    page={page}
  />
  </thead>

  <TableBody 
    tableData={tableData} 
    page={page} 
    season={season}
  />

  </table>}
  </div>
  </div>
  );
};

export default Table;