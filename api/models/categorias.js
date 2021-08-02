'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Categorias.init({
    titulo: DataTypes.STRING,
    cor: {
      type: DataTypes.STRING(7),
      validate: {
        is: {
          args: ["^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"],
          msg: "A cor deve ser um hexadecimal de 3 ou 6 caracteres iniciado por um #"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Categorias',
  });
  return Categorias;
};