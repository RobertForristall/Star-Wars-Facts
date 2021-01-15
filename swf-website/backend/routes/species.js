const router = require('express').Router()

const request = require('request')

let Species = require('../models/species.model')

router.route('/add').post((req, res) => {
    newSpecies = new Species ({
        name: req.body.name,
        classification: req.body.classification,
        designation: req.body.designation,
        average_height: req.body.average_height,
        average_lifespan: req.body.average_lifespan,
        eye_colors: req.body.eye_colors,
        hair_colors: req.body.hair_colors,
        skin_colors: req.body.skin_colors,
        language: req.body.language,
        homeworld: req.body.homeworld,
        people: req.body.people,
        films: req.body.films,
        created: req.body.created,
        edited: req.body.edited,
    })

    newSpecies.save()
        .then(() => res.json("Species added to DB"))
        .catch(err => res.status(400).json("Error adding species to DB: " + err))
})

router.route('/get/swapi').get((req, res) => {
    request({
        uri: 'https://swapi.dev/api/species/'
    }).pipe(res)
})

router.route('/get').get((req, res) => {
    Species.find()
        .then(species => res.json(species))
        .catch(err => res.status(400).json("Error getting all species from DB: " + err))
})

router.route('/get/:name').get((req, res) => {
    Species.find({name: req.params.name})
        .then(species => res.json(species))
        .catch(err => res.status(400).json("Error getting species from DB: " + err))
})

router.route('/update/:id').put((req, res) => {
    Species.updateOne({_id: req.params.id}, {
        name: req.body.name,
        classification: req.body.classification,
        designation: req.body.designation,
        average_height: req.body.average_height,
        average_lifespan: req.body.average_lifespan,
        eye_colors: req.body.eye_colors,
        hair_colors: req.body.hair_colors,
        skin_colors: req.body.skin_colors,
        language: req.body.language,
        homeworld: req.body.homeworld,
        people: req.body.people,
        films: req.body.films,
        created: req.body.created,
        edited: req.body.edited,
    })
    .then(() => res.json("Species updated in DB"))
    .catch(err => res.status(400).json("Error updating species in DB: " + err))
})

router.route('/delete/:id').delete((req, res) => {
    Species.deleteOne({_id: req.params.id})
        .then(() => res.json("Species deleted from DB"))
        .catch(err => res.status(400).json("Error deleting species from DB: " + err))
})

module.exports = router