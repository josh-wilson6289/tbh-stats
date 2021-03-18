import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import API from "../utils/API";

const Player = ({ season, page, setPage, searchTerm }) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("points");
  const [sortDirection, setSortDirection] = useState("descending");
  const [currentSeason, setCurrentSeason] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // sets page to be passed down through props
  useEffect(() => {
    setPage("players")
  }, [page]);

  // Checks for a search term, and loads the Search function
  useEffect(() => {
    searchPlayer(searchTerm)
  }, [searchTerm, season]);
  
  // Searches for players based on season or career page
  function searchPlayer(searchTerm) {
    if (searchTerm !== "" && season === "All Time") {
      API.searchPlayer(searchTerm)
        .then(players => {
          const searchedPlayers = players.data;
          formatPlayersByCareer(searchedPlayers);
        })
    }
    else if (searchTerm !== "" && season !== "All Time") {
      API.searchPlayerBySeason(season, searchTerm) 
        .then(players => {
          const searchedPlayers = players.data;
          formatPlayersBySeason(searchedPlayers);
        })       
    }
    else if (searchTerm === "" && season === "All Time") {
      loadPlayerCareerStats();
    }   
    else if (searchTerm === "" && season !== "All Time") {
      loadPlayerStatsBySeason(season);
    }
  }
  

  // Loads the player stats by season and calls the formatting function
  function loadPlayerStatsBySeason(season) {
      // calls api for any player that has participated in season
      setIsLoading(true);
      API.getPlayersBySeason(season)
      .then(players => {
        const allPlayers = players.data
        formatPlayersBySeason(allPlayers);
      });
    }

  // Loads the player stats by career and calls the formatting function
  function loadPlayerCareerStats() {
    setIsLoading(true);
    API.getAllPlayers()
      .then(players => {
        const allPlayers = players.data;
        formatPlayersByCareer(allPlayers);
      });
    }
  

  // Takes the data array and formats it for given season
  function formatPlayersBySeason(allPlayers) {
    // filters through the seasons array, and returns only the season being viewed currently
    // that way, when rendering the playerRow the current season will always be at index [0]
    const filteredPlayersBySeason = allPlayers.map((player) => {
      return {...player, seasons: player.seasons.filter((seasons) => seasons.season === season)}
    })
        
    // filter out goalies
    const playersBySeason = filteredPlayersBySeason.filter(player => player.seasons[0].goalie === false);
  
    // removes the seasons array, sets player data 
    const currentSeasonPlayers = playersBySeason.map((player) => {
      return {
        _id: player._id,
        firstName: player.firstName,
        lastName: player.lastName,
        team: player.seasons[0].team,
        gamesPlayed: player.seasons[0].gamesPlayed,
        goals: player.seasons[0].goals,
        assists: player.seasons[0].assists,
        points: player.seasons[0].goals + player.seasons[0].assists,
        pim: player.seasons[0].pim,
        ppg: (player.seasons[0].goals + player.seasons[0].assists) / player.seasons[0].gamesPlayed
      }
    })
      setTableData(currentSeasonPlayers);
      setCurrentSeason(season);
      setSortField("points");
      setSortDirection("descending");
      setIsLoading(false);
  }

  // Takes the data array and formats it for career stats
  function formatPlayersByCareer(allPlayers) {
    // filters out any seasons where the player is a goalie
    const removeGoalieSeasons = allPlayers.map((player) => {
        return {...player, seasons: player.seasons.filter((season) => season.goalie === false)}
      }); 
      
    // removes any player who has only played seasons as a goalie
      const removeGoalies = removeGoalieSeasons.filter((player) => player.seasons.length !== 0);
      
    // combines stats from all seasons
      const combineSeasons = removeGoalies.map((player) => {
        return {...player, seasons: [addObjValues(player.seasons)]}  
      })

    const playerCareer = combineSeasons.map((player) => {
      return {
        key: player._id,
        _id: player._id,
        firstName: player.firstName,
        lastName: player.lastName,
        gamesPlayed: player.seasons[0].gamesPlayed,
        goals: player.seasons[0].goals,
        assists: player.seasons[0].assists,
        points: player.seasons[0].goals + player.seasons[0].assists,
        pim: player.seasons[0].pim,
        ppg: (player.seasons[0].goals + player.seasons[0].assists) / player.seasons[0].gamesPlayed
      }
    })
      setTableData(playerCareer);
      setCurrentSeason(season);
      setSortField("points");
      setSortDirection("descending");
      setIsLoading(false);
  }

  // combines stats from all seasons
  function addObjValues(data) {
    const result = {};

    data.forEach(season => {
      for (let [key, value] of Object.entries(season)) {
        if (result[key]) {
          result[key]+= value;
        }
        else {
          result[key] = value;
        }
      }
    });
    return result;
  };


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
      searchTerm={searchTerm}
    />
  );
};

export default Player;