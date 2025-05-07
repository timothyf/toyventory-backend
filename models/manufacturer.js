module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define('Manufacturer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    modelName: 'Manufacturer',
    tableName: 'manufacturers',  // match your actual DB table
    freezeTableName: true,       // don't pluralize or change case
    underscored: true,
  });

  Manufacturer.associate = function(models) {
    Manufacturer.hasMany(models.CatalogFigure, {
      foreignKey: 'manufacturer_id',
      as: 'figures',
    });
  };

  return Manufacturer;
};

