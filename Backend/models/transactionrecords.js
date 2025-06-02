"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactionRecords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  transactionRecords.init(
    {
      record_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      },
      recordType: {
        type: DataTypes.STRING,
      },
      recordName: {
        type: DataTypes.STRING,
      },
      recordDescription: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "transactionRecords",
    }
  );
  return transactionRecords;
};
