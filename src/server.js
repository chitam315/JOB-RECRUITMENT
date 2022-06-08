const express = require('express')
const path = require('path')
var methodOverride = require('method-override')
const engine = require('express-handlebars').engine

const router = require('./routes');
const db = require('./config/db')

const app = express()

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources','views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public','css')));

db.connect()

//override with POST having ?_method=PATCH
 app.use(methodOverride('_method'))
router(app)

app.listen(3000,() => {console.log('Server start with port 3000');})