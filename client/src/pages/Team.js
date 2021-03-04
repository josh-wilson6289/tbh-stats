import React, {useState, useEffect} from "react";
import Table from "../components/Table";
import API from "../utils/API";

const Team = ( {season, page} ) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentSeason, setCurrentSeason] = useState("")

  function loadTeamStatsBySeason(season) {

    API.getTeamsBySeason(season)
      .then(teams => {
        const allTeams = teams.data;

        const currentSeasonTeams = allTeams.map((team) => {
          return {
            _id: team._id,
            name: team.name,
            wins: team.wins,
            losses: team.losses,
            points: team.points,
            goalsFor: team.goalsFor,
            goalsAgainst: team.goalsAgainst,
            so: team.so
          }
        })
        setTableData(currentSeasonTeams);
        setSortField("points");
        setSortDirection("descending");
        setCurrentSeason(season);
      })  
  }

  const loadAllTeams = () => {
    console.log("all teams")
  }

  useEffect(() => {
    if (season === "career") {
      loadAllTeams();
    }
    else {
      loadTeamStatsBySeason(season);
    }
  }, [season]);

  return (
    <Table
      tableData={tableData} 
      setTableData={setTableData}
      season={currentSeason}
      page={page}
      sortField={sortField}
      setSortField={setSortField}
      sortDirection={sortDirection}
      setSortDirection={setSortDirection}
    />
  );
};

export default Team;