/* Version Control 
Created: 2021-06-09
- Import express and carsController
- Added methods get, post, put
- Export Variable
Modified 2021-06-010
- Added method delete 'api'
*/
'use strict'

// Import Libraries and Controller
var express = require('express');
var carsController = require('../controllers/cars-controller');
var api = express.Router();

// Routes to use for queries
api.get('/findAllCars', carsController.findAllCars);
api.post('/addCar', carsController.registerCar);
api.delete('/deleteCar/:automovilID', carsController.deleteCarInformation);
api.put('/updateCarInformation/:automovilID', carsController.updateCarInformation);
api.get('/findOneCar/:automovilID', carsController.findOneCar);

// Exort Variable
module.exports = api;