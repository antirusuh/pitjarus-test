'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      account_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'store_account'
          },
          key: 'account_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      area_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'store_area'
          },
          key: 'area_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      is_active: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stores');
  }
};