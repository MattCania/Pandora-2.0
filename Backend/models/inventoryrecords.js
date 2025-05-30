"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class inventoryRecords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      inventoryRecords.hasMany(models.inventoryAccounts, {
        foreignKey: "inventory_id",
        as: "inventoryRecord_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  inventoryRecords.init(
    {
      inventory_id: {
        type: DataTypes.INTEGER,
      },
      inventoryName: {
        type: DataTypes.STRING,
      },
      inventoryDescription: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "inventoryRecords",
    }
  );
  return inventoryRecords;
};
