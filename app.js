require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// TODO:require('hbs')
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/includes', function (err) {});
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando Bermudo',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {

    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {

    });
})

app.get('*', (req, res) => {
    res.render('404', {
        mensaje: 'Página no encontrada'
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  