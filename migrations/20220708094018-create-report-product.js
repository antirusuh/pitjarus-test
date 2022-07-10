'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('report_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'store'
          },
          key: 'store_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'product'
          },
          key: 'product_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      compliance: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tanggal: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('report_products');
  }
};