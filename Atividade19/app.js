const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

app.get('/', function (req, res) {
    res.render('home/index');
});

app.get('/formulario_adicionar_usuario', function (req, res) {
    res.render('admin/adicionar_usuario');
});

app.get('/informacao/historia', function (req, res) {
    res.render('informacao/historia');
});

app.get('/informacao/cursos', function (req, res) {
    res.render('informacao/cursos');
});

app.get('/informacao/professores', function (req, res) {
    res.render('informacao/professores');
});

app.listen(3000, function () {
    console.log('Servidor iniciado na porta 3000');
});

let app = require('./config/server');
let rotaHome = require('./routes/home')(app);
require('./app/routes/adicionar_usuario')(app);
require('./app/routes/historia')(app);
require('./app/routes/cursos')(app);
require('./app/routes/professores')(app);