const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('app1')
});

app.listen(port, () => {
  console.log(`app1 listening at http://localhost:${port}`);
});