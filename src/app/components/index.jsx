import React, { Component, PropTypes } from 'react';
import { connector } from '../store/store';

const { func, shape, object } = PropTypes;

class Color extends Component {
  componentDidMount() {
    this.props.fetchColorsAction();
  }

  renderColors() {
    if (!this.props.colors) return null;

    return (
      <div>
        {this.props.colors.map((color, index) => {
          const key = String(index);
          const { colorName, hexValue } = color;
          const wordColor = { color: hexValue };
          const textShadow = {
            textShadow: `3px 2px ${hexValue}`,
            fontStyle: 'italic'
          };

          return (
            <div key={key}>
              <h1 style={wordColor}>{colorName}</h1>
              <h3 style={textShadow}>{hexValue}</h3>
            </div>
          );
        })}
      </div>

    );
  }

  render() {
    return (
      <div>{this.renderColors()}</div>
    );
  }
}

Color.propTypes = {
  fetchColorsAction: func.isRequired,
  colors: shape([
    object
  ]).isRequired
};

export default connector(Color);
