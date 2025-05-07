'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('catalog_figures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alt_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      theme: {
        type: Sequelize.STRING
      },
      manufacturer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'manufacturers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      barcode: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'countries',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      size: {
        type: Sequelize.STRING
      },
      series: {
        type: Sequelize.STRING
      },
      model_number: {
        type: Sequelize.STRING
      },
      asst_number: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
      },
      date_added: {
        type: Sequelize.DATE
      },
      automatic_estimated_date: {
        type: Sequelize.DATE
      },
      automatic_estimated_value: {
        type: Sequelize.FLOAT
      },
      signed_by: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('catalog_figures');
  }
};
