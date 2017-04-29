import {
  INITIAL_STATE, FETCH_COLORS, RECIEVE_COLORS, FETCH_EVENTS, RECIEVE_EVENTS
} from './action-types';

export const initialStateAction = () => ({ type: INITIAL_STATE });

export const fetchColorsAction = () => ({ type: FETCH_COLORS, payload: 'api' });
export const recieveColorsAction = response => ({ type: RECIEVE_COLORS, payload: response });

export const fetchEventsAction = () => ({ type: FETCH_EVENTS, payload: 'colors' });
export const recieveEventsAction = response => ({ type: RECIEVE_EVENTS, payload: response });
