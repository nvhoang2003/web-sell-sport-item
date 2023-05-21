const Sequelize = require('sequelize')

const sequelize = require('../util/connect')

// Create database with define model of Sequelize
const User = sequelize.define('user', {
  // field primary key and type is String
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = User
