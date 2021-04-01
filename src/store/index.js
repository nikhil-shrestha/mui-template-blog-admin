import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

store.sagaTask = sagaMiddleware.run(rootSaga);

export default store;
