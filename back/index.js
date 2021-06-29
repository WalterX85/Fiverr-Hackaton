const express = require('express');

const app = express();

app.use(express.json());

const questionsRoutes = require('./routes/questions');
const userRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');

app.use('/questions', questionsRoutes);
app.use('/users', userRoutes);
app.use('./login', loginRoutes);

const port = 9000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

module.exports = app;
