import { INITIAL_STATE, FETCH_COLORS } from '../actions';

const initialState = {
  colors: {}
};

const initialReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      
      return initialState;
    case FETCH_COLORS:
      return Object.assign({}, state, { colors: action.payload.colors });
    default:
      return state;
  }
};

export default initialReducer;