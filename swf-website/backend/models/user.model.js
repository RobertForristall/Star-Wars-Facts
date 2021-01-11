const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    isVerified: {
        type: Boolean,
        required: true
    },
    verificationKey: {
        type: String,
        required: true
    },
    sequrityQuestions: [{
        Question: {
            type: String,
            required: true
        },
        Answer: {
            type: String,
            required: true,
            trim: true,
            minlength: 5
        }
    }],
    birthday: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
})

const user = mongoose.model('user', userSchema)

module.exports = user