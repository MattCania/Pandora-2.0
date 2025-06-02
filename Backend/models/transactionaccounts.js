"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactionAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactionAccounts.init(
    {
      access_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      },
      transaction_id: {
        type: DataTypes.INTEGER,
      },
      transactionType: {
        type: DataTypes.STRING,
      },
      accessType: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "transactionAccounts",
    }
  );
  return transactionAccounts;
};
