'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Appointment.init({
    time: DataTypes.DATE,
    date: DataTypes.DATE,
    price: DataTypes.NUMBER,
    duration: {
      type: DataTypes.STRING,
      defaultValue: "30 min"
    },
    covid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};