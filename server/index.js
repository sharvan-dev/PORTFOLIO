const express = require('express');
const cors = require('cors');
require('dotenv').config();
const contactHandler = require('../api/contact');

const app = express();
app.use(cors());
app.use(express.json());

app.all('/api/contact', contactHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
