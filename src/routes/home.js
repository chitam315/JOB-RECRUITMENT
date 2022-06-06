const express = require('express')
const router = express.Router()

const homeController = require('../app/controllers/homeController')

router.get('/',homeController.index)
router.get('/login',homeController.login)
router.get('/signup',homeController.signup)

module.exports = router