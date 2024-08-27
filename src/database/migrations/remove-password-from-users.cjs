'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove the password column from the users table
    await queryInterface.removeColumn('users', 'password');
  },

  down: async (queryInterface, Sequelize) => {
    // Re-add the password column in case of rollback
    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false, // Adjust this based on your original schema
    });
  }
};
