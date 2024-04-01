const { Schema, default: mongoose } = require("mongoose");

const TeamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    coach: {
        type: String,
        required: true
    },
    captain: {
        type: String,
        required: true
    },
    MP: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    players: [
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
        }
    ]
});


module.exports = mongoose.model('Team', TeamSchema);