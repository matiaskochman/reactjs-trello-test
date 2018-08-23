import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import reduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from 'containers/board/BoardSagas.js';

export default ({children, initialState = {} }) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}