const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  seasons: [
    {
      season: {
        type: String,
        required: true
      },
      champion: {
        type: Boolean,
        required: true
      },
      goalie: {
        type: Boolean,
        required: true
      },
      team: {
        type: String
      },
      gamesPlayed: {
        type: Number,
        default: 0
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
     wins: {
       type: Number,
       default: 0
     },
     losses: {
      type: Number,
      default: 0
    },
    sol: {
      type: Number,
      default: 0
    },
    winPerc: {
      type: Number,
      default: 0
    },
    ga: {
      type: Number,
      default: 0
    },
    gaa: {
      type: Number,
      default: 0
    },
    so: {
      type: Number,
      default: 0
    }
  }
]
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;