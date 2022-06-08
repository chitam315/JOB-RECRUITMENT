const fetch = require('node-fetch')

const posts = require('../model/Post')
const mongooseHandler = require('../../util/mongoose')
const { post } = require('../../routes/home')

class PostController {
    //[GET] /post
    index(req, res, next) {
        posts.find({})
            .then((posts) => {
                res.render('findJob',{
                    posts: mongooseHandler.multipleMongooseToObject(posts)
                })
            })        
    }

    show(req,res,next){
        posts.findOne({slug: req.params.slug})
            .then(post => {
                res.send(post)
            })
    }
    
}

module.exports = new PostController

//call API and add to database
        /*const post = await fetch('http://localhost:3000/post')
        const data = await post.json();

        await data.forEach((element) => {
            const post = new posts(element);
            post.save((err) => {
                if (err) { console.log(err) }
            })
        })
        res.send('successful')*/