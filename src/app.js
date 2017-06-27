const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Qubernetes from ' + (process.env.POD_NAME || 'dev'));
});

http.createServer(app).listen(8080, '0.0.0.0');
