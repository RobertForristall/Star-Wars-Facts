const router = require('express').Router()

const request = require('request-promise')
const baseUrl = 'https://swapi.dev/api/'
const urls = [
    baseUrl + 'people/',
    baseUrl + 'people/?page=2',
    baseUrl + 'people/?page=3',
    baseUrl + 'people/?page=4',
    baseUrl + 'people/?page=5',
    baseUrl + 'people/?page=6',
    baseUrl + 'people/?page=7',
    baseUrl + 'people/?page=8',
    baseUrl + 'people/?page=9',
]

router.route('/swapi/all').get((req, res) => {
    const data = (() => {
        
    })
})

module.exports = router