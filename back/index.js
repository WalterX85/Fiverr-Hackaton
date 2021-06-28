const express = require('express');

const app = express();

const userRoutes = require('./routes/users');

app.use('/users', userRoutes);
const port = 9000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
