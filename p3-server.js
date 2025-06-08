const express = require('express');
const { coinCombo, coinValue } = require('./p3-module');

const app = express();
const PORT = 8080;
const HOST = '127.0.0.1';

app.use(express.static('public'));

app.get('/coincombo', (req, res) => {
  const amount = parseInt(req.query.amount);
  if (isNaN(amount) || amount < 0) {
    return res.json({ error: 'Invalid or missing amount parameter' });
  }
  res.json(coinCombo(amount));
});

app.get('/coinvalue', (req, res) => {
  const coins = {
    pennies: parseInt(req.query.pennies) || 0,
    nickels: parseInt(req.query.nickels) || 0,
    dimes: parseInt(req.query.dimes) || 0,
    quarters: parseInt(req.query.quarters) || 0,
    halves: parseInt(req.query.halves) || 0,
    dollars: parseInt(req.query.dollars) || 0
  };
  res.json(coinValue(coins));
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
