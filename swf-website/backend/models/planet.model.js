const mongoose = require('mongoose')

const Schema = mongoose.Schema

const planetSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    diameter: {
        type: String,
        required: true,
        trim: true,
    },
    rotation_period: {
        type: String,
        required: true,
        trim: true,
    },
    orbital_period: {
        type: String,
        required: true,
        trim: true,
    },
    gravity: {
        type: String,
        required: true,
        trim: true,
    },
    population: {
        type: String,
        required: true,
        trim: true,
    },
    climate: {
        type: String,
        required: true,
        trim: true,
    },
    terrain: {
        type: String,
        required: true,
        trim: true,
    },
    surface_water: {
        type: String,
        required: true,
        trim: true,
    },
    residents: [{
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

const planet = mongoose.model('planet', planetSchema)

module.exports = planet