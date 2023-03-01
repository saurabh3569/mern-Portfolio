const router = require('express').Router()

const { addProject, editProject, deleteProject, getallProjects, projectDetails } = require('../controllers/projectController')
const protect = require('../middleware/authMiddleware')



// add project
router.post('/', protect, addProject)

// edit project
router.put('/:id', protect, editProject)

// delete project
router.delete('/:id', protect, deleteProject)

// get all project
router.get('/', getallProjects)

// get project
router.get('/:id', protect, projectDetails)


module.exports = router