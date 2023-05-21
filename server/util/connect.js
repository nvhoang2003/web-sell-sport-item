const Sequelize = require('sequelize')

const DB_NAME = 'webbando'
const DB_USERNAME = 'root'
const DB_PASSWORD = ''

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
})

module.exports = sequelize
