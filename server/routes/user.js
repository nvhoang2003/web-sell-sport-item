const express = require('express')
const routes = express.Router()
const userController = require('../controllers/user')

routes.get('/users', userController.getAllUsers)
routes.post('/user', userController.AddUser)

module.exports = routes
