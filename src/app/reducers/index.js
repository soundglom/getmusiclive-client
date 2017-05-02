import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import fetchColorsReducer from './fetch-colors-reducer';
import { initialReducer } from './init-state-reducer';
import { fetchColorsEpic, fetchEventsEpic } from '../actions';

export const rootReducer = combineReducers({
  intialState: initialReducer,
  currentState: fetchColorsReducer
});

export const rootEpic = combineEpics({
  fetchColorsEpic
});
