'use strict';
const {
  Model
} = require('sequelize');
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
  transactionAccounts.init({
    accessId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    transactionType: DataTypes.STRING,
    accessType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactionAccounts',
  });
  return transactionAccounts;
};