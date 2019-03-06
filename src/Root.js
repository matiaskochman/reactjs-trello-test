import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import PropTypes from 'prop-types';
import rootSaga from 'sagas/BoardSagas.js';
import reducers from './reducers';

//component created to disassociate the implementation of redux of the application,
// to be able to do integration tests with jest / enzyme
export const Root = ({ children, initialState = {} }) => {
  const sagaMiddleware = createSagaMiddleware();
  // const logger = new logger();
  const logger = createLogger({
    collapsed: true
  });
  const middlewares = [];
  middlewares.push(sagaMiddleware);
  middlewares.push(logger);
  // const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
  const store = createStore(reducers, initialState, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
Root.propTypes = {
  children: PropTypes.object,
  initialState: PropTypes.object
};
