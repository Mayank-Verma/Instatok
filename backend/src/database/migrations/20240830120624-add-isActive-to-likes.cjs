module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("likes", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("likes", "isActive");
  },
};
