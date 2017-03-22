import { INITIAL_STATE } from '../actions/action-types';

const initialState = {};

export const initialReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
