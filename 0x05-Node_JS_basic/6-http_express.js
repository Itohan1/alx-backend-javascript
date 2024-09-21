const express = require('express');

const app = express();

app.listen(1245, () => {
  console.log('Hello Holberton School!');
});

module.exports = app;
