import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { fetchColorsReducer } from './fetch-colors-reducer';
import { initialReducer } from './init-state-reducer';
import { fetchColorsEpic } from '../actions/fetch-colors-action';

export const rootReducer = combineReducers({
  intialState: initialReducer,
  colors: fetchColorsReducer  
});

export const rootEpic = combineEpics({
  fetchColorsEpic
});
