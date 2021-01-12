const router = require('express').Router()

let Vehicle = require('../models/vehicle.model')

router.route('/vehicles/add').post((req, res) => {

})

router.route('/vehicles/get').get((req, res) => {

})

router.route('/vehicles/get/:name').get((req, res) => {

})

router.route('/vehicles/update/:id').put((req, res) => {

})

router.route('/vehicles/delete/:id').delete((req, res) => {
    
})

module.exports = router