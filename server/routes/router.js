const express = require('express');
const route = express.Router()

const services = require('../services/render');

route.get('/',services.homeRoute);
route.get('/add-user',services.add_user);
route.get('/update-user',services.update_user);


//---- crud methods----

//create method
route.post('/api/students',controller.create);

route.get('/api/students',controller.find);
//update method
route.put('/api/students/:id',controller.update);

//delete method
route.delete('/api/students.:id',controller.delete);


module.exports = route