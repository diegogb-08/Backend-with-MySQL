'use strict';

const user = require("../models/user");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Eva',
        genre: 'H',
        age: 36,
        email: "user@user",
        phoneNumber: 12345678,
        dni: "123456789A",
        pathologies: "backpain",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Adan',
        genre: 'M',
        age: 36,
        email: "user2@user2",
        phoneNumber: 123456789,
        dni: "123456789B",
        pathologies: "backpain",
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
