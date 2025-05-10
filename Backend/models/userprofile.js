'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
			userProfile.belongsTo(models.userAccounts, {
				foreignKey: "user_id",
				targetKey: "user_id",
				as: "child_uid",
				onDelete: "CASCADE",
    		    onUpdate: 'CASCADE'
			});
    }
  }
  userProfile.init({
    profile_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha: true
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha: true
      }
    },
    middlename: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    gender:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    address:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    }
  }, {
    sequelize,
    modelName: 'userProfile',
  });
  return userProfile;
};