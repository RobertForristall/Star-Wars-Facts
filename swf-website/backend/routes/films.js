const router = require('express').Router()

const got = require('got')

let Film = require('../models/film.model')

router.route('/films/add').post((req, res) => {
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
    })

    newFilm.save()
        .then((film) => {res.json(film)})
        .catch(err => res.status(400).json("Error adding new Film: " + err))
})

router.route('/films/get/swapi').get((req, res) => {
    (async () => {
        try{
            const response = await got('https://swapi.dev/api/films/')
            res.json(response)
            console.log(res.body)
        }catch (err) {
            console.log(err.response.body)
        }
    })
})
router.route('/films/get/:name').get((req, res) => {

})

router.route('/films/update/:id').put((req, res) => {

})

router.route('/films/delete/:id').delete((req, res) => {

})

module.exports = router