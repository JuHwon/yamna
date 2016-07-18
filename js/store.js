/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  // Create the store with middlewares
  // 1. routerMiddleware: Syncs the location/URL path to the state

  const middlewares = [
    sagaMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  );

  //Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};  // Async reducer registry

  return store;

}
