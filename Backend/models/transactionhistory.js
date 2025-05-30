"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactionHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactionHistory.init(
    {
      transaction_id: {
        type: DataTypes.INTEGER,
      },
      transactionReceipt: {
        type: DataTypes.STRING,
      },
      transactionName: {
        type: DataTypes.STRING,
      },
      transactionDescription: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.DECIMAL,
      },
      tax: {
        type: DataTypes.DECIMAL,
      },
      discountStatus: {
        type: DataTypes.BOOLEAN,
      },
      discount: {
        type: DataTypes.DECIMAL,
      },
      totalAmount: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      sequelize,
      modelName: "transactionHistory",
    }
  );
  return transactionHistory;
};
