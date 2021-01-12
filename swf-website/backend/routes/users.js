const router = require('express').Router()

const jwt = require('jsonwebtoken')

const crypto = require('crypto')

const nodemailer = require('nodemailer')

let User = require('../models/user.model')

const transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
        user: 'forristallcontacts@gmail.com',
        pass: 'tbxy4218'
    }

})

function authenticateToken(req, res, next) {
    const authHeader = req.heders['authorization']

    if (authHeader.split(' ')[0] !== 'Bearer') return res.status(403).json('Token Authorization Failed, error code: TA1')

    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).json('Missing Token')

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.status(403).json('Token Authorization Failed, error code: TA2')

        req.user = user
        next()
    })
}

function sendVerificationEmail(user) {
    const mailOptions = {
        from: 'forristallcontacts@gmail.com',

        to: user.email,

        subject: 'Email Verification - Star Wars Facts',

        html: '<p>Click <a href="http://localhost:5000/users/verify/' + user.verificationKey + '">here</a> to verify your email</p>'
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err)

        else console.log('Email sent: ' + info.response)
    })
}

router.route('/login').post((req, res) => {

})

router.route('/signup').post((req, res) => {

})

router.route('/update/:id').put((req, res) => {

})

router.route('/verify/:verificationKey').get((req, res) => {

})

router.route('/delete/:id').delete((req, res) => {
    
})

module.exports = router

