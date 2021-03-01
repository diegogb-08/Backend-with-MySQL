'use strict';

const { time } = require("console");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // Adding kinship to Appointments

    return queryInterface.addColumn(
      'Appointments', // name of Source model
      'customerId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        before: time,
        references: {
          model: 'Users', // name of Target model
          key: 'id' // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.revomeColumn(
      'Appointments', // name of Source model
      'customerId', // name of the key we're adding 
    );
  }
};
