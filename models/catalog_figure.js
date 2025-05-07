// models/catalog_figure.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const CatalogFigure = sequelize.define('CatalogFigure', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alt_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    theme: DataTypes.STRING,
    barcode: DataTypes.STRING,
    year: DataTypes.INTEGER,
    size: DataTypes.STRING,
    series: DataTypes.STRING,
    model_number: DataTypes.STRING,
    asst_number: DataTypes.STRING,
    release_date: DataTypes.DATE,
    date_added: DataTypes.DATE,
    automatic_estimated_date: DataTypes.DATE,
    automatic_estimated_value: DataTypes.FLOAT,
    signed_by: DataTypes.STRING,
    country_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'countries',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    manufacturer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'manufacturers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  }, {
    tableName: 'catalog_figures',
    underscored: true,
  });

  CatalogFigure.associate = function(models) {
    CatalogFigure.belongsTo(models.Country, {
      foreignKey: 'country_id',
      as: 'country',
    });
    CatalogFigure.belongsTo(models.Manufacturer, {
      foreignKey: 'manufacturer_id',
      as: 'manufacturer',
    });
  };

  return CatalogFigure;
};
