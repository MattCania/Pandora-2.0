"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class inventoryAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      inventoryAccounts.belongsTo(models.userAccounts, {
				foreignKey: "account_id",
				targetKey: "user_id",
				as: "child_uid",
				onDelete: "CASCADE",
    		onUpdate: 'CASCADE'
			});
      inventoryAccounts.belongsTo(models.inventoryRecords, {
				foreignKey: "inventory_id",
				targetKey: "inventory_id",
				as: "child_invid",
				onDelete: "CASCADE",
    		onUpdate: 'CASCADE'
			});
    }
  }
  inventoryAccounts.init(
    {
      access_id: {
        type: DataTypes.INTEGER,
      },
      inventory_id: {
        type: DataTypes.INTEGER,
      },
      account_id: {
        type: DataTypes.INTEGER,
      },
      accessType: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "inventoryAccounts",
    }
  );
  return inventoryAccounts;
};
