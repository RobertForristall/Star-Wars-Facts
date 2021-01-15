const router = require('express').Router()

const request = require('request')

let Person = require('../models/person.model')

router.route('/add').post((req, res) => {

    newPerson = new Person({
        name: req.body.name,
        height: req.body.height,
        mass: req.body.mass,
        hair_color: req.body.hair_color,
        skin_color: req.body.skin_color,
        eye_color: req.body.eye_color,
        birth_year: req.body.birth_year,
        gender: req.body.gender,
        homeworld: req.body.homeworld,
        films: req.body.films,
        species: req.body.species,
        vehicles: req.body.vehicles,
        starships: req.body.starships,
        created: req.body.created,
        edited: req.body.edited,
    })

    newPerson.save()
        .then(() => res.json("Person added to the DB"))
        .catch(err => res.status(400).json("Error adding Person to the DB: " + err))
})

router.route('/get/swapi').get((req, res) => {
    request({
        uri: 'https://swapi.dev/api/people/',
    }).pipe(res)
})

router.route('/get').get((req, res) => {
    Person.find()
        .then(people => res.json(people))
        .catch(err => res.status(400).json("Error getting people from DB: " + err))
})

router.route('/get/:name').get((req, res) => {
    Person.find({name: req.params.name})
        .then(person => res.json(person))
        .catch(err => res.status(400).json("Error getting person from DB: " + err))
})

router.route('/update/:id').put((req, res) => {
    Person.updateOne({_id: req.params.id}, {
        name: req.body.name,
        height: req.body.height,
        mass: req.body.mass,
        hair_color: req.body.hair_color,
        skin_color: req.body.skin_color,
        eye_color: req.body.eye_color,
        birth_year: req.body.birth_year,
        gender: req.body.gender,
        homeworld: req.body.homeworld,
        films: req.body.films,
        species: req.body.species,
        vehicles: req.body.vehicles,
        starships: req.body.starships,
        created: req.body.created,
        edited: req.body.edited,
    })
    .then(() => res.json("Person updated in DB"))
    .catch(err => res.status(400).json("Error updating person in DB: " + err))
})

router.route('/delete/:id').delete((req, res) => {
    Person.deleteOne({_id: req.params.id})
        .then(() => res.json("Person deleted from the DB"))
        .catch(err => res.status(400).json("Error deleting person from DB: " + err))
})

module.exports = router