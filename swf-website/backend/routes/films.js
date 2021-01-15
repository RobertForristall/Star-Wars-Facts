const router = require('express').Router()

const request = require('request')

const stream = require('stream')

const {promisify} = require('util')

const got = require('got')

let Film = require('../models/film.model')
const { ServerResponse } = require('http')

const pipeline = promisify(stream.pipeline)

router.route('/add').post((req, res) => {
    const title = req.body.title
    const episode_id = req.body.episode_id
    const opening_crawl = req.body.opening_crawl
    const director = req.body.director
    const producer = req.body.producer
    const release_date = req.body.release_date
    const characters = req.body.characters
    const planets = req.body.planets
    const starships = req.body.starships
    const vehicles = req.body.vehicles
    const species = req.body.species
    const created = req.body.created
    const edited = req.body.edited

    newFilm = Film({
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
        characters,
        planets,
        starships,
        vehicles,
        species,
        created,
        edited,
    })

    newFilm.save()
        .then((film) => {res.json(film)})
        .catch(err => res.status(400).json("Error adding new Film: " + err))
})

router.route('/get/swapi').get((req, res) => {
    request({
        uri: 'https://swapi.dev/api/films/',
    }).pipe(res)
})

router.route('/get').get((req, res) => {
    Film.find()
        .then(films => res.json(films))
        .catch(err => res.status(400).json("Error finding all Films from DB: " + err))
})

router.route('/get/:title').get((req, res) => {
    Film.find({title: req.params.title})
        .then(film => res.json(film))
        .catch(err => res.status(400).json("Error finding searched Film from DB: " + err))
})

router.route('/update/:id').put((req, res) => {

    const title = req.body.title
    const episode_id = req.body.episode_id
    const opening_crawl = req.body.opening_crawl
    const director = req.body.director
    const producer = req.body.producer
    const release_date = req.body.release_date
    const characters = req.body.characters
    const planets = req.body.planets
    const starships = req.body.starships
    const vehicles = req.body.vehicles
    const species = req.body.species
    const created = req.body.created
    const edited = req.body.edited

    const id = req.params.id

    Film.updateOne({_id: id}, {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
        characters,
        planets,
        starships,
        vehicles,
        species,
        created,
        edited
    })
    .then(() => res.json("Contact Updated from DB"))
    .catch(err => res.status(400).json("Error Updating Film in DB: " + err))
})

router.route('/delete/:id').delete((req, res) => {
    Film.deleteOne({_id: req.params.id})
        .then(() => res.json("Film Deleted from DB"))
        .catch(err => res.status(400).json("Error Deleting Film from DB"))
})

module.exports = router