const express = require('express');

const app = express().listen(1245, () => {
  console.log('Hello Holberton School!');
});

module.exports = app;
