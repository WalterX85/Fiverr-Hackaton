const express = require('express');

const app = express();

const port = 9000;

app.listen(9000, () => {
  console.log(`server is running on ${port}`);
});
