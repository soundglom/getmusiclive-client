import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connect } from 'react-redux';
// import thunk from 'redux-thunk';
import * as actions from '../actions';
import { rootReducer } from '../reducers';
import { fetchColorsEpic } from '../epics';

const epicMiddleware = createEpicMiddleware(fetchColorsEpic);
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

// Redux props and action connectors
const mapStateToProps = state => ({
  colors: state.currentState.colors,
  url: state.currentState.url
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const connector = connect(mapStateToProps, mapDispatchToProps);
