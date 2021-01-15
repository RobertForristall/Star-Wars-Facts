const router = require('express').Router()

const request = require('request')

let Planet = require('../models/planet.model')

router.route('/add').post((req, res) => {
    newPlanet = new Planet({
        name: req.body.name,
        diameter: req.body.diameter,
        rotation_period: req.body.rotation_period,
        orbital_period: req.body.orbital_period,
        gravity: req.body.gravity,
        population: req.body.population,
        climate: req.body.climate,
        terrain: req.body.terrain,
        surface_water: req.body.surface_water,
        residents: req.body.residents,
        films: req.body.films,
        created: req.body.created,
        edited: req.body.edited,
    })

    newPlanet.save()
        .then(() => res.json("Planet added to DB"))
        .catch(err => res.status(400).json("Error adding planet to DB: " + err))
})

router.route('/get/swapi').get((req, res) => {
    request({
        uri: 'https://swapi.dev/api/planets/',
    }).pipe(res)
})

router.route('/get').get((req, res) => {
    Planet.find()
        .then(planets => res.json(planets))
        .catch(err => res.status(400).json("Error getting planets from DB: " + err))
})

router.route('/get/:name').get((req, res) => {
    Planet.find({name: req.params.name})
        .then(planet => res.json(planet))
        .catch(err => res.status(400).json("Error getting planet from DB: " + err))
})

router.route('/update/:id').put((req, res) => {
    Planet.updateOne({_id: req.params.id}, {
        name: req.body.name,
        diameter: req.body.diameter,
        rotation_period: req.body.rotation_period,
        orbital_period: req.body.orbital_period,
        gravity: req.body.gravity,
        population: req.body.population,
        climate: req.body.climate,
        terrain: req.body.terrain,
        surface_water: req.body.surface_water,
        residents: req.body.residents,
        films: req.body.films,
        created: req.body.created,
        edited: req.body.edited,
    })
    .then(() => res.json("Planet updated in DB"))
    .catch(err => res.status(400).json("Error updating planet in DB: " + err))
})

router.route('/delete/:id').delete((req, res) => {
    Planet.deleteOne({_id: req.params.id})
        .then(() => res.json("Planet deleted from DB"))
        .catch(err => res.status(400).json("Error deleting planet from DB"))
})

module.exports = router