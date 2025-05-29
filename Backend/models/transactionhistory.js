'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactionhistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactionhistory.init({
    transactionId: DataTypes.INTEGER,
    transactionReceipt: DataTypes.STRING,
    transactionName: DataTypes.STRING,
    transactionDescription: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    tax: DataTypes.DECIMAL,
    discountStatus: DataTypes.BOOLEAN,
    discount: DataTypes.DECIMAL,
    totalAmount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'transactionhistory',
  });
  return transactionhistory;
};