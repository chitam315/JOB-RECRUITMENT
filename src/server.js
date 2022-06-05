const express = require('express')
const path = require('path')
const router = require('./routes');

const engine = require('express-handlebars').engine

const app = express()

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources','views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public','css')));

router(app)

app.listen(3000,() => {console.log('Server start with port 3000');})