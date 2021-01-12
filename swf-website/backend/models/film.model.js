const mongoose = require('mongoose')

const Schema = mongoose.Schema

const filmsSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    episode_id: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    opening_crawl: {
        type: String,
        required: true,
        trim: true,
    },
    director: {
        type: String,
        required: true,
        trim: true,
    },
    producer: [String],
    release_date: {
        type: Date,
        required: true,
    },
    characters: [String],
    planets: [String],
    starships: [String],
    vehicles: [String],
    species: [String],
    created: {
        type: Date,
        required: true,
    },
    edited: {
        type: Date,
        required: true,
    }
})

const film = mongoose.model('film', filmsSchema)

module.exports = film