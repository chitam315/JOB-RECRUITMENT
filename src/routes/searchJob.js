const express = require('express')
const router = express.Router()

const searchController = require('../app/controllers/searchController')


// router.get('/:slug',searchController.show)
router.get('/result',searchController.find)

module.exports = router