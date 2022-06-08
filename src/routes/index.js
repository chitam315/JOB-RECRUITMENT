const homeRouter = require('./home')
const findJobRouter = require('./findJob')

function router(app){
    app.use('/',homeRouter);
    
    app.use('/find-job',findJobRouter);
}

module.exports = router