import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import API from "../utils/API";

const Goalie = ({ season, page }) => {

  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentSeason, setCurrentSeason] = useState("");

  useEffect(() => {
    if (season === "Career") {
      loadGoalieCareerStats();
    }
    else {
      loadGoalieStatsBySeason(season)
    }
  }, [season]);

  function loadGoalieStatsBySeason(season) {
      // calls api for any player that has participated in season
      API.getPlayersBySeason(season)
      .then(players => {
        const allPlayers = players.data
        // filters through the seasons array, and returns only the season being viewed currently
        // that way, when rendering the playerRow the current season will always be at index [0]
        const filteredPlayersBySeason = allPlayers.map((player) => {
          return {...player, seasons: player.seasons.filter((seasons) => seasons.season === season)}
        })
        
        // filters out all except goalies
        const goaliesBySeason = filteredPlayersBySeason.filter(player => player.seasons[0].goalie === true);

        // removes the seasons array, sets goalie data
        const currentSeasonGoalies = goaliesBySeason.map((goalie) => {
          return {
            key: goalie._id,
            _id: goalie._id,
            firstName: goalie.firstName,
            lastName: goalie.lastName,
            team: goalie.seasons[0].team,
            gamesPlayed: goalie.seasons[0].gamesPlayed,
            goalie: goalie.seasons[0].goalie,
            wins: goalie.seasons[0].wins,
            losses: goalie.seasons[0].losses,
            sol: goalie.seasons[0].sol,
            winPerc: (goalie.seasons[0].wins / goalie.seasons[0].gamesPlayed) * 100,
            ga: goalie.seasons[0].ga,
            gaa: goalie.seasons[0].ga / goalie.seasons[0].gamesPlayed,
            so: goalie.seasons[0].so
          }
        })
        // sets table data state
        setTableData(currentSeasonGoalies);
        setSortField("winPerc");
        setSortDirection("descending");
        setCurrentSeason(season)
      });
  }

  function loadGoalieCareerStats() {
    API.getAllPlayers()
      .then(players=> {
        const removePlayerSeasons = players.data.map((player) => {
          return {...player, seasons: player.seasons.filter((season) => season.goalie === true)}
        });

        const removePlayers = removePlayerSeasons.filter((player) => player.seasons.length !== 0);

        const combineSeasons = removePlayers.map((goalie) => {
          return{...goalie, seasons: [addObjValues(goalie.seasons)]}
        });

        const goalieCareer = combineSeasons.map((goalie) => {
          return {
            key: goalie._id,
            _id: goalie._id,
            firstName: goalie.firstName,
            lastName: goalie.lastName,
            team: goalie.seasons[0].team,
            gamesPlayed: goalie.seasons[0].gamesPlayed,
            goalie: goalie.seasons[0].goalie,
            wins: goalie.seasons[0].wins,
            losses: goalie.seasons[0].losses,
            sol: goalie.seasons[0].sol,
            winPerc: (goalie.seasons[0].wins / goalie.seasons[0].gamesPlayed) * 100,
            ga: goalie.seasons[0].ga,
            gaa: goalie.seasons[0].ga / goalie.seasons[0].gamesPlayed,
            so: goalie.seasons[0].so
          }
        })
        setTableData(goalieCareer);
        setSortField("winPerc");
        setSortDirection("descending");
        setCurrentSeason(season);
      });
  }

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
    />
  );
};

export default Goalie;