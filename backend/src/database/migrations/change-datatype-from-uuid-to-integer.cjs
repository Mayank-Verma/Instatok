'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.changeColumn('verification', 'otp', {
      type: Sequelize.INTEGER,
      allowNull: false, 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('verification', 'otp', {
      type: Sequelize.UUID,
      allowNull: false, 
    });
  }
};
