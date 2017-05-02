import {
  INITIAL_STATE, FETCH_COLORS, RECIEVE_COLORS, FETCH_EVENTS, RECIEVE_EVENTS
} from './action-types';

export const initialStateAction = () => ({ type: INITIAL_STATE });

export const fetchColorsAction = () => ({ type: FETCH_COLORS, payload: 'colors' });
export const recieveColorsAction = response => ({ type: RECIEVE_COLORS, payload: response });

export const fetchEventsAction = () => ({ type: FETCH_EVENTS, payload: 'events' });
export const recieveEventsAction = response => ({ type: RECIEVE_EVENTS, payload: response });
