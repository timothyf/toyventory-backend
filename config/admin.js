const AdminJS = require('adminjs');
const AdminJSSequelize = require('@adminjs/sequelize');
const models = require('../models');

AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [],
  rootPath: '/admin',
  resources: [
    {
      resource: models.CatalogFigure,
      options: {
        navigation: 'Toyventory',
        listProperties: ['id', 'name', 'year', 'barcode', 'manufacturer_id'],
        editProperties: ['name', 'description', 'manufacturer_id', 'year'],
        properties: {
          manufacturer_id: { reference: 'manufacturers' },
          country_id: { reference: 'countries' },
        },
      },
    },
    { resource: models.Manufacturer, options: { navigation: 'Toyventory' } },
    { resource: models.Country, options: { navigation: 'Toyventory' } },
  ],
});

module.exports = adminJs;
