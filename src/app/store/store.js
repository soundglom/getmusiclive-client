import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connect } from 'react-redux';
// import thunk from 'redux-thunk';
import * as actions from '../actions';
import { rootReducer } from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

// Redux props and action connectors
// const mapStateToProps = state => ({
//   colors: state.currentState.colors,
//   events: state.currentState.colors,
//   url: state.currentState.url
// });

const mapStateToProps = (state) => {
  const { currentState } = state;
  const { fetchColorsReducer, fetchEventsReducer } = currentState;

  return {
    colors: fetchColorsReducer.colors,
    events: fetchEventsReducer.events
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const connector = connect(mapStateToProps, mapDispatchToProps);
