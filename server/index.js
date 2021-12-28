const path = require("path");
const fs = require("fs")
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const express = require("express");
const app = express(); // create express app
import App from '../src/App'

// add middlewares
app.use(express.static('./build'))

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

// start express server on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});