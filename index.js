const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

app.listen(port, () => {
  console.log(`CORS-enbled server is listening on port ${port}`);
});
