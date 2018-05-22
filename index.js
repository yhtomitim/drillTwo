const express = require('express');
const cors = require('cors');
const data = require('./instructors.js');
const app = express();
const port = process.env.port || 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/', (req, res) => {
  res.send(data);
});

app.get('/:id', (req, res) => {
  let paramId = req.params.id;
  let dataArr = data.data;
  filterById(paramId, dataArr, res);
});

app.listen(port, () => {
  console.log(`CORS-enbled server is listening on port ${port}`);
});

function filterById(id, data, res) {
  const result = data.filter(index => index.id == id);
  if (!result.length) {
    res.status(404);
    return res.send({ message: 'No Record Found!' });
  }
  return res.json({
    data: {
      id: result[0].id,
      fullName: result[0].fullName,
      title: result[0].title,
      numberOfDogs: result[0].numberOfDogs
  } });
}