const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const cors = require('cors');
const Match = require('./db/MatchSchema');
const Team = require('./db/TeamSchema');

app.use(express.json());
app.use(cors());


async function connect() {
    await mongoose.connect('mongodb+srv://ritabrata:ritabrata@cluster0.w9c9sfo.mongodb.net/CTMS');
    console.log('Connected to database');
}

connect();

app.get('/matches', async(req, res) => {
    const response = await Match.find({});
    res.send(response);
});


app.get('/teams', async(req, res) => {
    const response = await Team.find();
    console.log(response)
    res.send(response);
});

app.post('/team/new', async(req, res) => {
    const team = req.body;
    const newTeam = new Team(team);
    await newTeam.save();
    res.send(newTeam);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);


