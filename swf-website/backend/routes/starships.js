const router = require('express').Router()

let Starship = require('../models/starship.model')

router.route('/starships/add').post((req, res) => {

})

router.route('/starships/get').get((req, res) => {

})

router.route('/starships/get/:name').get((req, res) => {

})

router.route('/starships/update/:id').put((req, res) => {

})

router.route('/starships/delete/:id').delete((req, res) => {
    
})

module.exports = router