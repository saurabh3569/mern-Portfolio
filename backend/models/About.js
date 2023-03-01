const mongoode = require('mongoose')

const aboutSchema = new mongoode.Schema({

    about: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        default: []
    },
    resume: {
        type: String,
        required: true
    }
}, { timestamps: true })

const About = mongoode.model("About", aboutSchema)
module.exports = About    