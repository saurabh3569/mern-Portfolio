const { addcontact, deletecontact, getallcontacts } = require('../controllers/contactController')
const protect = require('../middleware/authMiddleware')

const router = require('express').Router()


// add message
router.post('/', addcontact)

// delete message
router.delete('/:id', protect, deletecontact)

// get all messages
router.get('/', protect, getallcontacts)


module.exports = router