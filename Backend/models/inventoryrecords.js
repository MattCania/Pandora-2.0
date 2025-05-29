'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventoryRecords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inventoryRecords.init({
    inventoryId: DataTypes.INTEGER,
    inventoryName: DataTypes.STRING,
    inventoryDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'inventoryRecords',
  });
  return inventoryRecords;
};