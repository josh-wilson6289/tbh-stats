const playersSeed = [
  {
    firstName: "Sydnie",
    lastName: "Fiocca",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 5,
        goals: 3,
        assists: 2,
        pim: 2
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Red",
        gamesPlayed: 10,
        goals: 6,
        assists: 4,
        pim: 0
      }
    ]
  },
  {
    firstName: "Josh",
    lastName: "Hall",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 4,
        goals: 5,
        assists: 1,
        pim: 2
      }
    ]
  },
  {
    firstName: "Max",
    lastName: "Lee",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 5,
        goals: 1,
        assists: 1,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Black",
        gamesPlayed: 10,
        goals: 3,
        assists: 3,
        pim: 0
      }
    ]
  },
  {
    firstName: "Eric",
    lastName: "Counts",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 5,
        goals: 1,
        assists: 3,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Red",
        gamesPlayed: 9,
        goals: 5,
        assists: 3,
        pim: 4
      }
    ]
  },
  {
    firstName: "Eric", 
    lastName:"Stelzel",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 5,
        goals: 0,
        assists: 1,
        pim: 6
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Black",
        gamesPlayed: 9,
        goals: 1,
        assists: 0,
        pim: 6
      }
    ]
  },
  {
    firstName: "Max",
    lastName: "Egan",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 5,
        goals: 0,
        assists: 0,
        pim: 0
      }
    ]
  },
  {
    firstName: "Noah",
    lastName: "Jakobovits",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Navy",
        gamesPlayed: 5,
        goals: 1,
        assists: 0,
        pim: 0
      }
    ]
  },
  {
    firstName: "Nick",
    lastName: "Boland",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: true,
        team: "Navy",
        gamesPlayed: 5,
        wins: 0,
        losses: 5,
        sol: 0,
        ga: 22,
        so: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: true,
        team: "Blue",
        gamesPlayed: 9,
        wins: 7,
        losses: 2,
        sol: 0,
        ga: 28,
        so: 0
      }
    ]
  },
  {
    firstName: "Ryan",
    lastName: "Landers",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Olive",
        gamesPlayed: 5,
        goals: 4,
        assists: 4,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Blue",
        gamesPlayed: 8,
        goals: 13,
        assists: 10,
        pim: 4
      }
    ]
  },
  {
    firstName: "Michael",
    lastName: "T",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Olive",
        gamesPlayed: 5,
        goals: 6,
        assists: 6,
        pim: 2
      }
    ]
  },
  {
    firstName: "Cory",
    lastName: "Hofmeister",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Olive",
        gamesPlayed: 4,
        goals: 2,
        assists: 3,
        pim: 4
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Black",
        gamesPlayed: 7,
        goals: 2,
        assists: 4,
        pim: 2
      }
    ]
  },
  {
    firstName: "Mike",
    lastName: "Krein",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Olive",
        gamesPlayed: 5,
        goals: 5,
        assists: 2,
        pim: 2
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Teal",
        gamesPlayed: 10,
        goals: 15,
        assists: 11,
        pim: 2
      },
    ]
  },
  {
    firstName: "Fry",
    lastName: "J",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Olive",
        gamesPlayed: 3,
        goals: 1,
        assists: 1,
        pim: 0
      }
    ]
  },
  {
    firstName: "Ilia",
    lastName: "Davidovich",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Olive",
        gamesPlayed: 5,
        goals: 1,
        assists: 1,
        pim: 0
      }
    ]
  },
  {
    firstName: "Steve",
    lastName: "I",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Olive",
        gamesPlayed: 5,
        goals: 0,
        assists: 0,
        pim: 2
      }
    ]
  },
  {
    firstName: "Matt",
    lastName: "Reyes",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: true,
        team: "Olive",
        gamesPlayed: 5,
        wins: 3,
        losses: 2,
        sol: 0,
        ga: 15,
        so: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: true,
        team: "Black",
        gamesPlayed: 10,
        wins: 0,
        losses: 10,
        sol: 0,
        ga: 58,
        so: 0
      }
    ]
  },
  {
    firstName: "Lemar",
    lastName: "Ortiz",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Grey",
        gamesPlayed: 5,
        goals: 5,
        assists: 7,
        pim: 0
      }
    ]
  },
  {
    firstName: "Conor",
    lastName: "Barney",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Grey",
        gamesPlayed: 5,
        goals: 10,
        assists: 3,
        pim: 0,
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Teal",
        gamesPlayed: 4,
        goals: 3,
        assists: 4,
        pim: 2
      }
    ]
  },
  {
    firstName: "Adam",
    lastName: "Jacque",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Grey",
        gamesPlayed: 5,
        goals: 1,
        assists: 2,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Red",
        gamesPlayed: 6,
        goals: 5,
        assists: 7,
        pim: 0
      }
    ]
  },
  {
    firstName: "Llewellyn",
    lastName: "Duplantis",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Grey",
        gamesPlayed: 5,
        goals: 1,
        assists: 2,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Teal",
        gamesPlayed: 10,
        goals: 1,
        assists: 4,
        pim: 6
      }
    ]
  },
  {
    firstName: "Corey",
    lastName: "M",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Grey",
        gamesPlayed: 4,
        goals: 0,
        assists: 1,
        pim: 0
      }
    ]
  },
  {
    firstName: "Tom",
    lastName: "Sunstrom",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Grey",
        gamesPlayed: 3,
        goals: 0,
        assists: 0,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Black",
        gamesPlayed: 8,
        goals: 2,
        assists: 0,
        pim: 0
      }
    ]
  },
  {
    firstName: "Jason",
    lastName: "Kelsey",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Grey",
        gamesPlayed: 5,
        goals: 0,
        assists: 0,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Black",
        gamesPlayed: 10,
        goals: 4,
        assists: 1,
        pim: 4
      }
    ]
  },
  {
    firstName: "Jordan",
    lastName: "Brown",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: true,
        team: "Grey",
        gamesPlayed: 5,
        wins: 5,
        losses: 0,
        sol: 0,
        ga: 7,
        so: 0
      }
    ]
  },
  { 
    firstName: "Mike",
    lastName: "Brandimarto",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Orange",
        gamesPlayed: 3,
        goals: 4,
        assists: 1,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Red",
        gamesPlayed: 4,
        goals: 7,
        assists: 7,
        pim: 0
      }
    ]
  },
  { 
    firstName: "Andrew",
    lastName: "Bobst",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Orange",
        gamesPlayed: 4,
        goals: 6,
        assists: 3,
        pim: 0
      }
    ]
  },
  { 
    firstName: "Jake",
    lastName: "Heffelfinger",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Orange",
        gamesPlayed: 5,
        goals: 2,
        assists: 3,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Teal",
        gamesPlayed: 10,
        goals: 3,
        assists: 8,
        pim: 6
      }
    ]
  },
  { 
    firstName: "Nathan",
    lastName: "L",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Orange",
        gamesPlayed: 5,
        goals: 0,
        assists: 2,
        pim: 0
      }
    ]
  },
  { 
    firstName: "Jamie",
    lastName: "Kerr",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Orange",
        gamesPlayed: 4,
        goals: 0,
        assists: 2,
        pim: 4
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Black",
        gamesPlayed: 9,
        goals: 0,
        assists: 2,
        pim: 0
      }
    ]
  },
  { 
    firstName: "Ray",
    lastName: "Yelle",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Orange",
        gamesPlayed: 5,
        goals: 0,
        assists: 1,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Red",
        gamesPlayed: 10,
        goals: 2,
        assists: 0,
        pim: 2
      }
    ]
  },
  { 
    firstName: "Colton",
    lastName: "Pollock",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Orange",
        gamesPlayed: 4,
        goals: 0,
        assists: 1,
        pim: 0
      }
    ]
  },
  { 
    firstName: "Dan",
    lastName: "Skemp",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: false,
        team: "Orange",
        gamesPlayed: 5,
        goals: 0,
        assists: 1,
        pim: 0
      },
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Pink",
        gamesPlayed: 5,
        goals: 9,
        assists: 2,
        pim: 0
      }
    ]
  },
  {
    firstName: "Taylor",
    lastName: "Dennard",
    seasons: [
      {
        season: "Q1 2021",
        current: true,
        goalie: true,
        team: "Orange",
        gamesPlayed: 4,
        wins: 1,
        losses: 3,
        sol: 0,
        ga: 15,
        so: 0
      },
      {
        season: "Q1 2021",
        current: false,
        goalie: true,
        team: "Red",
        gamesPlayed: 9,
        wins: 6,
        losses: 3,
        sol: 0,
        ga: 21,
        so: 0
      }
    ]
  },
  {
    firstName: "Alex",
    lastName: "Garay",
    seasons: [
      {
        season: "Q1 2020",
        current: false,
        goalie: false,
        team: "Pink",
        gamesPlayed: 9,
        goals: 0,
        assists: 0,
        pim: 0
      }
    ]
  },
  {
  firstName: "Trevor",
  lastName: "Don",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Pink",
      gamesPlayed: 9,
      goals: 8,
      assists: 9,
      pim: 0
    }
  ]
},
{
  firstName: "Mac",
  lastName: "Maloney",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Pink",
      gamesPlayed: 5,
      goals: 7,
      assists: 3,
      pim: 2
    }
  ]
},
{
  firstName: "Josh",
  lastName: "K",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Pink",
      gamesPlayed: 9,
      goals: 0,
      assists: 1,
      pim: 0
    }
  ]
},
{
  firstName: "Dane",
  lastName: "Walter",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Pink",
      gamesPlayed: 8,
      goals: 0,
      assists: 0,
      pim: 4
    }
  ]
},
{
  firstName: "Jason",
  lastName: "W",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Pink",
      gamesPlayed: 8,
      goals: 2,
      assists: 2,
      pim: 0
    }
  ]
},
{
  firstName: "Brian",
  lastName: "Chambers",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Pink",
      gamesPlayed: 7,
      goals: 0,
      assists: 2,
      pim: 0
    }
  ]
},
{
  firstName: "Kyle",
  lastName: "Walczak",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Pink",
      gamesPlayed: 6,
      goals: 0,
      assists: 0,
      pim: 0
    }
  ]
},
{
  firstName: "Nick",
  lastName: "Meloche",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Pink",
      gamesPlayed: 3,
      goals: 3,
      assists: 0,
      pim: 4
    }
  ]
},
{
  firstName: "Nick",
  lastName: "Paul",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: true,
      team: "Pink",
      gamesPlayed: 6,
      wins: 3,
      losses: 3,
      sol: 0,
      ga: 19,
      so: 0
    }
  ]
},
{
  firstName: "Mike",
  lastName: "McKenna",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Teal",
      gamesPlayed: 6,
      goals: 22,
      assists: 6,
      pim: 0
    }
  ]
},
{
  firstName: "Matt",
  lastName: "Hauser",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Teal",
      gamesPlayed: 7,
      goals: 3,
      assists: 6,
      pim: 0
    }
  ]
},
{
  firstName: "Rob",
  lastName: "Vivirito",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Teal",
      gamesPlayed: 9,
      goals: 1,
      assists: 4,
      pim: 0
    }
  ]
},
{
  firstName: "Josh",
  lastName: "Wilson",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Teal",
      gamesPlayed: 9,
      goals: 3,
      assists: 5,
      pim: 2
    }
  ]
},
{
  firstName: "Jamin",
  lastName: "Alexis",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Teal",
      gamesPlayed: 9,
      goals: 6,
      assists: 1,
      pim: 0
    }
  ]
},
{
  firstName: "Jeff",
  lastName: "Montesano",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: true,
      team: "Teal",
      gamesPlayed: 6,
      wins: 5,
      losses: 2,
      sol: 0,
      ga: 23,
      so: 0
    }
  ]
},
{
  firstName: "Toby",
  lastName: "Nunn",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Black",
      gamesPlayed: 9,
      goals: 0,
      assists: 2,
      pim: 0
    }
  ]
},
{
  firstName: "Christian",
  lastName: "C",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Black",
      gamesPlayed: 9,
      goals: 1,
      assists: 0,
      pim: 0
    }
  ]
},
{
  firstName: "David",
  lastName: "Georger",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Black",
      gamesPlayed: 10,
      goals: 1,
      assists: 0,
      pim: 0
    }
  ]
},
{
  firstName: "Sean",
  lastName: "Crowley",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Black",
      gamesPlayed: 4,
      goals: 1,
      assists: 0,
      pim: 0
    }
  ]
},
{
  firstName: "Sean",
  lastName: "Crowley",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Black",
      gamesPlayed: 4,
      goals: 1,
      assists: 0,
      pim: 0
    }
  ]
},
{
  firstName: "Jon",
  lastName: "Allain",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Red",
      gamesPlayed: 9,
      goals: 7,
      assists: 3,
      pim: 0
    }
  ]
},
{
  firstName: "Chris",
  lastName: "Vanasdlen",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Red",
      gamesPlayed: 9,
      goals: 2,
      assists: 2,
      pim: 0
    }
  ]
},
{
  firstName: "Javier",
  lastName: "Cruz",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Red",
      gamesPlayed: 10,
      goals: 4,
      assists: 3,
      pim: 0
    }
  ]
},
{
  firstName: "Kady",
  lastName: "Prunk",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Red",
      gamesPlayed: 10,
      goals: 0,
      assists: 2,
      pim: 2
    }
  ]
},
{
  firstName: "Randy",
  lastName: "Chhabra",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Blue",
      gamesPlayed: 9,
      goals: 8,
      assists: 2,
      pim: 0
    }
  ]
},
{
  firstName: "Avi",
  lastName: "Hanel",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Blue",
      gamesPlayed: 8,
      goals: 7,
      assists: 10,
      pim: 0
    }
  ]
},
{
  firstName: "Jamie",
  lastName: "Byrnes",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Blue",
      gamesPlayed: 9,
      goals: 5,
      assists: 1,
      pim: 4
    }
  ]
},
{
  firstName: "Brandon",
  lastName: "H",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Blue",
      gamesPlayed: 9,
      goals: 2,
      assists: 2,
      pim: 0
    }
  ]
},
{
  firstName: "Nic",
  lastName: "Fikac",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Blue",
      gamesPlayed: 7,
      goals: 2,
      assists: 1,
      pim: 0
    }
  ]
},
{
  firstName: "CJ",
  lastName: "Shrull",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Blue",
      gamesPlayed: 9,
      goals: 2,
      assists: 3,
      pim: 0
    }
  ]
},
{
  firstName: "Brandon",
  lastName: "Fisher",
  seasons: [
    {
      season: "Q1 2020",
      current: false,
      goalie: false,
      team: "Blue",
      gamesPlayed: 3,
      goals: 4,
      assists: 1,
      pim: 0
    }
  ]
}
]

// {
//   firstName: "Jeff",
//   lastName: "Montesano",
//   seasons: [
//     {
//       season: "Q1 2020",
//       current: false,
//       goalie: true,
//       team: "Teal",
//       gamesPlayed: 6,
//       wins: 5,
//       losses: 2,
//       sol: 0,
//       ga: 23,
//       so: 0
//     }
//   ]
// },