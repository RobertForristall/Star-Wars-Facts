const router = require('express').Router()

const request = require('request')

let Starship = require('../models/starship.model')

router.route('/add').post((req, res) => {
    newStarship = new Starship ({
        name: req.body.name,
        model: req.body.model,
        starship_class: req.body.starship_class,
        manufacturer: req.body.manufacturer,
        cost_in_credits: req.body.cost_in_credits,
        length: req.body.length,
        crew: req.body.crew,
        passengers: req.body.passengers,
        max_astmosphering_speed: req.body.max_astmosphering_speed,
        hyperdrive_rating: req.body.hyperdrive_rating,
        MGLT: req.body.MGLT,
        cargo_capacity: req.body.cargo_capacity,
        consumables: req.body.consumables,
        films: req.body.films,
        pilots: req.body.pilots,
        created: req.body.created,
        edited: req.body.edited,
    })

    newStarship.save()
        .then(() => res.json("Starship added to DB"))
        .catch(err => res.status(400).json("Error adding starship to DB: " + err))
})

router.route('/get/swapi').get((req, res) => {
    request({
        uri: 'https://swapi.dev/api/starships/'
    }).pipe(res)
})

router.route('/get').get((req, res) => {
    Starship.find()
        .then(starships => res.json(starships))
        .catch(err => res.status(400).json("Error getting starships from DB: " + err))
})

router.route('/get/:name').get((req, res) => {
    Starship.find({name: req.params.name})
        .then(starship => res.json(starship))
        .catch(err => res.status(400).json("Error getting starship from DB: " + err))
})

router.route('/update/:id').put((req, res) => {
    Starship.updateOne({_id: req.params.id}, {
        name: req.body.name,
        model: req.body.model,
        starship_class: req.body.starship_class,
        manufacturer: req.body.manufacturer,
        cost_in_credits: req.body.cost_in_credits,
        length: req.body.length,
        crew: req.body.crew,
        passengers: req.body.passengers,
        max_astmosphering_speed: req.body.max_astmosphering_speed,
        hyperdrive_rating: req.body.hyperdrive_rating,
        MGLT: req.body.MGLT,
        cargo_capacity: req.body.cargo_capacity,
        consumables: req.body.consumables,
        films: req.body.films,
        pilots: req.body.pilots,
        created: req.body.created,
        edited: req.body.edited,
    })
    .then(() => res.json("Starship updated in DB"))
    .catch(err => res.status(400).json("Error updating starship in DB: " + err))
})

router.route('/delete/:id').delete((req, res) => {
    Starship.deleteOne({_id: req.params.id})
        .then(() => res.json("Starship deleted from DB"))
        .catch(err => res.status(400).json("Error deleting starship from DB: " + err))
})

module.exports = router