// Arquivo de configuração e aplicação das dependencias no projeto

// const bodyParser = require('body-parser');
var express = require('express')
var app = express();
var consign = require('consign')();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'))
app.use(express.urlencoded({extended: true}));

consign
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;