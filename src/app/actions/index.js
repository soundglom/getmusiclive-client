import axios from 'axios';
export const INITIAL_STATE = 'INITIAL_STATE', FETCH_COLORS = 'FETCH_COLORS';

export const initialStateAction = state => {
  return { type: INITIAL_STATE };
};

export const fetchColors = state => {
  const fetch = axios.get('/api');

  return (dispatch) => {
    fetch.then((res) => {
      dispatch({ type: FETCH_COLORS, payload: { colors: res.data.colorsArray, state } });
    });
  };
};