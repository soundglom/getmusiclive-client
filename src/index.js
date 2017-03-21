import React from 'react';
import axios from 'axios';

axios.get('/api').then(res => {
  console.log(res.data.colorsArray);
})

console.warn(React);
