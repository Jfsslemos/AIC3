const express = require('express');
const userController = require('../controller/userController');

const userRoutes = express.Router();

userRoutes.use('/user', userController.getUser);

module.exports = userRoutes;