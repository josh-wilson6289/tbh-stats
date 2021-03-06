import axios from "axios";

export default {
  // all players for given season
  getPlayersBySeason: function (season) {
    return axios.get("/api/player/season/" + season, {params: {season: season}});
  },

  getAllPlayers: function () {
    return axios.get("api/player")
  },

  searchPlayer: function(search) {
    return axios.get("/api/player/search", {params: {search: search}});
  },
  
  searchPlayerBySeason: function(season, search) {
    return axios.get("/api/player/search/" + season, {params: {season: season, search: search}});
  },
  // one player by id
  getPlayer: function(id) {
    return axios.get("/api/player/" + id);
  },
  // get all teams for given season
  getTeamsBySeason: function (season) {
    return axios.get("/api/team/season/", {params: {season: season}});
  },

  getAllTeams: function () {
    return axios.get("/api/team");
  },

  searchTeam: function (search) {
    return axios.get("/api/team/search/", {params: {search: search}});
  },

  searchTeamBySeason: function(season, search) {
    return axios.get("/api/team/search/" + season, {params: {season: season, search: search}});
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