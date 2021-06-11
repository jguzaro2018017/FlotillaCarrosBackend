/* Version Control 
Created: 2021-06-08
- Added CORS and Headers
- Added import libraries and routes
- Export Variable
Modified 2021-06-09
- Added code for use 'userRoutes'
*/
'use strict'

// Import Libraries and routes
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var commandsRoutes = require('./routes/cars-routes');
var userRoutes = require('./routes/users-routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Declaration of CORS and Headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use('/command', commandsRoutes);
app.use('/users', userRoutes);
module.exports = app;

