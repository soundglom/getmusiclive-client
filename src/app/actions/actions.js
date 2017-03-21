import axios from 'axios';
import {
  INITIAL_STATE, FETCH_COLORS
} from './action-types';

export const initialStateAction = state => {
  return { type: INITIAL_STATE };
};

export const fetchColors = state => {
  const fetch = axios.get('/api/data');

  return (dispatch) => {
    fetch.then((res) => {
      console.warn('Response: ', res);
      dispatch({ type: FETCH_EVENTS, payload: { res, state } });
    });
  };
};