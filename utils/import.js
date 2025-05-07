// import_figures.js
const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');
const { Sequelize, Country, Manufacturer, CatalogFigure } = require('./models'); // Adjust path if needed

async function findOrCreateManufacturer(name) {
  if (!name) return null;
  const [record] = await Manufacturer.findOrCreate({ where: { name } });
  return record.id;
}

async function findOrCreateCountry(name) {
  if (!name) return null;
  const [record] = await Country.findOrCreate({ where: { name } });
  return record.id;
}

async function importFigureFromCSV(csvPath) {
  const figures = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csvParser())
      .on('data', row => figures.push(row))
      .on('end', async () => {
        try {
          for (const fig of figures) {
            const manufacturer_id = await findOrCreateManufacturer(fig.manufacturer);
            const country_id = await findOrCreateCountry(fig.country);

            await CatalogFigure.create({
              name: fig.name,
              alt_name: fig.alt_name || null,
              description: fig.description || null,
              theme: fig.theme || null,
              manufacturer_id: manufacturer_id,
              barcode: fig.barcode || null,
              year: fig.year ? parseInt(fig.year) : null,
              country_id: country_id,
              size: fig.size || null,
              series: fig.series || null,
              model_number: fig.model_number || null,
              asst_number: fig.asst_number || null,
              release_date: fig.release_date || null,
              date_added: fig.date_added || null,
              automatic_estimated_date: fig.automatic_estimated_date || null,
              automatic_estimated_value: fig.automatic_estimated_value ? parseFloat(fig.automatic_estimated_value) : null,
              signed_by: fig.signed_by || null,
            });
          }
          console.log(`✅ Successfully imported ${figures.length} figures.`);
          resolve();
        } catch (err) {
          console.error('❌ Error during import:', err);
          reject(err);
        }
      });
  });
}

// Usage
const csvFilePath = path.resolve(__dirname, 'figures.csv'); // Update to your file path
importFiguresFromCSV(csvFilePath)
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
