const router = require('express').Router()

const { register, login, IsLogeedin } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

// IsLogeedin
router.get('/islogin', protect, IsLogeedin)

// register
router.post('/register', register)

// login
router.post('/login', login)


module.exports = router