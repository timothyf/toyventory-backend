require('dotenv').config(); // Load .env

module.exports = {
  development: {
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DEV_DB_DIALECT,
  },
  staging: {
    username: process.env.STAGING_DB_USER,
    password: process.env.STAGING_DB_PASS,
    database: process.env.STAGING_DB_NAME,
    host: process.env.STAGING_DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.STAGING_DB_SSL === 'true'
        ? { require: true, rejectUnauthorized: false }
        : false
    }
  }
};
