const { getallabouts, addabout, editabout } = require('../controllers/aboutController')
const protect = require('../middleware/authMiddleware')

const router = require('express').Router()


// add about
router.post('/', protect, addabout)

// edit about
router.put('/:id', protect, editabout)

// get about
router.get('/', getallabouts)


module.exports = router