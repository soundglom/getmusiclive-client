import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { fetchColorsReducer, fetchEventsReducer } from './fetch-reducers';
import { INITIAL_STATE } from '../actions';
import { fetchColorsEpic, fetchEventsEpic } from '../epics';

const initialState = {
  colors: [],
  events: []
};

const initialReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIAL_STATE:

      return Object.assign({}, initialState);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  intialState: initialReducer,
  currentState: combineReducers({ fetchColorsReducer, fetchEventsReducer })
});

export const rootEpic = combineEpics({
  fetchColorsEpic, fetchEventsEpic
});
