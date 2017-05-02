import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { FETCH_COLORS, FETCH_EVENTS, recieveColorsAction, recieveEventsAction } from '../actions';

// Fetch colors from the api
export const fetchColorsEpic = action$ =>
  action$.ofType(FETCH_COLORS)
    .mergeMap(action =>
      ajax.getJSON(`/${action.payload}`)
        .map(response => recieveColorsAction(response))
    );

// Fetch events from the api
export const fetchEventsEpic = action$ =>
  action$.ofType(FETCH_EVENTS)
    .mergeMap(action =>
      ajax.getJSON(`/${action.payload}`)
        .map(response => recieveEventsAction(response))
    );


const rootEpic = combineEpics(
  fetchColorsEpic, fetchEventsEpic
);


export default rootEpic;
