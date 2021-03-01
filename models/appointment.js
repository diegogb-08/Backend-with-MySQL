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
      this.belongsTo(models.User, {
        as: 'appointment',
        foreignKey: 'customerId'
      })

      this.belongsTo(models.Clinic, {
        as: 'appointment',
        foreignKey: 'clinicId'
      })
    }
  };
  Appointment.init({
    time: DataTypes.DATE,
    date: DataTypes.DATE,
    price: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    covid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};