const fetch = require('node-fetch')

const posts = require('../model/Post')
const mongooseHandler = require('../../util/mongoose')
const { post } = require('../../routes/home')
const bodyParser = require('body-parser')
var express = require('express')
var app = express()
app.use(express.urlencoded({ extended: true }))

class searchController{
    find(req, res,next){
        var keyword = {$regex: req.query.search, $options: "$i"}
        posts.find({$or: [{jobCategory:keyword},{name:keyword},{location:keyword}]})
        .then((posts) => {
            res.render('findJob',{
                posts: mongooseHandler.multipleMongooseToObject(posts)
            })
        })  
    }

}

module.exports = new searchController