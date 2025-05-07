// routes/figures.js or similar
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/figures', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM figures');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

module.exports = router;
