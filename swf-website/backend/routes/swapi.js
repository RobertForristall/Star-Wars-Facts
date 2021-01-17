const router = require('express').Router()

const request = require('request')

function getAllFilms () {
    request('https://swapi.dev/api/films/', (err, res) => {
        if (err) return err
        console.log(res.body)
        return(res)
    })
}

router.route('/swapi/all').get((req, res) => {
    const films = getAllFilms()
    res.json(films)
})

module.exports = router