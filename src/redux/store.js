import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from 'reducers';

const configureStore = (initialState = {}) => {
  const logger = createLogger({
    collapsed: true,
    predicate: () =>
      process.env.NODE_ENV === `development`,
  });

  const middleware = applyMiddleware(thunk, logger);
  const store = middleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
