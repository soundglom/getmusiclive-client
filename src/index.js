/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
import { store } from './app/store/store';
import ColorsContainer from './app/containers';

const App = () => (
  <Provider store={store}>
    <ColorsContainer />
  </Provider>
);

render(<App />, document.getElementById('app'));
