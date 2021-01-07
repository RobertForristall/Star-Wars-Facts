const mongoose = require('mongoose')

const Schema = mongoose.Schema

const speciesSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    classification: {
        type: String,
        required: true,
        trim: true,
    },
    designation: {
        type: String,
        required: true,
        trim: true,
    },
    average_height: {
        type: String,
        required: true,
        trim: true,
    },
    average_lifespan: {
        type: String,
        required: true,
        trim: true,
    },
    eye_colors: {
        type: String,
        required: true,
        trim: true,
    },
    hair_colors: {
        type: String,
        required: true,
        trim: true,
    },
    skin_colors: {
        type: String,
        required: true,
        trim: true,
    },
    language: {
        type: String,
        required: true,
        trim: true,
    },
    homeworld: {
        type: String,
        required: true,
        trim: true,
    },
    people: [{
        type: String,
        trim: true,
    }],
    films: [{
        type: String,
        trim: true,
    }],
    created: {
        type: Date,
        required: true,
    },
    edited: {
        type: Date,
        required: true,
    }
})

const species = mongoose.model('species', speciesSchema)

module.exports = species