const mongoode = require('mongoose')

const userSchema = new mongoode.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })

const User = mongoode.model("User", userSchema)
module.exports = User    