const express = require('express')
const bodyParser = require('body-parser')

const jwt = require('jsonwebtoken')

const router = express.Router()
const app = express();

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const homeController = require('../app/controllers/homeController')

router.get('/',urlencodedParser ,homeController.index)

router.get('/login',urlencodedParser , homeController.login)

router.get('/signup',urlencodedParser , homeController.signup)

// POST /login gets urlencoded bodies
router.post('/store-account', urlencodedParser ,homeController.storeAccount)

router.post('/login', urlencodedParser ,homeController.validate)

router.get('/updatePass',urlencodedParser , homeController.updatePass)

router.get('/salary',urlencodedParser ,homeController.salary)

router.post('/logout',urlencodedParser,homeController.logout)

const searchController = require('../app/controllers/searchController')

// router.get('/:slug',searchController.show)
router.get('/result',searchController.find)

module.exports = router