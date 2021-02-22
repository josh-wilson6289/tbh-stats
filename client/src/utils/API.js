import axios from "axios";

export default {
  // all players
  getPlayers: function (viewSeason) {
    return axios.get("/api/player", {params: {season: viewSeason}});
  },
  // one player by id
  getPlayer: function(id) {
    return axios.get("api/player/" + id);
  },
};