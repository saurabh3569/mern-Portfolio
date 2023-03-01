const mongoode = require('mongoose')

const projectSchema = new mongoode.Schema({

    title: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    }, 
    live: {
        type: String
    },
    github: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },

}, { timestamps: true })

const Project = mongoode.model("Project", projectSchema)
module.exports = Project    