const mongoose = require('mongoose')

const Schema = mongoose.Schema

const starshipSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    model: {
        type: String,
        required: true,
        trim: true,
    },
    starship_class: {
        type: String,
        required: true,
        trim: true,
    },
    manufacturer: {
        type: String,
        required: true,
        trim: true,
    },
    cost_in_credits: {
        type: String,
        required: true,
        trim: true,
    },
    length: {
        type: String,
        required: true,
        trim: true,
    },
    crew: {
        type: String,
        required: true,
        trim: true,
    },
    passengers: {
        type: String,
        required: true,
        trim: true,
    },
    max_astmosphering_speed: {
        type: String,
        required: true,
        trim: true,
    },
    hyperdrive_rating: {
        type: String,
        required: true,
        trim: true,
    },
    MGLT: {
        type: String,
        required: true,
        trim: true,
    },
    cargo_capacity: {
        type: String,
        required: true,
        trim: true,
    },
    consumables: {
        type: String,
        required: true,
        trim: true,
    },
    films: [{
        type: String,
        trim: true,
    }],
    pilots: [{
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

const starship = mongoose.model('starship', starshipSchema)

module.exports = starship