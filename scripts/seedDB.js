const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tbhstats"
);

const playersSeed = [
  {
    name: "Lemar O",
    team: "Grey",
    goals: 2,
    assists: 5,
    points: 7,
    pim: 0,
    ppg: 2.33,
    season: "Q1 2021"
  },
  {
    name: "Adam J",
    team: "Grey",
    goals: 0,
    assists: 1,
    points: 1,
    pim: 0,
    ppg: 0.33,
    season: "Q1 2021"
  },
  { 
    name: "Mike B",
    team: "Orange",
    goals: 4,
    assists: 1,
    points: 5,
    pim: 0,
    ppg: 1.67,
    season: "Q1 2021"
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