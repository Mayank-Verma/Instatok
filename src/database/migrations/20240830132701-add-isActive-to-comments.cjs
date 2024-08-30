module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts_comments", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("posts_comments", "isActive");
  },
};
