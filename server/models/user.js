const Sequelize = require('sequelize')

const sequelize = require('../util/connect')

// Create database with define model of Sequelize
const User = sequelize.define(
  'user',
  {
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
      validate: {
        isEmail: {
          msg: 'Tên đăng nhập phải là email',
        },
      },
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
          msg: 'Mật khẩu không hợp lệ',
        },
      },
    },
  },
  {
    timestamps: false,
  }
)

module.exports = User
