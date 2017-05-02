/* eslint no-console: 0 */
const express = require('express');
const axios = require('axios');
const { resolve } = require('path');

const app = express();
const PORT = process.env.PORT || 5006;
const publicPath = resolve(__dirname, '../dist/');

app.use('/', express.static(publicPath));

app.get('/colors', (req, res) => {
  // Enabled by 'links: - getmusiclive-server' in 'docker-compose.yml'
  // axios.get('http://getmusiclive-server/colors')
  axios.get('http://localhost:5005/colors')
    .then((data) => {
      res.send(data.data);
    }).catch(err => console.log('WE HAVE AN ERROR: ', err));
});

app.get('/events', (req, res) => {
  // Enabled by 'links: - getmusiclive-server' in 'docker-compose.yml'
  // axios.get('http://getmusiclive-server/events')
  axios.get('http://localhost:5005/events')
    .then((data) => {
      console.log('Server events: ', data.data);
      res.send(data.data);
    }).catch(err => console.log('WE HAVE AN ERROR: ', err));
});

app.listen(PORT, () => {
  console.log(`Client server running on port: ${PORT}`);
});
