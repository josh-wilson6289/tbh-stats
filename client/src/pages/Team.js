import React, {useState, useEffect} from "react";
import Table from "../components/Table";
import API from "../utils/API";
import NoStats from "../components/NoStats";
import "../style.css";

const Team = ({ season, page, setPage, searchTerm }) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentSeason, setCurrentSeason] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage("teams")
  }, [page]);
  
  useEffect(() => {
    searchTeam(searchTerm)
  }, [searchTerm, season]);

  function searchTeam(searchTerm) {
    if (searchTerm !== "" && season === "All Time") {
      API.searchTeam(searchTerm)
        .then(players => {
          const searchedPlayers = players.data;
          formatAllTeams(searchedPlayers);
        })
    }
    else if (searchTerm !== "" && season !== "All Time") {
      API.searchTeamBySeason(season, searchTerm) 
        .then(players => {
          const searchedPlayers = players.data;
          formatTeamsBySeason(searchedPlayers);
        })       
    }
    else if (searchTerm === "" && season === "All Time") {
      loadAllTeams();
    }   
    else if (searchTerm === "" && season !== "All Time") {
      loadTeamsBySeason(season);
    }
  }

  function loadTeamsBySeason(season) {
    setIsLoading(true);
    API.getTeamsBySeason(season)
      .then(teams => {
        const allTeams = teams.data;
        formatTeamsBySeason(allTeams);
      })  
    }

  function loadAllTeams (allTeams) {
    setIsLoading(true);
    API.getAllTeams()
      .then(teams => {
        const allTeams = teams.data;
        formatAllTeams(allTeams);
      })  
    }

    function formatTeamsBySeason(allTeams) {
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
      setSortDirection("");
      setSortDirection("descending");
      setCurrentSeason(season);
      setIsLoading(false);
  }

    function formatAllTeams (allTeams) {
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
        setSortDirection("");
        setSortDirection("descending");
        setCurrentSeason(season);
        setIsLoading(false);
      }


  return (
    <div>
    {season === "2015" || season === "Q3 2018"
    ? <NoStats stat="team"/>
    : <Table
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
      searchTerm={searchTerm}
    />}
    </div>
  );
};

export default Team;