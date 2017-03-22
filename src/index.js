import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
import { store, connector } from './app/store/store.js';
import Color from './app/components';

// store.dispatch({ type: 'INITIAL_STATE' });
// console.warn(store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Color />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
