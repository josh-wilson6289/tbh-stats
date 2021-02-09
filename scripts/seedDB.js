const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tbhstats"
);

const playersSeed = [
  {
    name: "Lemar O",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        team: "Grey",
        gamesPlayed: 3,
        goals: 2,
        assists: 5,
        points: 7,
        pim: 0,
        ppg: 2.33
      }
    ]
  },
  {
      name: "Adam J",
      seasons: [
        {
          season: "Q1 2021",
          current: true,
          team: "Grey",
          gamesPlayed: 3,
          goals: 0,
          assists: 1,
          points: 1,
          pim: 0,
          ppg: 0.33,
        },
        {
          season: "Q1 2020",
          current: false,
          team: "Red",
          gamesPlayed: 6,
          goals: 5,
          assists: 7,
          points: 12,
          pim: 0,
          ppg: 2,
        }
      ]
  },
  { 
    name: "Mike B",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        team: "Orange",
        gamesPlayed: 3,
        goals: 4,
        assists: 1,
        points: 5,
        pim: 0,
        ppg: 1.67,
      },
      {
        season: "Q1 2020",
        current: false,
        team: "Red",
        gamesPlayed: 4,
        goals: 7,
        assists: 7,
        points: 14,
        pim: 0,
        ppg: 3.5,
      }
    ]
  },
  { 
    name: "Josh W",
    seasons: [
      {
        season: "Q1 2020",
        current: false,
        team: "Teal",
        gamesPlayed: 9,
        goals: 3,
        assists: 5,
        points: 8,
        pim: 2,
        ppg: 0.89,
      }
    ]
  }  
]

db.Player.remove({})
  .then(() => db.Player.collection.insertMany(playersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });