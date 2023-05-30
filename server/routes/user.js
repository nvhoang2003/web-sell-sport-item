const express = require('express')
const routes = express.Router()
const userController = require('../controllers/user')

const isAdmin = require('../middleware/isAdmin')

routes.get('/users', isAdmin, userController.getAllUsers)
routes.post('/user', isAdmin, userController.AddUser)

module.exports = routes
