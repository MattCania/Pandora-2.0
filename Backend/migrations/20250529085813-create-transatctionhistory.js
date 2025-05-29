'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactionhistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionId: {
        type: Sequelize.INTEGER
      },
      transactionReceipt: {
        type: Sequelize.STRING
      },
      transactionName: {
        type: Sequelize.STRING
      },
      transactionDescription: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      tax: {
        type: Sequelize.DECIMAL
      },
      discountStatus: {
        type: Sequelize.BOOLEAN
      },
      discount: {
        type: Sequelize.DECIMAL
      },
      totalAmount: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transatctionhistories');
  }
};