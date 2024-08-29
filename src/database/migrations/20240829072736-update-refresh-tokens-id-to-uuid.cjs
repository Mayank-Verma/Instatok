"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("refresh_tokens", "id", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("refresh_tokens", "id", {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    });
  },
};
