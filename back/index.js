const express = require('express');

const cors = require('cors');

const app = express(); require('express').Router();

app.use(express.json());
app.use(cors());

const questionsRoutes = require('./routes/questions');
const userRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');

app.use('/questions', questionsRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoutes);

const port = 9000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = app;
