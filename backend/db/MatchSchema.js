const { default: mongoose, Schema } = require("mongoose");

const MatchSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    team1: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    team1Platers: [
        {
            id: {
                type: Number,
                required: true
            },
            playerName: {
                type: String,
                required: true
            },
            position: {
                type: String,
                required: true
            },
            score: {
                type: Number,
                required: true
            },
            wickets: {
                type: Number,
                required: true
            }
        }
    ],
    team2Platers: [
        {
            id: {
                type: Number,
                required: true
            },
            playerName: {
                type: String,
                required: true
            },
            position: {
                type: String,
                required: true
            },
            score: {
                type: Number,
                required: true
            },
            wickets: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Match', MatchSchema);