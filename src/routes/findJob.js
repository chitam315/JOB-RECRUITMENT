const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const postController = require('../app/controllers/PostController')

const app = express();

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/:slug',postController.show)

router.get('/',urlencodedParser,postController.index)

module.exports = router