const router = require('express').Router()

const request = require('request')

let Vehicle = require('../models/vehicle.model')

router.route('/add').post((req, res) => {
    newVehicle = new Vehicle ({
        name: req.body.name,
        model: req.body.model,
        vehicle_class: req.body.vehicle_class,
        manufacturer: req.body.manufacturer,
        length: req.body.length,
        cost_in_credits: req.body.cost_in_credits,
        crew: req.body.crew,
        passengers: req.body.passengers,
        max_atmoshpering_speed: req.body.max_atmoshpering_speed,
        cargo_capacity: req.body.cargo_capacity,
        consumables: req.body.consumables,
        films: req.body.films,
        pilots: req.body.pilots,
        created: req.body.created,
        edited: req.body.edited,
    })

    newVehicle.save()
        .then(() => res.json("Vehicle added to DB"))
        .catch(err => res.status(400).json("Error adding vehicle to DB: " + err))
})

router.route('/get/swapi').get((req, res) => {
    request({
        uri: 'https://swapi.dev/api/vehicles/'
    }).pipe(res)
})

router.route('/get').get((req, res) => {
    Vehicle.find()
        .then(vehicles => res.json(vehicles))
        .catch(err => res.status(400).json("Error getting vehicles from DB: " + err))
})

router.route('/get/:name').get((req, res) => {
    Vehicle.find({name: req.params.name})
        .then(vehicle => res.json(vehicle))
        .catch(err => res.status(400).json("Error getting vehicle from DB: " + err))
})

router.route('/update/:id').put((req, res) => {
    Vehicle.updateOne({_id: req.params.id}, {
        name: req.body.name,
        model: req.body.model,
        vehicle_class: req.body.vehicle_class,
        manufacturer: req.body.manufacturer,
        length: req.body.length,
        cost_in_credits: req.body.cost_in_credits,
        crew: req.body.crew,
        passengers: req.body.passengers,
        max_atmoshpering_speed: req.body.max_atmoshpering_speed,
        cargo_capacity: req.body.cargo_capacity,
        consumables: req.body.consumables,
        films: req.body.films,
        pilots: req.body.pilots,
        created: req.body.created,
        edited: req.body.edited,
    })
    .then(() => res.json("Vehicle updated in DB"))
    .catch(err => res.status(400).json("Error updating vehicle in DB: " + err))
})

router.route('/delete/:id').delete((req, res) => {
    Vehicle.deleteOne({_id: req.params.id})
        .then(() => res.json("Vehicle deleted from DB"))
        .catch(err => res.status(400).json("Error deleting vehicle from DB: " + err))
})

module.exports = router