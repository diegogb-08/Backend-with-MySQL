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
      this.hasMany(models.Appointment, {
        as: 'customer',
        foreignKey: 'meetingId'
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    genre: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    dni: DataTypes.STRING,
    pathologies: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};