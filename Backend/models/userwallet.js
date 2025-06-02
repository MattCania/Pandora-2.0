"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userWallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userWallet.belongsTo(models.userAccounts, {
				foreignKey: "user_id",
				targetKey: "user_id",
				as: "child_uid",
				onDelete: "CASCADE",
    		onUpdate: 'CASCADE'
			});
    }
  }
  userWallet.init(
    {
      wallet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      currency: {
        type: DataTypes.STRING,
      },
      balance: {
        type: DataTypes.STRING,
      },
      incomePeriod: {
        type: DataTypes.ENUM('quarterly', 'weekly', 'semi-monthly', 'monthly', 'annually')
      },
      incomeAmount: {
        type: DataTypes.DECIMAL
      }
    },
    {
      sequelize,
      modelName: "userWallet",
    }
  );
  return userWallet;
};
