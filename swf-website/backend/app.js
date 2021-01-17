const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require("./db_conn")

require('dotenv').config()

const app = express()

app.use(bodyParser.json())

app.use(cors())

const port = process.env.PORT || 5000

const connection = db

const usersRouter = require('./routes/users')
const filmsRouter = require('./routes/films')
const peopleRouter = require('./routes/people')
const planetsRouter = require('./routes/planets')
const speciesRouter = require('./routes/species')
const starshipsRouter = require('./routes/starships')
const vehiclesRouter = require('./routes/vehicles')
const swapiRouter = require('./routes/swapi')

app.use('/users', usersRouter)
app.use('/films', filmsRouter)
app.use('/people', peopleRouter)
app.use('/planets', planetsRouter)
app.use('/species', speciesRouter)
app.use('/starships', starshipsRouter)
app.use('/vehicles', vehiclesRouter)
app.use('/swapi', swapiRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

module.exports = app