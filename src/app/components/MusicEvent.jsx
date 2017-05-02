import React, { PropTypes } from 'react';

const { string } = PropTypes;

const MusicEvent = (props) => {
  const { event_title: title, event_description_short: description } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

MusicEvent.defaultProps = {
  event_title: '',
  event_description_short: ''
};

MusicEvent.propTypes = {
  event_title: string.isRequired,
  event_description_short: string.isRequired
};

export default MusicEvent;
