import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import PropTypes from 'prop-types';
import rootSaga from 'sagas/BoardSagas.js';
import reducers from './reducers';


export const Root = ({ children, initialState = {} }) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
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
