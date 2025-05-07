const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toyventory', 'neondb_owner', 'npg_G2ogteU8Ohiq', {
  host: 'ep-little-art-a4lh1d8z-pooler.us-east-1.aws.neon.tech',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => console.log('✅ Connection has been established successfully.'))
  .catch(err => console.error('❌ Unable to connect to the database:', err));
