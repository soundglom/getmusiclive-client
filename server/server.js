const express = require('express');
const axios = require('axios');
const { resolve } = require('path');

const app = express();
const PORT = process.env.PORT || 5001;
const publicPath = resolve(__dirname, '../dist/');

app.use('/', express.static(publicPath));

app.get('/api', (req, res) => {
  // Enabled by 'links: - getmusiclive-server' in 'docker-compose.yml'
  axios.get('http://getmusiclive-server/api')
    .then(data => {

      res.send(data.data);
    }).catch(err => console.log('WE HAVE AN ERROR: ', err));
});

app.listen(PORT, () => {
  console.log(`Client server running on port: ${PORT}`);
});