const About = require('../models/About')


// getabouts
const getallabouts = async (req, res) => {

    try {
        const about = await About.find({}).sort({ createdAt: -1 })

        if (about.length === 0) return res.status(404).json('No about available')

        res.status(200).json(about[0])
    } catch (error) {
        res.status(500).json(error)
    }

}


// addabout - Admin
const addabout = async (req, res) => {

    try {
        const about = await About.create(req.body)

        if (!about) return res.status(403).json('Something Wrong')

        res.status(201).json(about)
    } catch (error) {
        res.status(500).json(error)
    }

}


// editabout - Admin
const editabout = async (req, res) => {

    try {
        const newAbout = await About.findOne({ _id: req.params.id });
        newAbout.about = req.body.about || newAbout.about;
        newAbout.skills = req.body.skills || newAbout.skills;
        newAbout.resume = req.body.resume || newAbout.resume;

        await newAbout.save();

        res.status(200).json('about updated successfully')

    } catch (error) {
        res.status(500).json(error)
    }

}





module.exports = { getallabouts, addabout, editabout }
