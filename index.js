const express = require('express');
const app = express();

const port = 3000;

app.get('/hello', function (req, res) {
  res.send('Hello World');
});

app.listen(port, function() {
  console.info('App rodando em http://localhost:' + port)
});