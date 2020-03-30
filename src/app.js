const path = require('path');
const express = require('express');

const router = require(path.join(__src, 'routes'));

const app = express();

app.use(router);

module.exports = app;
