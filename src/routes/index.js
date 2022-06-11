const homeRouter = require('./home')
const findJobRouter = require('./findJob')
const searchJobRouter = require('./searchJob')

function router(app){
    app.use('/',homeRouter);
    
    app.use('/find-job',findJobRouter);

    app.use('/',searchJobRouter)
}

module.exports = router