'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<b>Hello World</b></br>C&#39;est -Bonjour monde- en fran&#231;ais.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);