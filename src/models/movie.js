const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        filmtv_id: {
            type: Number
        },
        avg_vote: {
            type: Number,
        },
        duration: {
            type: Number
        },
        directors: {
            type: String
        },
        actors: {
            type: String
        },
        years: {
            type: Number
        },
        genre: {
            type: String
        },
        country: {
            type: String
        },
        total_votes: {
            type: Number
        },
        favoriteCount: {
            type: Number,
            default: 0
        },
        favoritedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;