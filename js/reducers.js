/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import routes from './routes';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
import notesReducer from './container/Notes/reducer';
import theme from './theme/reducer';
export default function createReducer(asyncReducers) {
  return combineReducers({
    routes,
    theme,
    notes: notesReducer,
    ...asyncReducers
  });
}
