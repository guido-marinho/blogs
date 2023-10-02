const express = require('express');
const { loginRouter, userRouter } = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.use('/login', loginRouter);
app.use('/user', userRouter);

module.exports = app;
