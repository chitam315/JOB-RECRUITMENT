class HomeController{
    //[GET] /
    index(req,res,next){
        res.render('home')
    }

    //[GET] /login
    login(req,res,next){
        res.render('login')
    }

    //[GET] /signup
    signup(req,res,next){
        res.render('signup')
    }
}

module.exports = new HomeController()