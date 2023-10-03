const express = require('express');
const {
  loginRouter,
  userRouter,
  categoryRouter,
  postRouter,
} = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

module.exports = app;
