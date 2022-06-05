const express = require('express')
const path = require('path')
const router = require('./src/routes');

const engine = require('express-handlebars').engine

const app = express()

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'src','resources','views'));

app.use(express.static(path.join(__dirname,'src','public')));
app.use(express.static(path.join(__dirname,'src','public','css')));

router(app)

app.listen(3000,() => {console.log('Server start with port 3000');})