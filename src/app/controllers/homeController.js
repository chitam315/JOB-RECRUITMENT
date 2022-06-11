const users = require('../model/User')
const mongooseHandler = require('../../util/mongoose')

class HomeController{
    //[GET] /
    index(req,res,next){
        if (req.body) {
            res.render('home',{user: req.body})
        } else {
            res.render('home')
        }
    }

    //[GET] /login
    login(req,res,next){
        res.render('login',{user: req.body})
    }

    //[GET] /signup
    signup(req,res,next){
        res.render('signup',{user: req.body})
    }

    //[POST] /store-account
    storeAccount(req,res,next){
        const formBody = req.body;
        users.findOne({email: formBody.email})
            .then(user => {
                if (user) {
                    res.status(401).end('Incorrect Username and/or Password!');
                } else {
                    const user = new users(formBody)
                    user.save((err) => {
                        if(err) {console.log('LỖI R'); res.send('ERROR!!')}
                        else{
                            res.render('home')
                        }
                    });
                }
            })
    }

    //[GET] /updatePass
    updatePass(req,res,next){
        res.render('updatePass',{user: req.body})
    }

    //[GET] /salary
    salary(req,res,next){
        res.render('salary',{user: req.body})
    }

    //[POST] /validate
    validate(req,res,next){
        const formBody = req.body
        users.findOne({email: formBody.email, password: formBody.password},(err,doc) => {
            if (err) {
                res.send('err')
            } else {
                res.render('home',{
                    user: mongooseHandler.mongooseToObject(doc)
                })
            }
        })
    }

    //[POST] /logout
    logout(req,res,next){
        const formBody = req.body
        res.render('home',{
            user: formBody
        })
    }
}

module.exports = new HomeController()