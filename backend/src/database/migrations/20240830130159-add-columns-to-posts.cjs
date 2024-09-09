module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "description", {
      type: Sequelize.TEXT,
      allowNull: true, // This allows the description to be optional
    });

    await queryInterface.addColumn("posts", "isPublic", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Default value set to true
    });

    await queryInterface.addColumn("posts", "allowComments", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Default value set to true
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("posts", "description");
    await queryInterface.removeColumn("posts", "isPublic");
    await queryInterface.removeColumn("posts", "allowComments");
  },
};
