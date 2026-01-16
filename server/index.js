const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-5-mini';

if (!OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY not set. /api/chat will fail until it is provided in the environment.');
}

app.post('/api/chat', async (req, res) => {
  const { messages, temperature } = req.body;

  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages must be an array' });
  }

  try {
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages,
        temperature: typeof temperature === 'number' ? temperature : 0.7,
        max_tokens: 800,
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      return res.status(resp.status).json(data);
    }

    return res.json(data);
  } catch (err) {
    console.error('Error calling OpenAI:', err);
    return res.status(500).json({ error: 'OpenAI request failed', details: String(err) });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server proxy listening on http://localhost:${PORT} - forwarding to model=${OPENAI_MODEL}`);
});
