'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('store_areas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      area_name: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('store_areas');
  }
};