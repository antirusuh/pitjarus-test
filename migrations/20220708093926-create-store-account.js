'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('store_accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      account_name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('store_accounts');
  }
};