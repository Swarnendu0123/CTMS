const mongoose = require('mongoose');
const Match = require('./db/MatchSchema');


async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/cricketDb');
    console.log('Connected to database');
}

connect();


const generateRandomNumber = () => {
    return Math.floor(Math.random() * 101);
}

const matches = [
    {
        id: 1,
        date: '2021-09-01',
        time: '19:00',
        venue: 'Mumbai',
        team1: 'MI',
        team2: 'CSK',
        team1Platers:[
            {
                id: 1,
                playerName: 'Lionel Messi',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 5
            },
            {
                id: 2,
                playerName: 'Gerard Pique',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Frenkie de Jong',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Marc-André ter Stegen',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ],
        team2Platers:[
            {
                id: 1,
                playerName: 'Cristiano Ronaldo',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Sergio Ramos',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Luka Modric',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Thibaut Courtois',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ]
    },
    {
        id: 2,
        date: '2021-09-02',
        time: '19:00',
        venue: 'Chennai',
        team1: 'RCB',
        team2: 'KKR',
        team1Platers: [
            {
                id: 1,
                playerName: 'Lionel Messi',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Gerard Pique',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Frenkie de Jong',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Marc-André ter Stegen',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ],
        team2Platers: [
            {
                id: 1,
                playerName: 'Cristiano Ronaldo',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Sergio Ramos',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Luka Modric',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Thibaut Courtois',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ]
    },
    {
        id: 3,
        date: '2021-09-03',
        time: '19:00',
        venue: 'Delhi',
        team1: 'DC',
        team2: 'PBKS',
        team1Platers: [
            {
                id: 1,
                playerName: 'Lionel Messi',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Gerard Pique',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Frenkie de Jong',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Marc-André ter Stegen',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ],
        team2Platers: [
            {
                id: 1,
                playerName: 'Cristiano Ronaldo',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Sergio Ramos',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Luka Modric',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Thibaut Courtois',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ]
    },
    {
        id: 4,
        date: '2021-09-04',
        time: '19:00',
        venue: 'Kolkata',
        team1: 'RR',
        team2: 'SRH',
        team1Platers: [
            {
                id: 1,
                playerName: 'Lionel Messi',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Gerard Pique',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Frenkie de Jong',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Marc-André ter Stegen',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ],
        team2Platers: [
            {
                id: 1,
                playerName: 'Cristiano Ronaldo',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Sergio Ramos',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Luka Modric',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Thibaut Courtois',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ]
    }
]


//save the matches to the database
matches.forEach((match) => {
    new Match(match).save();
    console.log('Match saved to database');
});