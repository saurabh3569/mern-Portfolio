const Project = require('../models/Projects')


// getallProjects
const getallProjects = async (req, res) => {

    try {
        const project = await Project.find({}).sort({ updatedAt: -1 })

        if (project.length === 0) return res.status(404).json('No Project available')

        res.status(200).json(project)
    } catch (error) {
        res.status(500).json(error)
    }

}


// addProject - Admin
const addProject = async (req, res) => {

    try {
        const project = await Project.create(req.body)

        if (!project) return res.status(403).json('Something Wrong')

        res.status(201).json('Project created successfully')
    } catch (error) {
        res.status(500).json(error)
    }

}


// editProject - Admin
const editProject = async (req, res) => {

    try {
        const project = await Project.findOne({ _id: req.params.id });
        project.image = req.body.image || project.image;
        project.live = req.body.live || project.live;
        project.github = req.body.github || project.github;
        project.about = req.body.about || project.about
        project.title = req.body.title || project.title

        await project.save();

        res.status(200).json('Project updated successfully')

    } catch (error) {
        res.status(500).json(error)
    }

}


// deleteProject - Admin
const deleteProject = async (req, res) => {

    try {
        const project = await Project.findByIdAndDelete(req.params.id)

        if (!project) return res.status(404).json('Project Not Found')

        res.status(200).json('Project Deleted Successfuly')
    } catch (error) {
        res.status(500).json(error)
    }

}


// getProject - Admin
const projectDetails = async (req, res) => {

    try {
        const project = await Project.findOne({_id : req.params.id})

        if (!project) return res.status(404).json('Project Not Found')

        res.status(200).json(project)
    } catch (error) {
        res.status(500).json(error)
    }

}




module.exports = { getallProjects, addProject, editProject, deleteProject, projectDetails }
