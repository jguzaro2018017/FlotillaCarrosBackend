/* Version Control 
Created: 2021-06-09
- Import express and userController
- Added methods get, post, put and delete
- Export Variable 'api'
Modified: 2021-06-10
- Add Middleware
*/
'use strict'

// Import libraries and controller
var express = require('express');
const app = require('../app');
var userController = require('../controllers/user-controller');
var api = express.Router();
var mdAuth = require('../middlewares/authenticated');

// Routes and function to use for queries
api.post('/registerUser', userController.registerUser);
api.get('/findOneUser', userController.findOneUser);
api.get('/findAllUsers', mdAuth.ensureAuthAdmin, userController.findUsers);
api.delete('/deleteUser', userController.deleteUser);
api.put('/updateUser', userController.updateUser);
api.post('/login', userController.login);

// Export variable
module.exports = api;