import React, { PropTypes } from 'react';

const { shape, string } = PropTypes;

const Color = (props) => {
  const { color: { colorName, hexValue } } = props;
  const wordColor = { color: hexValue };
  const textShadow = {
    textShadow: `3px 2px ${hexValue}`,
    fontStyle: 'italic'
  };

  return (
    <div>
      <h1 style={wordColor}>{colorName}</h1>
      <h3 style={textShadow}>{hexValue}</h3>
    </div>
  );
};

Color.defaultProps = {
  color: {},
};

Color.propTypes = {
  color: shape({
    colorName: string,
    hexValue: string
  }).isRequired
};

export default Color;
