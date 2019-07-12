import { createStore, combineReducers } from 'redux';
import placeReducer from './reducers/placeReducer';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  places: placeReducer,
  counterReducer: counterReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;