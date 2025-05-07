'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.CatalogFigure, {
        foreignKey: 'country_id',
        as: 'figures',
      });
    }
  }

  Country.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      code: {
        type: DataTypes.STRING(2),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Country',
      tableName: 'countries',
      underscored: true,      // 👈 snake_case columns like created_at
      timestamps: true,       // 👈 enables created_at and updated_at
    }
  );

  return Country;
};
