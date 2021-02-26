import React, {useEffect} from "react";
import TeamRow from "./TeamRow";
import API from "../utils/API";
import "../style.css";

const TeamTable = ({ season, tableData, handleSort }) => {

useEffect(() => {
  API.getTeams(season)
    .then(teams => {
      const allTeams = teams.data;
      console.log(allTeams);
    })
})

    
  
  return (
    <div>
    <div className="ui container">
      <h1 className="ui center aligned header">{season}</h1>
    </div>
    <table className="ui celled table">
      <thead>
        <tr>
          <th onClick={handleSort} columnvalue="team">Team

          </th>
          {/* <th onClick={handleSort} columnvalue="team">Team

          </th>
          <th onClick={handleSort} columnvalue="winPerc">Record

          </th>
          <th onClick={handleSort} columnvalue="winPerc">Win Percentage

          </th>
          <th onClick={handleSort} columnvalue="ga">Goals Against

          </th>
          <th onClick={handleSort} columnvalue="gaa">GAA

          </th>
          <th onClick={handleSort} columnvalue="so">Shut Outs

          </th> */}
        </tr>
      </thead>
      
      <tbody>
        {/* {renderedTeams} */}
      </tbody>

    </table>
   </div>
  );
};

export default TeamTable;