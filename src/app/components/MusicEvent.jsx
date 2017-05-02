import React, { PropTypes } from 'react';

const { string } = PropTypes;

const MusicEvent = (props) => {
  const { event_title: title, event_description_short: description, event_logo_url: logo } = props;

  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

MusicEvent.defaultProps = {
  event_title: '',
  event_description_short: ''
};

MusicEvent.propTypes = {
  event_title: string.isRequired,
  event_description_short: string.isRequired,
  event_logo_aspect_ratio: string.isRequired,
  event_logo_url: string.isRequired
};

export default MusicEvent;
