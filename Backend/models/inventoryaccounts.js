'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventoryAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inventoryAccounts.init({
    accessId: DataTypes.INTEGER,
    inventoryId: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER,
    accessType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'inventoryAccounts',
  });
  return inventoryAccounts;
};