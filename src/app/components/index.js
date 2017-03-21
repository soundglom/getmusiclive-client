import React, { Component } from 'react';
import { connector } from '../store/store.js';


class Color extends Component {
  componentDidMount() {
    this.props.fetchColors();    
  }
  
  renderColors() {
    if (!this.props.colors.length) return null;
    
    return (
      <div>
        {this.props.colors.map((color, index) => {
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