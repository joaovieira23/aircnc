const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.store);

module.exports = routes;