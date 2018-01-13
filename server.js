'use strict';

const express = require('express');
const ecstatic = require('ecstatic');
const http = require('http');

const app = express();

app.use(ecstatic({
  root: `/src/zalman/dist`,
  showdir: true,
}));

http.createServer(app).listen(5000);

console.log('Listening on :5000');

