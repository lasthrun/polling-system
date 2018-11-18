import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import polls from './polls';
import {POLLS} from '../constants/REDUCER_TYPES';

const reducers = combineReducers({
  [POLLS]: polls,
});

const middleWares = applyMiddleware(createLogger({
  diff: true,
  collapsed: true,
}));

export default createStore(reducers, middleWares);
