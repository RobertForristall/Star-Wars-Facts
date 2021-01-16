const mongoose = require('mongoose')

/*
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Connection to MongoDB Atlas Succesful')
})
*/ 

let db

function connectToDatabase () {
    const uri = "mongodb+srv://RobertF:tbxy4218@poosd.fylio.azure.mongodb.net/Star-Wars-Facts?retryWrites=true&w=majority"

    mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

    db = mongoose.connection

    db.once('open', () => {
        console.log('Connection to MongoDB Atlas Succesful')
    })

    return db
}

module.exports = connectToDatabase()