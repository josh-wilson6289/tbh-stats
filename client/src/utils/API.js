import axios from "axios";

export default {
  // all players for given season
  getPlayersBySeason: function (season) {
    return axios.get("/api/player/" + season, {params: {season: season}});
  },

  getAllPlayers: function () {
    return axios.get("api/player")
  },
  
  // one player by id
  getPlayer: function(id) {
    return axios.get("/api/player/" + id);
  },
  // get all teams for given season
  getTeamsBySeason: function (season) {
    return axios.get("/api/team", {params: {season: season}});
  },
  // get single team info
  getTeam: function(id) {
    return axios.get("/api/team" + id);
  },
  // create team
  createTeam: function (teamData) {
    return axios.post("/api/team", teamData);
  }
};