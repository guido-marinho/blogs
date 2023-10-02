const express = require('express');
const { loginRouter } = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.use('/login', loginRouter);

module.exports = app;
