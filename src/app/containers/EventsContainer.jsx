import React, { Component, PropTypes } from 'react';
import { connector } from '../store/store';
// import Color from '../components';

const { func, object, arrayOf } = PropTypes;

class EventsContainer extends Component {
  // static defualtComponent() {
  //   return <div><h1>No Colors</h1></div>;
  // }
  //
  // static primaryComponent(colors) {
  //   return colors.map((color, index) => <Color color={color} key={String(index)} />);
  // }

  componentDidMount() {
    this.props.fetchEventsAction();
  }

  render() {
    // const { colors } = this.props;
    // const defaultComponent = ColorsContainer.defualtComponent();
    // const primaeryComponent = ColorsContainer.primaryComponent(colors);
    // <div>
    //   {!colors ? defaultComponent : primaeryComponent}
    // </div>

    return (
      <div><h1>No Colors</h1></div>

    );
  }
}

EventsContainer.defaultProps = {
  events: [],
};

EventsContainer.propTypes = {
  fetchEventsAction: func.isRequired,
  events: arrayOf(object)
};

export default connector(EventsContainer);
