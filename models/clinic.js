'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clinic.init({
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    phoneNumber: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};