'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    genre: DataTypes.STRING,
    phoneNumber: {
      type:DataTypes.NUMBER,
      primaryKey: true
    },
    dni: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    pathologies: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};