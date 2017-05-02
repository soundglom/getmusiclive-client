import React, { Component, PropTypes } from 'react';
import { connector } from '../store/store';
import { MusicEvent } from '../components';

const { func, object, arrayOf } = PropTypes;

class EventsContainer extends Component {
  static defualtComponent() {
    return <div><h1>No Events</h1></div>;
  }

  static primaryComponent(events) {
    return events.map((musicEvent, index) => <MusicEvent {...musicEvent} key={String(index)} />);
  }

  componentDidMount() {
    this.props.fetchEventsAction();
  }

  render() {
    const { events } = this.props;
    const defaultComponent = EventsContainer.defualtComponent();
    const primaryComponent = EventsContainer.primaryComponent(events);

    return (
      <div>
        {!EventsContainer ? defaultComponent : primaryComponent}
      </div>
    );
  }
}

EventsContainer.defaultProps = {
  events: [],
};

EventsContainer.propTypes = {
  fetchEventsAction: func.isRequired,
  events: arrayOf(object).isRequired
};

export default connector(EventsContainer);
