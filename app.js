const express = require('express');
const bodyParser = require('body-parser');


//Importando rotas
const product = require('./routes/product.route');

const app = express();

//Conexão banco Mongo
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://rafael.teles:rt070990@ds049864.mlab.com:49864/productstutorial';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//configuração bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

let port = 8000;

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});