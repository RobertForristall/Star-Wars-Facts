const mongoose = require('mongoose')

const Schema = mongoose.Schema

const peopleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    height: {
        type: String,
        required: true,
        trim: true,
    },
    mass: {
        type: String,
        required: true,
        trim: true,
    },
    hair_color: {
        type: String,
        required: true,
        trim: true,
    },
    skin_color: {
        type: String,
        required: true,
        trim: true,
    },
    eye_color: {
        type: String,
        required: true,
        trim: true,
    },
    birth_year: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    homeworld: {
        type: String,
        required: true,
        trim: true,
    },
    films: [{
        type: String
    }],
    species: [{
        type: String
    }],
    vehicles: [{
        type: String
    }],
    starships: [{
        type: String,
        trim: true,
        minlength: 5
    }],
    created: {
        type: Date,
        required: true,
    },
    editied: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
})

const person = mongoose.model('person', peopleSchema)

module.exports = person