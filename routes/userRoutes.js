const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.patch('/profile', auth, userController.updateProfile)

module.exports = router