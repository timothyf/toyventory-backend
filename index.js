const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcrypt');

const AdminJSExpress = require('@adminjs/express');
const adminJs = require('./config/admin');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic authentication config
const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@example.com',
  passwordHash: process.env.ADMIN_PASSWORD_HASH,
};

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    authenticate: async (email, password) => {
      if (email === ADMIN.email && ADMIN.passwordHash) {
        const match = await bcrypt.compare(password, ADMIN.passwordHash);
        if (match) return ADMIN;
      }
      return null;
    },
    cookieName: 'adminjs',
    cookiePassword: process.env.COOKIE_SECRET || 'supersecret-cookie',
  },
  null,
  {
    resave: false,
    saveUninitialized: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(adminJs.options.rootPath, adminRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Toyventory Backend is running!');
});

// Example API route
app.get('/api/estimated-value', async (req, res) => {
  const { keyword } = req.query;
  if (!keyword) return res.status(400).json({ error: 'Keyword is required' });

  res.json({ keyword, estimatedValue: '$25.00 (mocked)' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🛠️ AdminJS available at http://localhost:${PORT}${adminJs.options.rootPath}`);
});
