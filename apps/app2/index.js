const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('app2');
});

app.listen(port, () => {
  console.log(`app2 listening at http://localhost:${port}`);
});