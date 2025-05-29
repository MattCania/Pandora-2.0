'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactionRecords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactionRecords.init({
    recordId: DataTypes.INTEGER,
    recordType: DataTypes.STRING,
    recordName: DataTypes.STRING,
    recordDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactionRecords',
  });
  return transactionRecords;
};