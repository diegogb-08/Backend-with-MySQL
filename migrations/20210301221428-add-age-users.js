'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users', // name of Source model
      'age', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.revomeColumn(
      'Users', // name of Source model
      'age', // name of the key we're adding 
    );
  }
};
