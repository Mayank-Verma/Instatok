'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'otp', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1234,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'otp');
  }
};
