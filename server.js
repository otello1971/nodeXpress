'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<b>Hello World</b></br>ECest -Bonjour monde- en francais.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);