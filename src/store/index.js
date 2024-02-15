import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { reducerPeliculas, reducerSeries } from '../reducers/index';

const rootReducer = combineReducers({
  peliculas: reducerPeliculas,
  series: reducerSeries
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
