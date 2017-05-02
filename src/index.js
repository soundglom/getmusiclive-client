/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
import { store } from './app/store/store';
import { ColorsContainer, EventsContainer } from './app/containers';

const App = () => (
  <Provider store={store}>
    <div>
      <ColorsContainer />
      <EventsContainer />
    </div>
  </Provider>
);

render(<App />, document.getElementById('app'));
