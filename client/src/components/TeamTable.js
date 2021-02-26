import React from "react";
import TeamRow from "./TeamRow";
import "../style.css";

const TeamTable = ({ season, tableData, handleSort }) => {

  const findTeams = (tableData) => {

    // empty array to dump all the teams for a given season
    const teams = [];

    // maps over players and pushes team names to teams array
    tableData.map((player) => {
      teams.push(player.team)
    })
    // removes all duplicate teams
    const setTeams = [...new Set(teams)];
    createTeams(setTeams, tableData);
  } 

  const createTeams = (setTeams, tableData) => {
    console.log(tableData);
  }

  findTeams(tableData);
  

  
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