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
      userAccounts.hasOne(models.userProfile, {
        foreignKey: "user_id",
        as: "profile_uid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      userAccounts.hasOne(models.userWallet, {
        foreignKey: "user_id",
        as: "wallet_uid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      userAccounts.hasMany(models.inventoryAccounts, {
        foreignKey: "user_id",
        as: "inventories_uid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      userAccounts.hasMany(models.transactionAccounts, {
        foreignKey: "user_id",
        as: "transactions_uid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      userAccounts.hasMany(models.transactionHistory, {
        foreignKey: "user_id",
        as: "transactionHistory_uid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      userAccounts.hasMany(models.transactionRecords, {
        foreignKey: "user_id",
        as: "record_uid",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      userAccounts.hasMany(models.inventoryRecords, {
        foreignKey: "user_id",
        as: "inventory",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
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