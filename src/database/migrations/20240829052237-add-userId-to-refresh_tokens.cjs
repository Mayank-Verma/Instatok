'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('refresh_tokens', 'userId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'users', // Name of the table
        key: 'id', // Key in the users table that we're referencing
      },
      onUpdate: 'CASCADE', // If the referenced user id is updated, the change will cascade
      onDelete: 'CASCADE', // If the user is deleted, the refresh token will also be deleted
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('refresh_tokens', 'userId');
  }
};
