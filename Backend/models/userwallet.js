'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userwallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userwallet.init({
    walletId: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    balance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userwallet',
  });
  return userwallet;
};