'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.changeColumn('verification', 'otp', {
      type: Sequelize.INTEGER,
      allowNull: false, // Or whatever constraints you need
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('verification', 'otp', {
      type: Sequelize.UUID,
      allowNull: false, // Or the original constraints
    });
  }
};
