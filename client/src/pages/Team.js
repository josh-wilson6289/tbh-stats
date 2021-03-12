import React, {useState, useEffect} from "react";
import Table from "../components/Table";
import API from "../utils/API";

const Team = ({ season, page, setPage }) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentSeason, setCurrentSeason] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (season === "All Time") {
      loadAllTeamStats();
    }
    else {
      loadTeamStatsBySeason(season);
    }
  }, [season]);

  useEffect(() => {
    setPage("teams")
  }, [page]);
  
  function loadTeamStatsBySeason(season) {
    setIsLoading(true);
    API.getTeamsBySeason(season)
      .then(teams => {
        const allTeams = teams.data;

        const currentSeasonTeams = allTeams.map((team) => {
          return {
            _id: team._id,
            name: team.name,
            wins: team.wins,
            losses: team.losses,
            sol: team.sol,
            points: team.points,
            goalsFor: team.goalsFor,
            goalsAgainst: team.goalsAgainst,
            goalDiff: team.goalsFor - team.goalsAgainst
          }
        })
        setTableData(currentSeasonTeams);
        setSortField("points");
        setSortDirection("descending");
        setCurrentSeason(season);
        setIsLoading(false);
      })  
  }

  const loadAllTeamStats = () => {
    setIsLoading(true);
    API.getAllTeams()
      .then(teams => {
        const allTeams = teams.data;
        console.log(teams.data);
        const allTimeTeams = allTeams.map((team) => {
          return {
            key: team._id,
            _id: team._id,
            name: team.name,
            wins: team.wins,
            losses: team.losses,
            sol: team.sol,
            points: team.points,
            goalsFor: team.goalsFor,
            goalsAgainst: team.goalsAgainst,
            goalDiff: team.goalsFor - team.goalsAgainst,
            season: team.season
          }
        })
        setTableData(allTimeTeams);
        setSortField("points");
        setSortDirection("descending");
        setCurrentSeason(season);
        setIsLoading(false);
      })  
  }


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
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  );
};

export default Team;