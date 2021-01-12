const router = require('express').Router()

let Planet = require('../models/planet.model')

router.route('/planets/add').post((req, res) => {

})

router.route('/planets/get').get((req, res) => {

})

router.route('/planets/get/:name').get((req, res) => {

})

router.route('/planets/update/:id').put((req, res) => {

})

router.route('/planets/delete/:id').delete((req, res) => {
    
})

module.exports = router