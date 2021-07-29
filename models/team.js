const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  season: {
    type: String,
    required: true
  },
  champion: {
    type: Boolean,
    required: false
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  sow: {
    type: Number,
    default: 0
  },
  sol: {
    type: Number,
    default: 0
  },
  points : {
    type: Number,
    default: 0
  },
  goalsFor: {
    type: Number,
    default: 0
  },
  goalsAgainst: {
    type: Number,
    default: 0
  }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;