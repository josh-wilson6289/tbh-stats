import axios from "axios";

export default {
  // all players
  getPlayers: function() {
    return axios.get("/api/player");
  },
  // one player by id
  getPlayer: function(id) {
    return axios.get("api/player/" + id);
  }
};