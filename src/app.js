const path = require('path');
const express = require('express');

const apply = require(path.join(__src, 'middlewares'));
const router = require(path.join(__src, 'routes'));

const app = express();

apply(app);
app.use(router);

module.exports = app;
