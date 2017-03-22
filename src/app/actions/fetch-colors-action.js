import { ajax } from 'rxjs/observable/dom/ajax';
import { FETCH_COLORS, INITIAL_STATE, RECIEVE_COLORS } from './action-types';

export const fetchColorsAction = () => ({ type: FETCH_COLORS, payload: 'api' });
export const recieveColorsAction = response => ({ type: RECIEVE_COLORS, payload: response });

export const fetchColorsEpic = action$ =>
  action$.ofType(FETCH_COLORS)
    .mergeMap(action =>
      ajax.getJSON(`/${action.payload}`)
        .map(response => recieveColorsAction(response))
    );