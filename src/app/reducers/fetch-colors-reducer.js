import { RECIEVE_COLORS, FETCH_COLORS } from '../actions/action-types';

export const fetchColorsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COLORS:
      
      return Object.assign({}, state, { url: action.payload });
    case RECIEVE_COLORS:
      
      return Object.assign({}, state, { colors: action.payload.colorsArray });
    default:
      return state;
  }
};
