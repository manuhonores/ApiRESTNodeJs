const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv/config');

const bodyParser = require('body-parser');

//Import routes
const productsRoute = require('./routes/products');
const salesRoute = require('./routes/sales');

//Middleware

app.use(bodyParser.json());

//Cada vez que ingrese a /products, consulto las rutas de products 
app.use('/products', productsRoute);
app.use('/sales', salesRoute);

//Un middleware es un bloque de código que se ejecuta entre la petición que hace el 
//usuario (request) hasta que la petición llega al servidor.


//Conectar a mongo
//ENV sirve para ocultar los datos de conexión a la base

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Conectado a la base')
);

//El puerto que se va a levantar
app.listen(8080);