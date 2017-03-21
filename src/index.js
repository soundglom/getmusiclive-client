import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, connector } from './app/store/store.js';
import Color from './app/components';

store.dispatch({ type: 'INITIAL_STATE' });

class App extends Component {
  componentDidMount() {
    store.dispatch({ type: 'INITIAL_STATE' });
  }
  
  render() {
    return (
      <Provider store={store}>
        <Color />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));

// import axios from 'axios';
// 
// axios.get('/api').then(res => {
//   console.log(res.data.colorsArray);
// })
// 
// console.warn(React);
