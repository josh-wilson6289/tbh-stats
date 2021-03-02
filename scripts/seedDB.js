const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tbhstats"
);

const playersSeed = [
  {
    name: "Sydnie F",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 3,
        goals: 2,
        assists: 2,
        points: 4,
        pim: 0,
        ppg: 1.33
      }
    ]
  },
  {
    name: "Josh H",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 2,
        goals: 4,
        assists: 1,
        points: 5,
        pim: 2,
        ppg: 2.5
      }
    ]
  },
  {
    name: "Max L",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 3,
        goals: 1,
        assists: 1,
        points: 2,
        pim: 0,
        ppg: 0.67
      }
    ]
  },
  {
    name: "Eric C",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 3,
        goals: 0,
        assists: 2,
        points: 2,
        pim: 0,
        ppg: 0.67
      }
    ]
  },
  {
    name: "Eric S",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 3,
        goals: 0,
        assists: 0,
        points: 0,
        pim: 2,
        ppg: 0
      }
    ]
  },
  {
    name: "Max E",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 3,
        goals: 0,
        assists: 0,
        points: 0,
        pim: 0,
        ppg: 0
      }
    ]
  },
  {
    name: "Noah J",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 3,
        goals: 1,
        assists: 0,
        points: 1,
        pim: 0,
        ppg: 0.33
      }
    ]
  },
  {
    name: "Nick B",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: true,
        team: "Navy",
        gamesPlayed: 3,
        wins: 0,
        losses: 3,
        sol: 0,
        winPerc: 0,
        ga: 13,
        gaa: 4.33,
        so: 0
      }
    ]
  },
  {
    name: "Lemar O",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
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
          goalie: false,
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
          goalie: false,
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
        goalie: false,
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
        goalie: false,
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
        goalie: false,
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
  
  const teamSeed = [
    {
      name: "Navy",
      season: "Q1 2021",
      wins: 0,
      losses: 5,
      points: 0,
      goalsFor: 11,
      goalsAgainst: 10
    },
    {
      name: "Olive",
      season: "Q1 2021",
      wins: 3,
      losses: 2,
      points: 6,
      goalsFor: 19,
      goalsAgainst: 10,
    },
    {
      name: "Grey",
      season: "Q1 2021",
      wins: 5,
      losses: 0,
      points: 10,
      goalsFor: 17,
      goalsAgainst: 10
    },
    {
      name: "Orange",
      season: "Q1 2021",
      wins: 1,
      losses: 4,
      points: 2,
      goalsFor: 17,
      goalsAgainst: 10
    }
  ]

  db.Team.remove({})
  .then(() => db.Team.collection.insertMany(teamSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });