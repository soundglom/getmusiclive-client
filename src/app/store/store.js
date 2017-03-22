import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connect } from 'react-redux';
// import thunk from 'redux-thunk';
import * as actions from '../actions';
import { rootReducer, rootEpic } from '../reducers';
import { fetchColorsEpic } from '../actions/fetch-colors-action';

const epicMiddleware = createEpicMiddleware(fetchColorsEpic);
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

// Redux props and action connectors
const mapStateToProps = state => {
  return {
    colors: state.colors,
    url: state.url
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
