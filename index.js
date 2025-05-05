const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Toyventory Backend is running!');
});

// Example route for future eBay integration
app.get('/api/estimated-value', async (req, res) => {
    console.log('Received request for estimated value');
  const { keyword } = req.query;
  if (!keyword) return res.status(400).json({ error: 'Keyword is required' });

  // Placeholder until real eBay logic is added
  res.json({ keyword, estimatedValue: '$25.00 (mocked)' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
