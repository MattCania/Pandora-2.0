'use strict';
const bcrypt = require('bcryptjs')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userAccounts.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    securedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
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
    } 
  }, {
    sequelize,
    modelName: 'userAccounts',
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.securedPassword = await bcrypt.hash(user.securedPassword, salt);
      },
    }
  });
  return userAccounts;
};