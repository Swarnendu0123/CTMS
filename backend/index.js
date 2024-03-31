const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const cors = require('cors');
const Match = require('./db/MatchSchema');

app.use(express.json());
app.use(cors());


async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/cricketDb');
    console.log('Connected to database');
}

connect();

app.get('/matches', async(req, res) => {
    const response = await Match.find({});
    res.send(response);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);


