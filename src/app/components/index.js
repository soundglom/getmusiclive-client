import React, { Component } from 'react';
import { connector } from '../store/store.js';


class Color extends Component {
  componentDidMount() {
    this.props.fetchColorsAction();    
  }
  
  renderColors() {
    console.warn('props: ', this.props.colors);
    if (!this.props.colors.colors) return null;
    
    return (
      <div>
        {this.props.colors.colors.map((color, index) => {
          return (
            <div key={index}>
              <h1>color.colorName</h1>
              <h3>color.hexValue</h3>
            </div>
          );
        })}
      </div>
    );
  }
  
  render() {
    console.warn(this.props);
    return (
      <div>{this.renderColors()}</div>
    );
  }
}

export default connector(Color);