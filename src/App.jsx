import React, { createContext } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Routes from './Routes';
import './icons';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
