const mongoode = require('mongoose')

const contactSchema = new mongoode.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },

}, { timestamps: true })

const Contact = mongoode.model("Contact", contactSchema)
module.exports = Contact    