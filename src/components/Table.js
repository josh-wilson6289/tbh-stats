import React, { useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";

const Table = () => {

  // take in tabletop as an array of objects (each row) and set it as state here

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    
  // get data here
    
  },[tableData]);

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Player
     
          </th>
          <th>Team

          </th>
          <th>Goals
    
          </th>
          <th>Assists

          </th>
          <th>Points

          </th>
          <th>PIM

          </th>
          <th>PPG

          </th>
        </tr>
      </thead>
      
      <tbody>
        <PlayerRow />
      </tbody>

    </table>
  );
};

export default Table;