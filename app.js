'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
  res
    .send('Hello Express!');
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});