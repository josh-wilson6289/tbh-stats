const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  goals: {
    type: Number,
    default: 0
  },
  assists: {
    type: Number,
    default: 0
  },
  points: {
    type: Number,
    default: 0
  },
  pim: {
    type: Number,
    default: 0
  },
  ppg: {
    type: Number,
    default: 0
  },
  season: {
    type: String,
    required: true
  }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;