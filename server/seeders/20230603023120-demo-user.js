'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'admin',
        password: '12345678',
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {})
  },
}
